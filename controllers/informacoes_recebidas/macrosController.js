const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de atuadores
exports.list = function(req, res, next) {    
    let atuadores = {
      "data": {
        "macros": [
          {
            "hora": "10:00",
            "posicao": "1.222, 3.4444",
            "macro": "Lorem ipsun"
          },
          {
            "hora": "12:00",
            "posicao": "2.11, 4.555",
            "macro": "Lorem ipsun"
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
      
    res.end(JSON.stringify(atuadores));
};