const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');
var colors = require('colors');
console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.green) )
    .catch( err => console.log( err ) );