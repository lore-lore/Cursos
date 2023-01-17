const fs = require('fs');

/* todo lo que se crea aqui es privado */
const crearArchivo = async (base = 5, listar = false) => {
    try {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} X ${i} = ${i * base}\n`;
        }

        if (listar) {
            console.log('====================');
            console.log('   Tabla del:', base);
            console.log('====================');
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {

        throw err;

    }

}
/* Aqui indicamos que es lo que queremos exportar */

module.exports = {
    crearArchivo
}
/* module.exports = {
    crearArchivo: crearArchivo
    //es redundante tener una propidad que el valor apunta a una variable con el mismo nombre
} */