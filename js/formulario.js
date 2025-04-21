/* Procesar los datos del formulario mediante una función */
function procesarDatos(){
    // Obtener los datos del formulario
    var nota1 = document.getElementById("nota1").value;

    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;
    var nota5 = document.getElementById("nota5").value;

    var mayor= Math.max(nota1,nota2,nota3,nota4,nota5);

    // imprimo el dato obtenido en el formulario
    document.writeln("La números ingresados son: " + nota1 + not2 + nota3 + nota4+ nota5 + "<br>");

    document.writeln("La nota mayor es: " + mayor );
}

function parimpar(){
    var nota1 = document.getElementById("n1").value;

    var parimpar= (nota1 % 2 == 0) ? "Par": "Impar";

    document.writeln("El número es: " +parimpar);
}