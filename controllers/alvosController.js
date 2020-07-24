const fetch = require('node-fetch');
global.Headers = fetch.Headers;

require('dotenv').config();

// Lista de alvos
exports.list = function(req, res, next) {    
    res.end(JSON.stringify({ title: 'Alvos', book_list: 'aaaa' }));
};