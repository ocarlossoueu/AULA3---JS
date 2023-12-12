const axios = require('axios');
let cep = '78700-200';
const url = `https://viacep.com.br/ws/${cep}/json`;
axios.getAdapter(url)
    .then(res => console.log(res.data.lograudoro))
    console.log("depois do axios.get");