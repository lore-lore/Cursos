/* setTimeout( function(){
    console.log('Hola Mundo')
},1000); */

const getUsuarioByID = (id, callback) => { //Esta informacion es la de la DB
    const user = {
        id,
        nombre: 'Lorena'
    }

    setTimeout( () => {
        callback (user)
    }, 1500)
}

getUsuarioByID( 10, ( usuario ) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});

//Callbackes una funcion que se manda como argumento a otra funcion