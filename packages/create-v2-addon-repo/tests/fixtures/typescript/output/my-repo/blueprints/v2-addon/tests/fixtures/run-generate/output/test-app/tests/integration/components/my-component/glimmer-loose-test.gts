import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { module, test } from 'qunit';
import { MyComponentGlimmerLoose } from '@my-org-ui/form';
import { setupRenderingTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | my-component/glimmer-loose', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        <MyComponentGlimmerLoose />
      </template>,
    );

    assert.dom().hasText('');

    await a11yAudit();
  });
});
