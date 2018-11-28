import Controller from '@ember/controller';

export default Controller.extend({
  fname:'',
  password:'',
  actions:
  {
    save()
    {
      var username=this.get('fname');
      var password=this.get('password')
      $.ajax
      ({
        type: "GET",
        url: "/token",
        dataType: 'json',
        username: username,
        password: password,
        data: '',
        success: function (a){
          if(a.name=='Wrapping')
          {
          open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
          else if(a.name=='Sintering')
          {
            open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
          else if(a.name=='Braiding')
          {
            open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
          else if(a.name=='Isolator')
          {
            open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
          else if(a.name=='Testing(for Hookup)')
          {
            open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
          else if(a.name=='Testing(for Multicore)')
          {
            open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
          else if(a.name=='Twisting')
          {
            open('/workorders?name='+a.name+'&user='+username+'&value='+a.value, '_self').close();
          }
        },
        error: function()
        {
          alert('Invalid credentials');
        }
      });
     }
   }
});
