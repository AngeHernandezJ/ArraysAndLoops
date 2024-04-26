console.log("Online Status");
let users = ["mockIng99", "J0eyPunch", "glassedFer", "AngyHJ"];
let medirElementos;
console.log(users);
medirElementos = users.length - 2;
users.splice(2,users.length-1);
if (medirElementos>0){medirElementos += " more"}
console.log(users.toString() + " and " + medirElementos + " online.");

/*//Segunda opción, corregida y aumentada
let medir, res, conect = ["mockIng99", "J0eyPunch", "glassedFer", "AngyHJ"]; //Aquí modificar los usuarios
function displayUsers (users){
    const CONTAR = users.length;
    if (CONTAR === 1) {
        res = `${users[0]} is online`;
    }
    else if (CONTAR === 2) {
        res = `${users[0]}, ${users[1]} are online`;
    }
    else {
        res = `${users[0]}, ${users[1]} and ${CONTAR - 2} are online`;
    }
    return res;
}
console.log(displayUsers(conect));*/