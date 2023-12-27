//EJERCICIO = HAZ UNA FUNCIÓN PARA NOMBRAR A UNO DE LOS EMPLEADOS Y CAMIA EL CARGO

let empleados = {
    listaE: ['Manel', 'Juan', 'Victoria', 'Luis'],
    cargo: 'Empleado raso',
    tiempoEmpresa:'2-5 años',
    
    //funciones
    nombrar: function() {
        console.log(`${this.listaE[1]} trabaja para esta empresa y tiene el cargo de ${this.cargo}`);
    } //this es como poner empleaodos.lista... se usa ya que asi si cambiamos el nombre, seguirá funcionando
};

empleados.cargo = 'Jefe'
empleados.nombrar();
delete empleados.tiempoEmpresa;
console.log(empleados);

//GUARDA LA ISTA DE EMPLEADOS EN UNA NUEVA LISTA PARA NO TENER QUE DEPENDER DEL OBJETOS
let listaSinObjetos = empleados.listaE.slice();
console.log(listaSinObjetos);

//gracias a slice ta,bine podemos obtener ciertas posiciones
let listaSinObjetos2 = empleados.listaE.slice(0,2);
console.log(listaSinObjetos2);