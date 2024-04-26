console.log("Antipodal average");
const ARR = [1, 2, 3, 4, 5, 6, 7], MED = ARR.length; //En ARR se pueden añadir, eliminar y modificar los elementos necesarios. Puede ser total de números par o impar.
let a, b, c, ar1, ar2i, i, res = [];
function acortar(mat) {
    console.log(mat);
    a = MED % 2;
    b = (MED - a) / 2;
    ar1 = mat.splice(0, b);
    ar2 = mat.splice(a, b);
    ar2.reverse();
    for (i = 0; i < b; i++) {
        res.push(ar1[i] + ar2[i]);
    }
    console.log(res);
}
acortar(ARR);