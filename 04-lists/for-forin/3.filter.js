const { obterPessoa } = require('./service')

Array.prototype.meuFilter = function(callback) {
    const lista = []
    for (let index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        
        if (!result) continue
        lista.push(item)
    }
    
    return lista
}

async function main() {
    try {
        const { results } = await obterPessoa('a')
        
        // const familiaLars = results.filter(function(pessoa){
        //     return pessoa.name.toLowerCase().includes('lars')
        // })
        
        const familiaLars = results.meuFilter(pessoa => 
            pessoa.name.toLowerCase().includes('lars'))

        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names.sort()) // ordem alfabética
    } catch (error) {
        console.error('Falha na execução', error)
    }
}

main()