console.log("Array of Multiples");
function calculatingMultiples(number, length) {
    let multiples = [number];
    console.log("Número: " + number + "\nLongitud:" + length);
    for (let i = 1; i <= (length-1); i++){
        multiples.push(number*(i+1));
    }
    console.log(multiples);
}
calculatingMultiples(3,10); //Aquí se introduce primero el número base, y después las veces que aparecerán sus múltiplos