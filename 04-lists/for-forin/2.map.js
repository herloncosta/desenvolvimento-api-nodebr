const service = require('./service')

Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = []
    for (let i = 0; i < this.length - 1; i ++) {
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main() {
    try {
        const result = await service.obterPessoa('a')
        // const nomes = []
        // result.results.forEach(function(pessoa) {
        //     nomes.push({
        //         nome: pessoa.name,
        //         genero: pessoa.gender
        //     })
        // })

        // const nomes = result.results.map(function(pessoa) {
        //     return pessoa.name
        // })

        // refactoring
        // const nomes = result.results.map(pessoa => pessoa.name)

        const nomes = result.results.meuMap(function(pessoa, indice) {
            return `[${indice}] ${pessoa.name}`
        })
        console.log(nomes)
    } catch (error) {
        console.error('Falha na execução', error)
    }
}

main()