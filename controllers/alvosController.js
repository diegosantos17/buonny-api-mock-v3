const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de alvos
exports.list = function(req, res, next) {    
    let alvos = {
        "data": {
          "referencia": [
            {
              "refe_codigo": 1,
              "refe_descricao": "teste",
              "refe_endereco_empresa_terceiro": "string",
              "refe_bairro_empresa_terceiro": "string",
              "refe_inativo": "string",
              "refe_band_codigo": 0,
              "refe_regi_codigo": 0,
              "refe_numero": 0,
              "refe_cep": "string",
              "refe_latitude_min": 0,
              "refe_latitude_max": 0,
              "refe_longitude_min": 0,
              "refe_longitude_max": 0,
              "refe_data_alteracao": "string",
              "refe_esta_codigo": 0,
              "refe_tempo_alvo": 0,
              "refe_poligono": "string",
              "refe_telefone": "string",
              "refe_email": "string",
              "refe_depara": "string",
              "refe_permanente": 0,
              "refe_critico": 0,
              "refe_tloc_codigo": 0,
              "refe_circulo": 0,
              "refe_latitude_min_logistico": 0,
              "refe_latitude_max_logistico": 0,
              "refe_longitude_min_logistico": 0,
              "refe_longitude_max_logistico": 0,
              "refe_poligono_logistico": "string",
              "refe_raio_logistico": 0,
              "refe_descricao_propaganda": "string",
              "refe_notificacao_cadastro_sm": 0,
              "refe_latitude": 0,
              "refe_longitude": 0,
              "refe_cref_codigo": 0,
              "refe_pess_oras_codigo_local": 0,
              "refe_raio": 0,
              "refe_km": "string",
              "refe_bandeira": "string",
              "refe_utilizado_sistema": "string",
              "refe_data_cadastro": "string",
              "refe_codigo_gr": 0,
              "refe_importado": "string",
              "refe_pess_oras_codigo_dono": 0,
              "refe_cida_codigo": 0,
              "refe_usuario_adicionou": "string",
              "refe_usuario_alterou": "string",
              "refe_empresa_terceiro": "string",
              "refe_cnpj_empresa_terceiro": "string"
            }
          ],
          "cliente": {
            "pjur_pess_oras_codigo": 0,
            "pjur_cnpj": "string",
            "pjur_razao_social": "string",
            "pjur_site": "string",
            "pjur_usuario_adicionou": "string",
            "pjur_usuario_alterou": "string",
            "pjur_distribuidor_automatico": "string",
            "pjur_monitora_isca": "string",
            "pjur_checklist_validade": "string",
            "pjur_ativo": "string",
            "pjur_codigo_cliente": "string",
            "pjur_corr_pess_oras_codigo": "string",
            "pjur_segu_pess_oras_codigo": "string"
          }
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
      

    res.end(JSON.stringify(alvos));
};