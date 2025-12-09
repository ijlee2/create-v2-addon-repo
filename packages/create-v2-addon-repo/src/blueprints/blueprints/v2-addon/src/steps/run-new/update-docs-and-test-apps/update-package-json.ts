import { existsSync, writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
import { join } from 'node:path';

import {
  convertToMap,
  convertToObject,
  type PackageJson,
  readPackageJson,
} from '@codemod-utils/package-json';

import type { Options } from '../../../types/run-new.js';

function updateDevDependencies(
  packageJson: PackageJson,
  options: Options,
): void {
  const { addon } = options;

  const devDependencies = convertToMap(packageJson['devDependencies']);

  devDependencies.set(addon.name, 'workspace:*');

  packageJson['devDependencies'] = convertToObject(devDependencies);
}

export function updatePackageJson(appRoot: string, options: Options): void {
  if (!existsSync(join(appRoot, 'package.json'))) {
    return;
  }

  const packageJson = readPackageJson({
    projectRoot: appRoot,
  });

  updateDevDependencies(packageJson, options);

  const destination = join(appRoot, 'package.json');
  const file = JSON.stringify(packageJson, null, 2).replaceAll('\n', EOL) + EOL;

  writeFileSync(destination, file, 'utf8');
}
