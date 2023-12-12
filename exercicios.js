function adicionarPessoa(pessoas, novaPessoa) {
    if (!Array.isArray(pessoas))
        return;
    if (novaPessoa == null || !('cpf' in novaPessoa && 'nome' in novaPessoa && 'idade' in novaPessoa))
        return;
    //Object.getOwnPropertyNames(novaPessoa)
        //Retorna um arrey com os nomes dos atributos
    
    pessoas.push(novaPessoa);
}

function getPessoaPorCPF(pessoas, cpf){
    //buscar pessoa
    for (let i = 0; i < pessoas.length; i++){
        if (pessoas[i].cpf === cpf){
            return pessoas[i];
        }

        //outra maneira de fazer a busca
            // p = pessoas.find((pessoa) => pessoa.cpf == cpf)
            // if (p == undefined)
                // p = null;
                // return p;
    }

    //retornar nulo se não encontrar
    return null;
}

function imprimirPessoas(pessoas) {
    //Imprimir as informações de todas as pessoas
    /*
    for (let i = 0; i < pessoas.length; i++){
        console.log(`CPF: ${pessoas[i].cpf}, Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}`);
    }
    */
   // Outra maneira de fazer isso
    for (let p of pessoas){
        let s = `CPF: ${p.cpf}, Nome: ${p.nome}, Idade: ${p.idade}`
        console.log(s);
   }
}

let pessoas = [];
adicionarPessoa(
    pessoas,
    {
        cpf: "123.456.789-00",
        nome: "Maria dos Santos",
        idade: 77
    }
);

let p= getPessoaPorCPF(pessoas, "123.456.789-00");
console.log(p ? p.nome : "Não existe pessoa com tal CPF.")
imprimirPessoas(pessoas);