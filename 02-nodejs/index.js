/*
0 - Obter um usuário
1 - Obter o número de telefone do usuário através do Id
2 - Obter o endereço do usuário através do Id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Herlon Costa',
            dataNascimento: '17/08/1996'
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '98301-2996',
            ddd: 71
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Roadmap JS',
            numero: 42
        })
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('Erro ao obter usuário', error)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Erro ao obter telefone', error1)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if (error2) {
                console.error('Erro ao obter endereço', error2)
            }

            console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}`)
        })
    })
})