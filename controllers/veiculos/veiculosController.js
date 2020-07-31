const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de atuadores
exports.findPlaca = function(req, res, next) {    

    console.log('req', req.params.placa);

    let veiculo = {
        "data": {
            "veiculo": {
                "codigo": 1,
                "placa": "AAA1010",
                "tipo_veiculo": "Tipo Veiculo Loren",                
                "renavam": "Renavan Lorem",
                "chassi": "Chassi Loren",
                "numero_serie": "string",
                "ano_fabricacao": 2010,
                "ano_modelo": 2011,
                "cor": "Vermelhor",
                "status": "Status Loren",
                "telefone": "Telefone Loren",	
                "radio": "Radion Loren",                
                "tipo_veiculo_cliente": "Tipo Veic Cliente Loren",
                "cd_origem": "CD Origem Loren",
                "transportador_padrao": "Transp Padrão Loren",
                "motorista_padrao": "Motorista Loren",
                "tipo_veiculo":  "Tipo Veiculo Loren",
                "fabricante": "Fabricante Loren",                
                "modelo": "Modelo Loren",
                "ctec_numero": 4,
                "tecnologia": {
                    "codigo": 1,
                    "descricao": "Tecnologia Lorem"
                },
                "atuadores": [
                    "000006     ", "000003     "
                ]
            },        
            "message": {}        
        }
    }
      
    res.end(JSON.stringify(veiculo));
};

