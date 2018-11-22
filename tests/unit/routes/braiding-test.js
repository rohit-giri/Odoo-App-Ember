import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | braiding', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:braiding');
    assert.ok(route);
  });
});
