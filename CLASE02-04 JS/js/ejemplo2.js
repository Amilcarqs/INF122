var nom, anio, edad,dia;
nom = prompt("nombre: ");
anio = parseInt(prompt("Ingrese su año de nacimiento: "));
edad = 2024 - anio;
if(edad >= 18){
    document.write(nom+" estas habilitado para votar");
}else{
    document.write(nom+" no estas habilitado para votar");
}
dia = parseInt(prompt("ingrese un dia de la suma entre 1y 7: "));
switch(dia){
    case 1:
        alert("lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break
    default:
        alert("fuera de rango");
        break
}
