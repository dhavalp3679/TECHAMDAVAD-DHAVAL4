let array = [];
function findMinMax(){

    let array1 = document.getElementById("array1").value;
    array.push(array1);
    let array2 = array.sort(function  (a, b) { return a - b });

    let small = array[0];
    let larges = array[array.length-1];



    document.getElementById("result").innerHTML = "small value =>" + JSON.stringify(small);
    document.getElementById("result1").innerHTML = "larrge value=>" + JSON.stringify(larges); 
    document.getElementById("result2").innerHTML = "main value=>" + JSON.stringify(array);   

}