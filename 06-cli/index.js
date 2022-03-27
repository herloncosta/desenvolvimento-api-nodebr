const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')


async function main() {
    Commander
        .version('V1')
        .option('-n, --nome [value]', 'Nome do Herói')
        .option('-p, --poder [value]', 'Poder do Herói')
        .option('-i, --id', 'Id do herói')

        .option('-c, --cadastrar', 'Cadastrar herói')
        .option('-l, --listar', 'Listar heróis cadastrados')
        .option('-r, --remover', 'Remove herói pelo id')
        .option('-a. --atualizar', 'Atualizar um heroi pelo id')
        .parse(process.argv)
    
    const heroi = new Heroi(Commander._optionValues)
    
    try {
        if (Commander._optionValues.cadastrar) {
            delete heroi.id // delete if id === undefined
            const resultado = await Database.cadastrar(heroi)
            if (!resultado) {
                console.error('O herói não foi cadastrado!')
                return
            }
            console.log('Herói cadastrado com sucesso!')
        }

        if (Commander._optionValues.listar) {
            const resultado = await Database.listar()
            console.log(resultado)
            return
        }

        if (Commander._optionValues.remover) {
            const resultado = await Database.remover(heroi.id)
            if (!resultado) {
                console.error('Não foi possível remover o herói')
                return
            }
            console.log('Heróis removido com sucesso!')
        }

        if (Commander._optionValues.atualizar) {
            const idParaAtualizar = parseInt(Commander._optionValues.atualizar)
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)

            if (!resultado) {
                console.error('Não foi possível atualizar o herói.')
                return
            }
            console.log('Herói atualizado com sucesso!')
        }
    } catch (error) {
        console.error('Falha na execução', error)
    }
}

main()