import Route from '@ember/routing/route';

export default Route.extend({
  setupController:function(controller,model,params)
  {
    this._super(controller, model);
    controller.set('username', params.queryParams.user);
    controller.set('name',params.queryParams.name);
    controller.set('value',params.queryParams.value);
  }
});
