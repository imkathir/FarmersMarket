// For embroider builder
import EmberRouter from '@embroider/router';

// For ember cli builder
// import EmberRouter from '@ember/routing/router';

import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('category', function() {
  });
  this.route('vegetables');
  this.route('animals');
  this.route('birds');
  this.route('home');
  this.route('goats');
  this.route('dupfinder');

  this.route('wordlength');
});

export default Router;
