'use strict';

const buildType = process.config.target_defaults.default_configuration;
const assert = require('assert');

test(require(`../build/${buildType}/binding.node`));
test(require(`../build/${buildType}/binding_noexcept.node`));

function test(binding) {
  function Ctor() {};

  assert.strictEqual(binding.object.instanceOf(new Ctor(), Ctor), true);
  assert.strictEqual(binding.object.instanceOf(new Ctor(), Object), true);
  assert.strictEqual(binding.object.instanceOf({}, Ctor), false);
  assert.strictEqual(binding.object.instanceOf(null, Ctor), false);
}
