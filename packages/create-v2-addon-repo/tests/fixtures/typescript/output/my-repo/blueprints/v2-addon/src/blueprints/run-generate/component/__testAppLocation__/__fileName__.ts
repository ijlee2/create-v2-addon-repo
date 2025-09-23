import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from '<%= options.testApp.name %>/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | <%= options.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        <<%= options.entity.doubleColonizedName %> />
      `,
    );

    assert.dom().hasText('');
  });
});
