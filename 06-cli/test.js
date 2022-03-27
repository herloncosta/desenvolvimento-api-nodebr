const { deepEqual, ok } = require('assert')
const database = require('./database')


const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'Velocidade', id: 1 }

const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Lanterna Verde',
    poder: 'Energia do Anel',
    id: 2
}

describe('Suite de manipulação de heróis', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })

    it('deve pesquisar um herói usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [ resultado ] = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
    
    it('deve cadastrar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [ atual ] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(atual, expected)
    })

    it('deve remover um herói por id', async () => {
        const expected = true
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('deve atualizar um herói pelo id', async () => {
        const expected = {
            nome: 'Batman',
            poder: 'Inteligência',
            ...DEFAULT_ITEM_ATUALIZAR
        }
        const novoDado = { nome: 'Batman', poder: 'Inteligência' }

        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [ resultado ] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
        deepEqual(resultado, expected)
    })
})