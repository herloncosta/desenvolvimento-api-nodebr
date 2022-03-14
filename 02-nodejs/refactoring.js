/*
0 - Obter um usuário
1 - Obter o número de telefone do usuário através do Id
2 - Obter o endereço do usuário através do Id
*/

const util = require('util')

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error('O código quebra aqui'))
            
            return resolve({
                id: 1,
                nome: 'Herlon Costa',
                dataNascimento: '17/08/1996'
            })
        }, 1000)
    })
}

function obterTelefone() {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '98301-2996',
                ddd: 71
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Roadmap JS',
            numero: 42
        })
    }, 2000)
}

const obterEnderecoAsync = util.promisify(obterEndereco)

const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function(resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(resultado => console.log(`
        Nome: ${resultado.usuario.nome}
        Endereço: ${resultado.endereco.rua}, nº ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `))
    .catch(error => console.error(error))