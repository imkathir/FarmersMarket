'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      enabled: true, // set to true only in required environments
      generateAssetMap: true,
      // extensions: ['css', 'png', 'jpg', 'gif', 'map', 'json'],
      fingerprintAssetMap: true
    }
  });
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // For ember cli builder

  // return app.toTree();
// }

  // For embroider builder
  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    splitAtRoutes: [
      'category',
      'vegetables',
      'birds',
      'dupfinder',
      'wordlength'
    ],
    packageRules: [
      {
        package:'FarmersMarket',
        components: {
          'bird': {
            acceptsComponentArguments: ['image']
          }
        }
      }
    ]
  });
};
