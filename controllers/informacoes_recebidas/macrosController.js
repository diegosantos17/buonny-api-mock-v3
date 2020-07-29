    const fetch = require('node-fetch');
    global.Headers = fetch.Headers;

    require('dotenv').config();

    // Lista de atuadores
    exports.list = function(req, res, next) {    
        let atuadores = {
        "data": {
            "macros": [
                {
                    "hora": "07/07/2020 01:50:00",
                    "posicao": "6,080 KM DE ARAXA - MG",
                    "macro": " EM MANOBRA",
                    "latitude": -19.6315994263,
                    "longitude": -46.9826011658
                },
                {
                    "hora": "07/07/2020 02:01:00",
                    "posicao": "6,099 KM DE ARAXA - MG",
                    "macro": "FIM DE MANOBRA",
                    "latitude": -19.6319999695,
                    "longitude": -46.9823989868
                },
                {
                    "hora": "07/07/2020 02:25:00",
                    "posicao": "6,099 KM DE ARAXA - MG",
                    "macro": "REINICIO DE VIAGEM ",
                    "latitude": -19.6319999695,
                    "longitude": -46.9823989868
                },
                {
                    "hora": "07/07/2020 02:25:00",
                    "posicao": "6,099 KM DE ARAXA - MG",
                    "macro": "INICIO DE JORNADA ",
                    "latitude": -19.6319999695,
                    "longitude": -46.9823989868
                },
                {
                    "hora": "07/07/2020 02:26:00",
                    "posicao": "6,099 KM DE ARAXA - MG",
                    "macro": "AGUARDANDO CARREGAMENTO/DESCARREGAMENTO",
                    "latitude": -19.6319999695,
                    "longitude": -46.9823989868
                },
                {
                    "hora": "07/07/2020 02:35:00",
                    "posicao": "5,572 KM DE ARAXA - MG",
                    "macro": "DESCANSO",
                    "latitude": -19.6292991638,
                    "longitude": -46.9780006409
                },
                {
                    "hora": "07/07/2020 02:35:00",
                    "posicao": "5,572 KM DE ARAXA - MG",
                    "macro": "REINICIO DE VIAGEM ",
                    "latitude": -19.6292991638,
                    "longitude": -46.9780006409
                }
            ]
        },
        "paging": {
            "finder": "all",
            "page": 1,
            "current": 7,
            "count": 7,
            "perPage": 20,
            "start": 1,
            "end": 7,
            "prevPage": false,
            "nextPage": false,
            "pageCount": 1,
            "sort": null,
            "direction": null,
            "limit": null,
            "sortDefault": false,
            "directionDefault": false,
            "scope": null,
            "completeSort": []
        }
    }
    
      
    res.end(JSON.stringify(atuadores));
};