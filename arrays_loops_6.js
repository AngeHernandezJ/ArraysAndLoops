console.log("Positive dominance in array");
let b,i, almP = 0, almN = 0;
const TEST = [-1, -3, -5, 4, 6767]; //Aquí modificar los valores, también se pueden agregar o eliminar.
for (i=0; i < TEST.length; i++) {
    if (TEST[i]<0) {
        almN++;
        console.log(almN);
    } else if (TEST[i]>0) {
        almP++;
        console.log(almP);
    }
}
if (almN < almP && almN != almP){ console.log("False");}
else if (almP < almN && almN != almP) { console.log("True");}
else { console.log("Nula");}
//Nota: 0 no va a contar ni como positivo, ni como negativo 