//Ejercicio 2 : Arreglos.
//Deberas realizar los ejercicios anexados abajo:
//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let vacio = [];
console.log(vacio)

console.log("______________")
//let random = Math.round(Math.random() * (50 - 1)) +1;
//console.log(random)

let array = []
let inicio = 0;
let fin = 100;

for(let inicio = 0; inicio<= 9; inicio++){
let enteroAleatorio = inicio + Math.round(Math.random() * fin);
array[inicio]=enteroAleatorio
console.log(enteroAleatorio);
}
console.log(array)

console.log("______________")
//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.


let arreglo =[];
let userInput;
while (!(userInput=="")){
    userInput = prompt("Ingresa una palabra, un numero, un caracter, etc.");
    arreglo.push(userInput);
}
console.log(arreglo);

console.log("______________")
//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de  .JavaScript que regresan el mayor y menorelemento de un arreglo

let arrayNumeros = [10,40,30,20,15,5]

Array.prototype.sortNumbers = function(){
    return this.sort(
        function(a,b){
            return a - b
        }
    );
}
console.log (arrayNumeros.sortNumbers())
let maximo = Math.max(10,40,30,20,15,5)
let minimo = Math.min(10,40,30,20,15,5)
console.log("el número mayor es: " + maximo + " el menor es: " + minimo) ;


console.log("______________")



function comparar(a,b){return a - b}

ejemplo=new Array(10, 40, 30, 20, 15, 5)

function ordenar(){

  ejemplo1=ejemplo.sort(comparar)

  alert('el orden de los números es  ' + ejemplo1[0] + '-' + ejemplo1[1] + '-' + ejemplo1[2] + '-' + ejemplo1[3] + '-' + ejemplo1[4] + '-' + ejemplo1[5] + '-' + ejemplo1[6]);

}

//Llamando a la función ordenar() aparecería una cuadro emergente con el texto "el orden de los números es 3-5-8-9-10-23-78"

ordenar();
