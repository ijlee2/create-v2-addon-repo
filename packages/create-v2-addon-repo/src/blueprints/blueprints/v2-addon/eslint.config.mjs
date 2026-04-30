import baseConfiguration from '@shared-configs/eslint-config-node/typescript';

export default [
  ...baseConfiguration,
  {
    ignores: [
      'dist/',
      'dist-for-testing/',
      'node_modules/',
      'src/blueprints/',
      'tests/fixtures/',
      'tmp/',
      '.*/',
    ],
  },
  {
    files: ['update-blueprints.mjs'],
    rules: {
      'n/hashbang': 'off',
    },
  },
];
