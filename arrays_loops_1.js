console.log("Sum of resistors in series");
let resistance = [-1,5,6,3]; //Cambiar las resistencias en este array, pueden ser más de 4 elementos, o menos de 4 elementos.
let i, sum = 0;
console.log(resistance);
for(i = 0; i < (resistance.length); i++){
    sum += Math.abs(resistance[i]);
}
console.log(sum + " ohms");

/*//Segunda opción
const RES1 = [-1, 5, 6, 3], RES2 = [14, 3, 5, 6], RES3 = [8, 15, 100];
let aux = [], resis = 0;
function sum (res){
    (res.forEach((e) => aux.push(Math.abs(e))));
   aux.forEach((e) => resis += e);
    console.log(resis);
}
sum(RES1);*/
