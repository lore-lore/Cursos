const deadpool ={
    nombre: 'Wade',
    apellido: 'winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre(){
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}
//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;


//const { nombre,apellido,poder, edad = 0} = heroe; //Destructuracion
/* function imprimeHeroe(heroe){
    const { nombre,apellido,poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
} */
function imprimeHeroe({ nombre,apellido,poder, edad = 0}){
    nombre = 'Lorena';
    console.log(nombre, apellido, poder, edad);
}
//imprimeHeroe (deadpool);

const heroes = ['Deadpool', 'Siperman', 'Batman'];
/* const h1=heroes[0];
const h2=heroes[1];
const h3=heroes[2]; */
const [h1,h2,h3]=heroes;
console.log(h1,h2,h3);