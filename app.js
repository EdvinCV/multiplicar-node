const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { args } = require('./config/yargs');
const colors = require('colors');


let comando = args._[0];

switch(comando){
    case 'listar':
        listarTabla(args.base, args.limite)
        break;

    case 'crear':
        crearArchivo(args.base)
            .then( archivo => console.log(archivo))
            .catch( err => console.log(err));
        break;

    default:
        console.log("Comando no reconocido");

}