import { assertFixture, loadFixture, test } from '@codemod-utils/tests';

import { runNew } from '../../../src/index.js';
import { inputProject, outputProject } from '../../fixtures/run-new/index.js';

const fixtureRoot = 'tmp/run-new';

function runCommands(): void {
  runNew({
    location: 'ui/form',
    name: '@my-org-ui/form',
    projectRoot: fixtureRoot,
  });
}

test('index | run-new > typescript', function () {
  loadFixture(inputProject, { projectRoot: fixtureRoot });

  runCommands();

  assertFixture(outputProject, { projectRoot: fixtureRoot });

  // Check idempotence
  runCommands();

  assertFixture(outputProject, { projectRoot: fixtureRoot });
});
