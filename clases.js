class Vehículo{ //siermpe en maysuculas
    ruedas = 4;
    disponible = true;

    constructor(marca,años,kilometros,color,consumoPorKM){ //this porque asi se apadta a cualquier nombre que creemos del objetos
        this.marca = marca;
        this.años = años;
        this.kilometros = kilometros;
        this.color = color;
        this.consumoPorKM = consumoPorKM;
    }

    calcularConsumo() {
        let r1 = parseInt(prompt('Introduce los kilómetros que vas a hacer'));
        let kmTotales = r1 * this.consumoPorKM;
        console.log(`Vas a gastar ${kmTotales} euros en total`);
    }
}

coche1 = new Vehículo('Ford',11,120.000,'rojo',0.4)
coche1.calcularConsumo();



