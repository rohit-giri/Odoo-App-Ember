import Controller from '@ember/controller';

export default Controller.extend({
  fname:'',
  password:'',
  actions:
  {
    save()
    {
      alert(this.get('fname')+','+this.get('password'));
    }
  }
});
