alert("estamos llamando desde otro archivo"); //para mostrar en mensaje
document.write("<h1><font color='red'>aqui por el navegador</font></h1>"); //para mostrar en la pagina
var nom, a, b, s;
nom = prompt("Ingrese su nombre: ");  //prompt para leer datos

document.write("hola: " + nom ); 
a = parseInt(prompt("Ingrese a: "));  //parseInt para convertirlo a entero
b = parseInt(prompt("Ingrese b: "));
s = a+b;
alert("La suma es: "+s);


