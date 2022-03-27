const { deepEqual, ok } = require('assert')
const database = require('./database')


const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'Velocidade', id: 1 }

describe('Suite de manipulação de heróis', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
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
        deepEqual(expected, resultado)
    })
})