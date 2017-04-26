import Ember from 'ember';

export default Ember.Route.extend({

  module.exports = {
    name: 'ember-cli-shims',
          'ember-cli-sass',
          'ember-cli-eslint';

    included: function(app) {
      this._super.included.apply(this, arguments);

      app.import(app.bowerDirectory + '/x-button/dist/js/x-button.js');
      app.import(app.bowerDirectory + '/x-button/dist/css/x-button.css');
    }
  };

  afterInstall: function() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        // name is the addon name, and target (optional) is the version
        {name: 'ember-cli-code-coverage', target: '0.3.9'},
        {name: 'ember-cli-sass'}
      ]
    });

    model() {
      return this.store.findAll('rental');
    },
});
