let c, nameSS = "";
console.log("Secret society");
const NAMES = ["Harry", "Ron", "Hermione"]; //Aquí agregue o elimine los nombres necesarios
console.log(NAMES);
console.log(NAMES.sort());
for (i = 0; i < (NAMES.length); i++) {
    nameSS += NAMES[i].slice(0,1);
}
console.log("Nombre de la Sociedad secreta: " + nameSS);

/*//Segunda opción
const COLLECTION_UNO = ["Esperanza", "Franco", "Nia"], COLLECTION_DOS = ["Phoebe", "Ross", "Chandler", "Joey", "Mónica", "Rachel"], COLLECTION_TRES = ["Harry", "Ron", "Hermione"];
let res = [];
function secretName (cn) {
    cn.forEach((e) => res.push(e.charAt(0)));
    console.log(res.sort().join(""));
}
secretName(COLLECTION_DOS);*/