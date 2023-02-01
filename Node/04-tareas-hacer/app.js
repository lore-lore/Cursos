require('colors'); //importando el paquete
const { inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer'); //Estoy sacando estas funciones u objetos que se encuentran en el archivo

const Tareas = require('./models/tareas');//Importacion del archivo


const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
        }




        await pausa();
    } while (opt !== '0');


    //pausa();

}


main();

