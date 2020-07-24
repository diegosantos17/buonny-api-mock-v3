const axios = require('axios');
require('dotenv').config();


console.log(process.env.MEAO_HOST_API + '/' + process.env.MEAO_SYNC_PROJECT_JIRA);
axios.get(process.env.MEAO_HOST_API + '/' + process.env.MEAO_SYNC_PROJECT_JIRA);

