
let array = [];
function doubleArray(){
    let num1 = document.getElementById("inputArray").value;  //obtevaner el valor del input de la primera caja de texto
   
    array.push(num1)
    
    let num2 = array.map((nextvalue)=> nextvalue * 2);

    let sorted = num2.sort(function(a, b){return a -b})
    document.getElementById("result").innerHTML = JSON.stringify(sorted);
}