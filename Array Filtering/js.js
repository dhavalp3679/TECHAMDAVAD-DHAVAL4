let array=[];
let even=[];
let  odd=[];


function arrayfiltering(){
    let num = document.getElementById("arrayfiltering").value;
    array.push(num);
    if(num % 2 == 0){
        even.push(num);
    }else{
    odd.push(num);
}
    document.getElementById("all").innerHTML = "All " + JSON.stringify(array);
    document.getElementById("odd").innerHTML = "Odd " + JSON.stringify(odd);
    document.getElementById("even").innerHTML = "Even " + JSON.stringify(even);

}