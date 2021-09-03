const fs = require('fs');
var colors = require('colors');
const crearArchivo = async( base = 5, l = false, h = 10 ) => {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1 ; i<=h; i++){
            salida += (`${ base } x ${ i } = ${ base * i }\n`);
            consola += (`${ colors.blue(base) } ${ 'x'.yellow } ${ colors.blue(i) } ${ '='.yellow } ${ colors.blue(base * i) }\n`);
        }
    
        if( l ) {
            console.log("=================".green);
            console.log('   Tabla del:', colors.yellow(base));
            console.log("=================".green);
            console.log(consola.underline);
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        return `tabla-${ base }.txt`;

    } catch ( err ) {

        throw err;

    }
}

module.exports = {
    crearArchivo
}