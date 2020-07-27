const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de atuadores
exports.list = function(req, res, next) {    
    let atuadores = {
        "data": {
          "atuadores": [
            {
              "codigo": '000006    ',
              "descricao": "ALARME (SIRENE)"
            },
            {
              "codigo": '000003    ',
              "descricao": "BLOQUEIO"
            },            
            {
              "codigo": '000010    ',
              "descricao": "BOTÃO DE PÂNICO"
            },
            {
              "codigo": '000002    ',
              "descricao": "DESENGATE DE CARRETA"
            },
            {
              "codigo": '000012    ',
              "descricao": "SENSOR DE BAÚ"
            },
            {
              "codigo": '000011    ',
              "descricao": "SENSOR DE IGNIÇÃO"
            },
            {
              "codigo": '000008    ',
              "descricao": "SENSOR DE PAINEL"
            },
            {
              "codigo": '000004    ',
              "descricao": "SENSOR DE PORTA DO CARONA"
            },
            {
              "codigo": '000007    ',
              "descricao": "SENSOR DE PORTA DO MOTORISTA"
            },
            {
              "codigo": '000009    ',
              "descricao": "TECLADO DE COMUNICAÇÃO"
            },
            {
              "codigo": '000005    ',
              "descricao": "TRAVA DA 5ª RODA"
            },
            {
              "codigo": '000001    ',
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