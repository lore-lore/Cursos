const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach()

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc); //instanciamos la tarea
        this._listado[tarea.id]= tarea;
    }
}

module.exports = Tareas;