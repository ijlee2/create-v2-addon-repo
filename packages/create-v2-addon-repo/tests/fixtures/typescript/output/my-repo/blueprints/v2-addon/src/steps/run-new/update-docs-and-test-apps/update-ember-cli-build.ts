import { readFileSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';

import { AST } from '@codemod-utils/ast-javascript';

import type { Options } from '../../../types/run-new.js';

function updateSideWatch(file: string, options: Options): string {
  const { addon } = options;

  const traverse = AST.traverse(true);

  const ast = traverse(file, {
    visitCallExpression(path) {
      if (
        path.value.callee.name !== 'sideWatch' ||
        path.value.arguments.length !== 2
      ) {
        return false;
      }

      const watching = path.value.arguments[1].properties?.find(
        (property: { key: { name: string } }) => {
          return property.key.name === 'watching';
        },
      );

      if (!watching) {
        return false;
      }

      const paths = [
        ...watching.value.elements.map((element: { value: string }) => {
          return element.value;
        }),
        join('..', addon.location, 'src').replaceAll(sep, '/'),
      ].sort();

      watching.value.elements = paths.map((path) => {
        return AST.builders.stringLiteral(path);
      });

      return false;
    },
  });

  return AST.print(ast);
}

export function updateEmberCliBuild(appRoot: string, options: Options): void {
  const oldPath = join(appRoot, 'ember-cli-build.js');
  const oldFile = readFileSync(oldPath, 'utf8');

  const newFile = updateSideWatch(oldFile, options);

  writeFileSync(oldPath, newFile, 'utf8');
}
