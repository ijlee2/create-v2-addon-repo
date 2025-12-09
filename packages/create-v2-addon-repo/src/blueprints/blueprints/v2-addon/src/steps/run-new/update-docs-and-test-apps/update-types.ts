import { readFileSync, writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
import { join } from 'node:path';

import { AST } from '@codemod-utils/ast-javascript';

import type { Options } from '../../../types/run-new.js';

function addImportStatement(file: string, options: Options): string {
  const { addon } = options;

  return [
    `import type ${addon.pascalizedName}Registry from '${addon.name}/template-registry';`,
    file,
  ].join(EOL);
}

function updateRegistry(file: string, options: Options): string {
  const { addon } = options;

  const traverse = AST.traverse(true);

  const ast = traverse(file, {
    visitTSModuleDeclaration(path) {
      const moduleName = path.value.id.value as string;

      if (moduleName !== '@glint/environment-ember-loose/registry') {
        return false;
      }

      const exportStatement = path.value.body.body.find(
        (node: { type: string }) => {
          return node.type === 'ExportDefaultDeclaration';
        },
      );

      const registriesToExtend: string[] = (
        exportStatement.declaration.extends ?? []
      ).map((node: { expression: { name: string } }) => {
        return node.expression.name;
      });

      exportStatement.declaration.extends = [
        ...registriesToExtend,
        `${addon.pascalizedName}Registry`,
      ].sort();

      return false;
    },
  });

  return AST.print(ast);
}

export function updateTypes(appRoot: string, options: Options): void {
  const oldPath = join(appRoot, 'types/global.d.ts');
  const oldFile = readFileSync(oldPath, 'utf8');

  let newFile = addImportStatement(oldFile, options);
  newFile = updateRegistry(newFile, options);

  writeFileSync(oldPath, newFile, 'utf8');
}
