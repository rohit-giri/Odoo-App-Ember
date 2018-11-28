import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    },
    user:{
      refreshModel: true
    },
    value:
    {
      refreshModel: true
    }
  },
  model:function(params)
  {
     return this.store.query('workorder', {role: params.name});
  },
  setupController:function(controller,model,params)
  {
    this._super(controller, model);
    controller.set('username', params.queryParams.user);
    controller.set('name',params.queryParams.name);
    controller.set('value',params.queryParams.value);
  }
});
