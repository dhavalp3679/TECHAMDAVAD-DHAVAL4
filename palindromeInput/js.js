function checkPalindrome(){
    let name =  document.getElementById("palindromeInput").value;
    let name1 = name.split("").reverse("").join("");
     if(name === name1){
         document.getElementById("result").innerHTML = "It is a palindrome";
     }else{
        document.getElementById("result").innerHTML = "Not a palindrome";
     }
}