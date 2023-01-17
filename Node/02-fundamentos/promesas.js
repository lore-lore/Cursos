const empleados = [
    {
        id: 1,
        nombre: 'Luis'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;

        (empleado) ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);

    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe el salario con id ${id}`);
    })
}
const id = 3;
/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err)); */
getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empelado:', empleado, 'tiene un salario de:', salario)
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

