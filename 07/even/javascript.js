        function checkEvenOdd() {
            const number = parseInt(document.getElementById("numberInput").value);

                if (number % 2 == 0) {
                    document.getElementById("result").innerHTML = number + "even";
                } else {
                    document.getElementById("result").innerHTML = number + "odd";
                }
            }
        
  
