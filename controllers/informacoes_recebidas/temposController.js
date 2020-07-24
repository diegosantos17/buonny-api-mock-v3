const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de tempos
exports.list = function(req, res, next) {    
    let tempos = {
      "data": {
        "tempos": [
          {
            "inicio": "2020-07-10 11:00:00",
            "fim": "2020-07-10 11:50:00",
            "posicao": "1.222, 3.4444",
            "em_viagem": true,
            "parado": false
          },
          {
            "inicio": "2020-07-10 12:00:00",
            "fim": "2020-07-10 13:30:00",
            "posicao": "1.222, 3.4444",
            "em_viagem": true,
            "parado": false
          },
          {
            "inicio": "2020-07-10 14:00:00",
            "fim": "2020-07-10 18:00:00",
            "posicao": "0.777, 1.8888",
            "em_viagem": false,
            "parado": true
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