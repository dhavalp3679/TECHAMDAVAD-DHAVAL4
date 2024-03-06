function convertTemperature(){
    let tem = document.getElementById( "temperature" ).value;

    let scale = document.getElementById("scale").value;

    let convertTemperature;
    if(scale === "celsius"){
        convertTemperature =(temperature * 9/5) +32 ;
        document.getElementById("result").innerHTML= Math.round(convertTemperature)+"fahrenheit";
    }else(scale === "fahrenheit") {
         convertTemperature=( (temperature -  32 )* 5/9);
         document.getElementById("result").innerHTML=Math.round(convertTemperature)+ "celsius";
    
    }
}