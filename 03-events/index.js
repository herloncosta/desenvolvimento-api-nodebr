const EventEmitter = require('events')
class MyEmitter extends EventEmitter {

}
const myEmitter = new MyEmitter()
const nomeEvento = 'usuario:click'

myEmitter.on(nomeEvento, function(click) {
    console.log('um usuário clicou', click)
})

// myEmitter.emit(nomeEvento, 'na barra de navegação')
// myEmitter.emit(nomeEvento, 'no botao ok')

// let count = 0

// setInterval(() => {
//     myEmitter.emit(nomeEvento, 'clicou ' + (count++))
// }, 1000)


// const stdin = process.openStdin()

// stdin.addListener('data', function(value) {
//     console.log(`Você digitou: ${value}`)
// })


function main() {
    return new Promise(function(resolve, reject) {
        const stdin = process.openStdin()

        stdin.addListener('data', function(value) {
            resolve(value)
        })
    })
}

main().then(function(resultado) {
    console.log(resultado.toString().trim())
})