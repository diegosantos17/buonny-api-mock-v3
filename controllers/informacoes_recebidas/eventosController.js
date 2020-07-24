const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de eventos
exports.list = function(req, res, next) {    
    let eventos = {
      "data": {
        "eventos": [
          {
            "data_hora": "2020-07-10 11:00:00",
            "tipo_alvo": "Lorem ipsun 1",
            "posicao": "1.222, 3.4444",
            "evento": "Lorem ipsun 2"            
          },
          {
            "data_hora": "2020-07-10 11:00:00",
            "tipo_alvo": "Lorem ipsun 3",
            "posicao": "1.222, 3.4444",
            "evento": "Lorem ipsun 4"            
          },
          {
            "data_hora": "2020-07-10 11:00:00",
            "tipo_alvo": "Lorem ipsun 5",
            "posicao": "1.222, 3.4444",
            "evento": "Lorem ipsun 6"            
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