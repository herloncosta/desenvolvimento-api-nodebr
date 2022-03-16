const service = require('./service')

async function main() {
    try {
        const nomes = []
        const result = await service.obterPessoa('a')
        result.results.forEach(function(character) {
            nomes.push({
                name: character.name,
                gender: character.gender
            })
        })
    
        console.log(nomes)
    } catch (error) {
        console.error('Falha na execução', error)
    }
}

main()