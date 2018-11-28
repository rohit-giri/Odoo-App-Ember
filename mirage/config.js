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
this.get('/workorders',function(db,request)
{
    if(request.queryParams.role=='Braiding')
    {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"252.00mm",
        currentquantity:"252.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"252.00mm",
        currentquantity:"252.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
  else if(request.queryParams.role=='Isolator')
  {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"253.00mm",
        currentquantity:"254.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"255.00mm",
        currentquantity:"256.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
  else if(request.queryParams.role=='Testing(for Hookup)')
  {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"259.00mm",
        currentquantity:"260.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"261.00mm",
        currentquantity:"262.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
  else if(request.queryParams.role=='Testing(for Multicore)')
  {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"263.00mm",
        currentquantity:"264.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"265.00mm",
        currentquantity:"266.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
  else if(request.queryParams.role=='Twisting')
  {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"265.00mm",
        currentquantity:"269.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"270.00mm",
        currentquantity:"271.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
  else if(request.queryParams.role=='Sintering')
  {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"272.00mm",
        currentquantity:"273.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"274.00mm",
        currentquantity:"282.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
  else if(request.queryParams.role=='Wrapping')
  {
    return {
      "workorder":[{
        id:"1",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"272.00mm",
        currentquantity:"273.68mm",
        date:"28/11/2018"
      },
      {
        id:"2",
        source:"SO5887:MO28470",
        product:"Conductor PTFE insulation type E 600V,Colour: Green, Nominal OD: 1.78mm,Weight: 11.64gm",
        originalquantity:"274.00mm",
        currentquantity:"282.68mm",
        date:"28/11/2018"
      }
    ]
    };
  }
});
}
