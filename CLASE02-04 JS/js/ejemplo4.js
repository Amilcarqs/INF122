var x,dig,suma;
suma = 0;
x = parseInt(prompt("Ingrese un numero:"));
while(x!=0){
    dig = x%10;
    suma = suma+dig;
    x=parseInt(x/10);
}
alert("la suma de los digitos es: "+suma);
