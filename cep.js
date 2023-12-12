const axios = require('axios');

function imprimirEndereco(endereco) {
    console.log('cep: ', endereco.cep);
    console.log('logradouro: ', endereco.logradouro);
    console.log('complemento: ', endereco.complemento);
    console.log('bairro: ', endereco.bairro);
    console.log('localidade: ', endereco.locadade);
    console.log('uf: ', endereco.uf);
}

function endereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    axios
        .get(url)
        .then(res => imprimirEndereco(res.data))
}

function obtemEAdicionaEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    axios
        .get(url)
        .then(res => imprimirEndereco(res.data))
}
//Criar funcao que recebe um array de CEPs validos
// e adiciona o endereco em outro array
function buscarCeps(ceps, enderecos){
    for (let cep of ceps) {
        obtemEAdicionaEndereco(cep, enderecos);
    }
}

let ceps = [
    '78700-220', 
    '38705-828',
    '88085-410',
    '79002-550',
    '78735-042',
];

let enderecos = []
buscarCeps(ceps, enderecos);

//setTimeout(() => {
    enderecos.forEach((end) console.log(enderecos)
//}, 5000);

endereco('78735-042');