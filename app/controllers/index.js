import Controller from '@ember/controller';

export default Controller.extend({
  fname:'',
  password:'',
  authentication:Ember.inject.service('session'),
  actions:
  {
    save()
    {
      var username=this.get('fname');
      var password=this.get('password')
      this.get('authentication').authenticate('authenticator:oauth2',username,password).then(() => {
       open('/workorders', '_self').close();
     }, (err) => {
       alert('Invalid credentials');
     });
    }
  }
});
