//callback dentro de otro callback dentro de otro callback

const empleados = [
    {
        id:1,
        nombre: 'Luis'
    },
    {
        id:2,
        nombre: 'Fernando'
    },
    {
        id:3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
]


const getEmpleado = (id, callback) => { 
    const empleado = empleados.find((e) =>  e.id === id)
    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }
    
}

getEmpleado( 1, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado eiste!!');
    console.log(empleado);
})