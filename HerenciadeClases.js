class PlanBasic {
    accesoPlataforma = true;
    contenidoOnline = true;
  
    complementos(contenidoPresencial, tutorPersonalizado) {
      this.contenidoPresencial = contenidoPresencial;
      this.tutorPersonalizado = tutorPersonalizado;
    }
  }
  
  class PlanPremium extends PlanBasic { //extends para heredar la clase
    Sobreescribir = false;
  
    complementos(contenidoPresencial, tutorPersonalizado, horasExtradeConteido) {
      super.complementos(contenidoPresencial, tutorPersonalizado);
      this.horasExtradeConteido = horasExtradeConteido;
    }
  }
  
  let usuarioPremium = new PlanPremium();
  usuarioPremium.complementos(true, false, 300);
  
  console.log(usuarioPremium);

  //En resumen, al extender una clase, puedes añadir nuevos atributos propios en la clase hija sin sobrescribir los atributos  del padre
  //Sin embargo, el constructor de la clase hija puede sobrescribir el constructor de la clase padre
  //por eso hay que utilizar super() para añadir nueva lógica y parámetros al constructor o funcion y poder conservar los antiguos
  //de la clase hija sin eliminar o modificar la funcionalidad del constructor de la clase padre.