class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    sonido() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  }
  
 class Perro extends Animal {
    constructor(nombre, tipo){
        super(nombre)
        this.tipo = tipo
    }
    sonido() {
        super.sonido() //copiamos el codigo anterior y asi no lo sobreescribimos
        console.log(`Y Soy un ${this.tipo} por lo tanto hago GUAU!`);
    }
 }

 perrito1 = new Perro('Max', 'BullDog')

 perrito1.sonido();
