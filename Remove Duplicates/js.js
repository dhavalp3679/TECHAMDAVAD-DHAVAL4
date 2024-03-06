let value1 =[];
function removeDuplicates() {
    let  inputValue = document.getElementById("inputarray").value;
    value1.push(inputValue);

    document.getElementById("result").innerHTML = "Original Array: " + JSON.stringify(value1);
    let filterfor = value1.filter((item, index) => value1.indexOf(item) === index);
    document.getElementById("finalArray").innerHTML= "Filtered Array :" +JSON.stringify(filterfor);

}