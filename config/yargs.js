const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check( (argv, option) => {
                if (isNaN( argv.b ) ){
                    throw 'La base tiene que ser un numero';
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Hasta que numero deseas multiplicar?'
            })
            .option('v',{
                alias: 'version',
                demandOption: false,
                describe: 'Version de App'
            })
            .argv;

module.exports = argv;