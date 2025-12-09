import { join, relative, sep } from 'node:path';

import type { CodemodOptions, Options } from '../../types/run-new.js';

function dasherize(packageName: string): string {
  return packageName.replace('@', '').replace(/\W|_/g, '-');
}

function pascalize(packageName: string): string {
  const dasherizedName = dasherize(packageName);

  return dasherizedName
    .split('-')
    .map((token) => {
      return token.charAt(0).toUpperCase() + token.substring(1).toLowerCase();
    })
    .join('');
}

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { location, name, projectRoot } = codemodOptions;

  const dasherizedName = dasherize(name);
  const pascalizedName = pascalize(name);

  const addonLocation = join(
    'packages',
    location ?? dasherize(name),
  ).replaceAll(sep, '/');

  const addonLocationInverse = relative(addonLocation, '.').replaceAll(
    sep,
    '/',
  );

  return {
    addon: {
      dasherizedName,
      location: addonLocation,
      locationInverse: addonLocationInverse,
      name,
      pascalizedName,
    },
    docsApp: {
      location: 'docs-app',
      name: 'docs-app',
    },
    projectRoot,
    testApp: {
      location: 'test-app',
      name: 'test-app',
    },
  };
}
