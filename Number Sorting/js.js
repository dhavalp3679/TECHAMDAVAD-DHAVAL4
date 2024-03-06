let arry = [];
function numbersorting(){
    let num1 = document.getElementById("number").value;

    arry.push(num1);
    // console.log(arry);
    
    let num2 = arry.sort(function(a, b){return a-b});
    document.getElementById( "result" ).innerHTML= JSON.stringify(num2) ; 
    

}