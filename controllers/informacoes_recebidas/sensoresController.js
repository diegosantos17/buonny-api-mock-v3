const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de tempos
exports.list = function(req, res, next) {    
    let tempos = {
      "data": {
        "sensores": [
          {            
            "periferico": "ANTENA GPS (LOCALIZACAO)",
            "evento": "EVENTO DE PERDA DE SINAL",
            "valor": "COM SINAL",            
            "data": "2020-01-08 17:47:01"
          },
          {            
            "periferico": "BOTAO DE PANICO",
            "evento": "EVENTO DE BOTAO DE PANICO",
            "valor": "PANICO PRESSIONADO",            
            "data": "2020-01-18 12:02:10"
          },
          {            
            "periferico": "IGNICAO",
            "evento": "EVENTO DE IGNICAO",
            "valor": "IGNICAO LIGADA",            
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