const { get } = require('axios')
const URL = 'https://swapi.dev/api/people'


const axios = require('axios')
const db = `https://swapi.co/api/people`

async function obterPessoas(nome) {
    const url = `${db}/?search=${nome}&format=json`
    const result = await axios.get(url)

    return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    obterPessoas
}