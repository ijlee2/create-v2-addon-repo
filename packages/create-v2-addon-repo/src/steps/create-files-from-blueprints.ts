import { chmodSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { createFiles, findFiles } from '@codemod-utils/files';

import type { Options } from '../types/index.js';
import { blueprintsRoot } from '../utils/blueprints.js';

function resolveBlueprintFilePath(blueprintFilePath: string): string {
  return blueprintFilePath
    .replace('__gitignore__', '.gitignore')
    .replace('__npmignore__', '.npmignore')
    .replace('__npmrc__', '.npmrc')
    .replace('__nvmrc__', '.nvmrc')
    .replace('__.gitignore__', '__gitignore__');
}

function setExecutePermissions(options: Options): void {
  const { project, projectRoot } = options;

  const files = new Set([
    'blueprints/v2-addon/build.sh',
    'blueprints/v2-addon/update-blueprints.mjs',
    'blueprints/v2-addon/update-test-fixtures.sh',
  ]);

  files.forEach((file) => {
    const filePath = join(projectRoot, project.name, file);

    chmodSync(filePath, 0o755);
  });
}

export function createFilesFromBlueprints(options: Options): void {
  const { project } = options;

  const blueprintFilePaths = findFiles('**/*', {
    projectRoot: blueprintsRoot,
  });

  const fileMap = new Map(
    blueprintFilePaths.map((blueprintFilePath) => {
      const filePath = join(
        project.name,
        resolveBlueprintFilePath(blueprintFilePath),
      );

      const blueprintFile = readFileSync(
        join(blueprintsRoot, blueprintFilePath),
        'utf8',
      );

      const file = processTemplate(blueprintFile, {
        options,
      })
        .replaceAll('\\\\<%=', '<%=')
        .replaceAll('%\\\\>', '%>');

      return [filePath, file];
    }),
  );

  createFiles(fileMap, options);
  setExecutePermissions(options);
}
