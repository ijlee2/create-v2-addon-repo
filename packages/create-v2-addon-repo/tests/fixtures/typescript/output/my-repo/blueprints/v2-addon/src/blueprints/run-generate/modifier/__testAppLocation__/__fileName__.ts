import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from '<%= options.testApp.name %>/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Modifier | <%= options.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <div {{<%= options.entity.name %>}}></div>
      `,
    );

    assert.ok(true);
  });
});
