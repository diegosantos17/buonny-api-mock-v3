const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de Mensagens Recebidas
exports.list = function(req, res, next) {    
    let eventos = {
      "data": {
        "mensagens": [
          {
            "tipo": "Loren 1",
            "data_computador_bordo": "2020-07-10 01:00:00",
            "data_cadastro": "2020-07-01 01:00:00",
            "texto": "Loren 2",
            "usuario": "admin",
            "usuario_leitura": "guest",
            "posicao": "1.22,2.44",
            "observacao": "Loren 3"
          },
          {
            "tipo": "Loren 4",
            "data_computador_bordo": "2020-07-11 01:00:00",
            "data_cadastro": "2020-07-02 01:00:00",
            "texto": "Loren 5",
            "usuario": "admin",
            "usuario_leitura": "guest",
            "posicao": "2.22,3.44",
            "observacao": "Loren 6"
          },
          {
            "tipo": "Loren 7",
            "data_computador_bordo": "2020-07-12 01:00:00",
            "data_cadastro": "2020-07-03 01:00:00",
            "texto": "Loren 8",
            "usuario": "admin",
            "usuario_leitura": "guest",
            "posicao": "3.22,4.44",
            "observacao": "Loren 9"
          },
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