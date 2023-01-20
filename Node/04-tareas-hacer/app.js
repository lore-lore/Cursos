require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {
    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        console.log({ opt });



        
        await pausa();
    } while (opt !== '0');


    //pausa();

}


main();

