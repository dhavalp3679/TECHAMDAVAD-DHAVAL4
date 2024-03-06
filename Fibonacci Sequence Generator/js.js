function generateFibonacci(){
    let numTerms = document.getElementById("numTerms").value;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= numTerms; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    document.getElementById("fibonacciSequence").innerHTML = temp;

}