const axios = require('axios')
const URL = 'https://swapi.dev/api/people'

async function obterPessoa(nome) {
    const url = `${URL}/?search=${nome}`
    const response = await axios.get(url)

    return response.data
}

module.exports = { obterPessoa }