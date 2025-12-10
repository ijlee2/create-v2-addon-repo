import { existsSync } from 'node:fs';
import { join } from 'node:path';

import type { Options } from '../../types/run-new.js';
import {
  updateEmberCliBuild,
  updatePackageJson,
} from './update-docs-and-test-apps/index.js';

export function updateDocsApp(options: Options): void {
  const { docsApp, projectRoot } = options;

  const appRoot = join(projectRoot, docsApp.location);

  if (!existsSync(appRoot)) {
    return;
  }

  updateEmberCliBuild(appRoot, options);
  updatePackageJson(appRoot, options);
}
