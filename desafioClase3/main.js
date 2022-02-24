var numeroMiembros = parseInt(
  prompt("Ingresa el número de integrantes de la familia")
);
var contador = 1;
var totalEdades = 0;

while (contador <= numeroMiembros) {
  var edad = parseInt(prompt("Ingresa la edad del familiar "));
  totalEdades = totalEdades + edad;
  contador++;
}

mediaEdades = totalEdades / numeroMiembros;

console.log("La media de la edad es " + mediaEdades);
