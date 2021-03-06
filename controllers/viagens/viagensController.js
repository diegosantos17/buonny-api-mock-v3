const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de viagens
exports.find = function(req, res, next) {        
    let viagens = {
        "data": {
            "viagens": [
                {
                    "sm": 23670669,
                    "placa": "LLQ-9562",
                    "em_movimento": true,
                    "pedido": 951673,
                    "status": "Normal",
                    "alertas": {
                    "resolvidos": 0,
                    "total": 2
                    },
                    "mensagens": 10,
                    "transportador": {                    
                        "codigo": 10,
                        "razao_social": "EXPRESSO LOCATADA LTDA - ME"
                    },
                    "origem": {
                    "cidade": {
                        "codigo": 1,
                        "nome": "São Paulo"
                    },
                    "uf": {
                        "codigo": 10,
                        "nome": "SP"
                    }
                    },
                    "destino": {
                    "cidade": {
                        "codigo": 1,
                        "nome": "São Paulo"
                    },
                    "uf": {
                        "codigo": 10,
                        "nome": "SP"
                    }
                    },
                    "itinerarios": [
                    {
                        "local": "CLAUDIA ROQUETE PINTO",
                        "entrada_prevista": "21/07/2020 10:00:00",
                        "saida_prevista": "21/07/2020 10:30:00",
                        "entrada_real": "21/07/2020 10:05:00",
                        "saida_real": "21/07/2020 10:20:00",
                        "permanencia": 15,
                        "status": "adiantou"
                    },
                    {
                        "local": "RODRIGO ADELINO",
                        "entrada_prevista": "21/07/2020 10:40:00",
                        "saida_prevista": "21/07/2020 11:00:00",
                        "entrada_real": "21/07/2020 10:40:00",
                        "saida_real": "21/07/2020 11:00:00",
                        "permanencia": 20,
                        "status": "no_prazo"
                    },
                    {
                        "local": "MARTA MARIA PORTO",
                        "entrada_prevista": "21/07/2020 11:10:00",
                        "saida_prevista": "21/07/2020 11:40:00",
                        "entrada_real": "21/07/2020 11:20:00",
                        "saida_real": "21/07/2020 11:55:00",
                        "permanencia": 35,
                        "status": "atrasou"
                    },
                    {
                        "local": "RODRIGO ADELINO",
                        "entrada_prevista": "21/07/2020 11:40:00",
                        "saida_prevista": "21/07/2020 12:00:00",
                        "entrada_real": "",
                        "saida_real": "",
                        "permanencia": 0,
                        "status": "recusou"
                    },
                    ]
                },
                {
                    "sm": 23670669,
                    "placa": "LLQ-9562",
                    "status": "Atrasado",
                    "em_movimento": false,
                    "pedido": 951673,                    
                    "alertas": {
                        "resolvidos": 0,
                        "total": 2
                    },
                    "mensagens": 10,
                    "transportador": {                    
                        "codigo": 11,
                        "razao_social": "SANTOS MUNIZ TRANSPORTE RODOVIÁRIO DE CARGAS LTDA"
                    },
                    "origem": {
                        "cidade": {
                        "codigo": 2,
                        "nome": "BRASILIA"
                        },
                        "uf": {
                        "codigo": 2,
                        "nome": "DF"
                        }
                    },
                    "destino": {
                        "cidade": {
                            "codigo": 2,
                            "nome": "BRASILIA"
                        },
                        "uf": {
                            "codigo": 2,
                            "nome": "DF"
                        }
                    },
                    "itinerarios": [
                        {
                        "local": "RONILDA NOGUEIRA FRANCA",
                        "entrada_prevista": "20/08/2020 10:00:00",
                        "saida_prevista": "20/08/2020 10:30:00",
                        "entrada_real": "",
                        "saida_real": "",
                        "permanencia": 0,
                        "status": "nao_entregou"
                        },
                        {
                        "local": "VANESSA RODRIGUES",
                        "entrada_prevista": "20/08/2020 11:00:00",
                        "saida_prevista": "20/08/2020 11:40:00",
                        "entrada_real": "",
                        "saida_real": "",
                        "permanencia": 0,
                        "status": "nao_entregou"
                        }
                    ]
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
                null
                ]
            }                    
        }      
        
        res.end(JSON.stringify(viagens));
};    

exports.findAlertas = function(req, res, next) {        
    let alertas = {
    "data": {
      "alertas": [
        {
          "codigo": 1,
          "data": "19/08/2020 10:00",
          "codigo_sm": 23670669,
          "tipo": {
            "codigo": 1,
            "descricao": "Tipo 1"
          },
          "veiculo": {
            "codigo": 10,
            "placa": "LLQ-9562"
          }
        },
        {
            "codigo": 2,
            "data": "18/08/2020 14:00",
            "codigo_sm": 23670700,
            "tipo": {
              "codigo": 2,
              "descricao": "Tipo 2"
            },
            "veiculo": {
              "codigo": 20,
              "placa": "AAA-1010"
            }
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
        null
      ]
    }
  }

  res.end(JSON.stringify(alertas));
}

exports.findFiltros = function(req, res, next) {        
    let filtros = {
    "data": {
      "filtros": [
        {
            "codigo": 1,
            "descricao": "Meu Filtro 1"
        },
        {
            "codigo": 2,
            "descricao": "Meu Filtro 2"
        },
        {
            "codigo": 3,
            "descricao": "Meu Filtro 3"
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
        null
      ]
    }
  }

  res.end(JSON.stringify(filtros));
}