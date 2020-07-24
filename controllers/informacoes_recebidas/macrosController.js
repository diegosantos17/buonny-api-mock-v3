const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de atuadores
exports.list = function(req, res, next) {    
    let atuadores = {
        "data": {
          "atuadores": [
            {
              "codigo": 6,
              "descricao": "ALARME (SIRENE)"
            },
            {
              "codigo": 3,
              "descricao": "BLOQUEIO"
            },            
            {
              "codigo": 10,
              "descricao": "BOTÃO DE PÂNICO"
            },
            {
              "codigo": 2,
              "descricao": "DESENGATE DE CARRETA"
            },
            {
              "codigo": 12,
              "descricao": "SENSOR DE BAÚ"
            },
            {
              "codigo": 11,
              "descricao": "SENSOR DE IGNIÇÃO"
            },
            {
              "codigo": 8,
              "descricao": "SENSOR DE PAINEL"
            },
            {
              "codigo": 4,
              "descricao": "SENSOR DE PORTA DO CARONA"
            },
            {
              "codigo": 7,
              "descricao": "SENSOR DE PORTA DO MOTORISTA"
            },
            {
              "codigo": 9,
              "descricao": "TECLADO DE COMUNICAÇÃO"
            },
            {
              "codigo": 5,
              "descricao": "TRAVA DA 5ª RODA"
            },
            {
              "codigo": 5,
              "descricao": "TRAVA DE BAU"
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