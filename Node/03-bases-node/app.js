const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

/* definicion de donde vienen los argumentos*/
/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
 */

/*

console.log('base: yargs', argv.b); */

//const base = 5;
