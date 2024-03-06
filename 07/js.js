function additional(){
 let num1 =  parseInt(document.getElementById("text").value);

 let num2 =  parseInt(document.getElementById("text1").value);
//  patseint use for convert string to number
 let result =  num1 +  num2;
//  console.log(result);
document.getElementById("text3").innerHTML = result;


}

function difference(){
    let num3 = parseInt(document.getElementById("text11").value);
    let num4 = parseInt(document.getElementById("text12").value);
    // parseint use for convert string to number
    let result = num3 - num4;
    document.getElementById("text14").innerHTML = result;
    
}

function product(){
    let num5 = parseInt(document.getElementById("text21").value);
    let num6 = parseInt(document.getElementById("text22").value);
     let result = num5 * num6;
     document.getElementById("text23").innerHTML = result;
}

function quotient(){
    let num7 = parseInt(document.getElementById("text31").value);
    let num8 = parseInt(document.getElementById("text32").value);
    let result = num7 / num8;
    document.getElementById("text33").innerHTML = result;
}