const array = [9,7,2,4,0,6,3,3,2,0];
const array1 = [1,2,3,4,5,6,7,8,9,10];

function findIntersection() {
     document.getElementById("result").value;
     document.getElementById("array").value;
     document.getElementById("array1").value;
     let array3 = array.concat(array1);



     let sorted = array3.sort(function(a, b){return a -b})
    document.getElementById("result").innerHTML = JSON.stringify(sorted);

}