let array = ["1","2","3","4"];
function findIndex() {
    let inputArray = document.getElementById('inputArray').value;
   
    //let array = inputArray.split(',').map(item => item.trim());
    let index = array.indexOf(inputArray);
    if(index < 0){
        document.getElementById('result').innerHTML = "index not found.";
    }else{
        document.getElementById('result').innerHTML = index;
    }
  
}
