
function Alumno(nombre, edad, estudios) { //para los objteos en js estan las funciones constructoras y no se puede creae un objrto y luegoya creas  la funcion
                                          //la funcion sirve para crera metodos desde 0
    this.nombre = nombre;                 //Y LAS FUNCIONES CONSTRUCTORAS EN MAYUSCULAS
    this.edad = edad;
    this.estudios = estudios;

    //TAMBIEN HAY CONSTRUCTOR DE FUNCIONES
    this.saludar = function () {
        console.log(`HOLAAAA ${this.nombre.toUpperCase()}`); //aqui tambien podemos usar metodos
    }
}
let alumno1 = new Alumno('Roge', 23, 'Química');

alumno1.saludar()

//CREAR COPIAS DE OBJETOS
//esto es incorrecto ya que alumno3 hace referencia a alumno 1 y entonces las modificaciones de 1 afectan al otro
//let alumno3 = alumno1;
//console.log(alumno3)
//alumno3.saludar()

//HAY QUE USAREL OPERADOR DE PROPAGACIÓN {...}
let alumno4 = { ...alumno1 };
console.log(alumno4);
alumno4.saludar();




function Futbolista(posicion, club) {
    this.posicion = posicion,
    Futbolista.club = club, //si usamos futbolista.club esto nos sos sirve solo cuando el objeto se llame Futbolista
    this.club = club,       //asi que si creamos un objeto nuevo que se llame diferente no funcionará

    this.goles = function(){
        let aleatorio = Math.round(Math.random() *100)
        console.log(`el ${this.posicion} lleva ${aleatorio} goles`);
    }
}

futbolista1 = new Futbolista('delantero', 'Racing')
console.log(futbolista1);
futbolista1.goles();