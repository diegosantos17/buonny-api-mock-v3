const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de tempos
exports.list = function(req, res, next) {    
    let tempos = {
      "data": {
        "tempos": [
          {
            "placa"      : "OZJ2138",
            "inicio"     : "07/07/2020 01:50:40",
            "fim"        : "07/07/2020 02:01:20",
            "latitude"   : "-19.6315994263",
            "longitude"  : "-46.9826011658",
            "posicao"    : "6,080 KM DE ARAXA - MG",
            "macro"      : "EM MANOBRA",
            "status"     : "Em viagem",
            "tempo"      : "00:10"
          },
          {
            "placa"      : "OZJ2138",
            "inicio"     : "07/07/2020 01:50:40",
            "fim"        : "07/07/2020 02:01:20",
            "latitude"   : "-19.6315994263",
            "longitude"  : "-46.9826011658",
            "posicao"    : "6,080 KM DE ARAXA - MG",
            "macro"      : "EM MANOBRA",
            "status"     : "Parado",
            "tempo"      : "00:34"
          },
          {
            "placa"      : "OZJ2138",
            "inicio"     : "07/07/2020 01:50:40",
            "fim"        : "07/07/2020 02:01:20",
            "latitude"   : "-19.6315994263",
            "longitude"  : "-46.9826011658",
            "posicao"    : "6,080 KM DE ARAXA - MG",
            "macro"      : "EM MANOBRA",
            "status"     : "Em viagem",
            "tempo"      : "01:30"
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