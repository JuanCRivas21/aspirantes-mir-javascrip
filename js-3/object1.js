let juanCarlos= {
    nombre: "Juan Carlos Rivas",
    edad: 25,
    activo: true,
    hobbies: ["programar", "futbol", "musica"],
  };

  console.log(juanCarlos.edad);

  juanCarlos.estatura = 1.85;

  for (let prop in juanCarlos) {
  console.log(prop + ": " + juanCarlos[prop]);}

  juanCarlos.saluda = function() {
    return "Hola, me llamo " + this.nombre;}

    console.log(juanCarlos.saluda());