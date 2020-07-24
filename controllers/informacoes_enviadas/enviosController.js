const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de eventos
exports.list = function(req, res, next) {    
    let eventos = {
      "data": {
        "envios": [
          {
            "tipo": "Loren 1",
            "texto": "Loren 2",
            "data_cadastro": "2020-07-10 01:00:00",
            "data_envio": "2020-07-10 02:00:00",
            "status": "Loren 3",
            "usuario": "admin1"
          },
          {
            "tipo": "Loren 4",
            "texto": "Loren 5",
            "data_cadastro": "2020-07-11 01:00:00",
            "data_envio": "2020-07-10 03:00:00",
            "status": "Loren 6",
            "usuario": "admin2"
          },
          {
            "tipo": "Loren 7",
            "texto": "Loren 8",
            "data_cadastro": "2020-07-12 01:00:00",
            "data_envio": "2020-07-10 04:00:00",
            "status": "Loren 9",
            "usuario": "admin3"
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