import Mirage from 'ember-cli-mirage';
export default function() {
  this.get('/token', function(db, request){
      if(request.username=='Amit' && request.password=='123') {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "name":"Wrapping",
        "value":"description"
      };
    }
    else if(request.username=='Emceee' && request.password=='346')
    {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "name":"Sintering",
        "value":"sintering"
      };
    }
    else if(request.username=='Suresh' && request.password=='789')
    {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "name":"Twisting",
        "value":"twisting"
      };
    }
    else if(request.username=='moles' && request.password=='123')
    {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "name":"Testing(for Hookup)",
        "value":"testing"
      };
    }
    else if(request.username=='odoo' && request.password=='123')
    {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "name":"Testing(for Multicore)",
        "value":"testing"
      };
    }
    else if(request.username=='isolate' && request.password=='123')
    {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "name":"Isolator",
        "value":"isolate"
      };
    }
    else if(request.username=='brian' && request.password=='123')
    {
        return {
          "access_token":"PA$$WORD",
          "token_type":"bearer",
          "name":"Braiding",
          "value":"braiding"
        };
    }
});
}
