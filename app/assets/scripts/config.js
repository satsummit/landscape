/*
 * App configuration.
 *
 * Uses settings in config.production.js, with any properties set by
 * config.local.js overriding them.
 *
 * This file should not be modified.  Instead, modify one of:
 *
 *  - config/production.js - production settings
 *
 *  - config/local.js - local (development) overrides to production settings.
 *    This file is gitignored, so you can safely change it without polluting
 *    the repo.
 *
 *  - config/staging.js - overrides to production settings for staging server
 *    (when applicable): build copies this over as `config.local.js` whenever
 *    that file doesn't already exist.
 */

var config = require('./config/*.js', {mode: 'hash'});

for (var p in config.production) {
  module.exports[p] = config.production[p];
}

var local = config.local || {};
for (var p in local || {}) {
  module.exports[p] = local[p];
}
