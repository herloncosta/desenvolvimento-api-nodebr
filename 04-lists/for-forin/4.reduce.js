const { obterPessoa } = require('./service')

Array.prototype.meuReduce = function(callback, valorInicial) {
    //  validação do valor inicial
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let i = 0; i < this.length; i++) {
        valorFinal = callback(valorFinal, this[i], this)
    }
    return valorFinal
}

async function main() {
    try {
        const { results } = await obterPessoa('a')
        const alturas = results.map(pessoa => parseInt(pessoa.height))
        // console.log(alturas)

        // const somaAlturas = alturas.reduce(function(atual, proximo) {
        //     return atual + proximo
        // }, 0)
        // console.log(somaAlturas)

        const minhaLista = [
            ['Herlon', 'Costa'],
            ['Javascript', 'Node']
        ]

        const listaUnificada = minhaLista.meuReduce(function(itemAtual, proximoItem) {
            return itemAtual.concat(proximoItem)
        }, [])

        const listaParaString = listaUnificada.join(', ')
        console.log(listaParaString)
    } catch(error) {
        console.error('Falha na execução', error)
    }
}

main()