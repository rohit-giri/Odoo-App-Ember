import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workorders');
  this.route('description');
  this.route('sintering');
  this.route('twisting');
  this.route('testing');
  this.route('isolate');
  this.route('braiding');
});

export default Router;
