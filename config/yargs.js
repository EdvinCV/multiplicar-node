const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    } 
}

// requireds
const args = require('yargs')
    .command('listar', 'Lista en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea archivo con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    args
}