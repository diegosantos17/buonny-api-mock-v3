const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de tempos
exports.list = function(req, res, next) {    
    let tempos = {
      "data": {
        "sensores": [
          {            
            "periferico": "Loren Ipsum 1",
            "evento": "Loren Ipsum 2",
            "valor": "100.00",            
            "data": "2020-07-10 1:00:00"
          },
          {            
            "periferico": "Loren Ipsum 3",
            "evento": "Loren Ipsum 4",
            "valor": "200.000",            
            "data": "2020-07-11 10:00:00"
          },
          {            
            "periferico": "Loren Ipsum 5",
            "evento": "Loren Ipsum 6",
            "valor": "300.00",            
            "data": "2020-07-12 20:00:00"
          }
        ]
      },
        "message": {},
        "paging": {
          "finder": "string",
          "page": 0,
          "current": 0,
          "count": 0,
          "perPage": 0,
          "start": 0,
          "end": 0,
          "prevPage": true,
          "nextPage": true,
          "pageCount": 0,
          "sort": "string",
          "direction": "string",
          "limit": 0,
          "sortDefault": true,
          "directionDefault": true,
          "scope": "string",
          "completeSort": [            
          ]
        }
    }
      
    res.end(JSON.stringify(tempos));
};