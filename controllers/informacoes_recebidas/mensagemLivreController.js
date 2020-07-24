const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de Mensagens livres
exports.list = function(req, res, next) {    
    let eventos = {
      "data": {
        "mensagens": [
          {            
            "descricao": "Lorem ipsun 1"            
          },
          {            
            "descricao": "Lorem ipsun 2"            
          },
          {            
            "descricao": "Lorem ipsun 3"            
          },
          {            
            "descricao": "Lorem ipsun 4"            
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
      
    res.end(JSON.stringify(eventos));
};