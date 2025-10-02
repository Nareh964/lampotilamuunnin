let num =[];

function fahrenheitToCelsius(fahr){
    return (fahr - 32) * 5 / 9;
}


function errorMessage(cel, optional){
    var error = document.getElementById("virhe");
    if (isNaN(cel) || cel === ""){
        error.textContent = "Syötä kelvollisen lämpötila numero "
        error.style.color = "red"
    } else if(optional === "celsius" && cel < -273.15){
        error.textContent = "Astekko ei saa olla pienempi kuin (-273.15 celsius)."
        error.style.color = "red"
    }else if(optional === "fahrenheit" && cel < -459.67){
        error.textContent = "Astekko ei saa olla pienempi kuin (-459.67 fahrenheit)."
        error.style.color = "red"
    } 
    else {
        error.textContent = ""
    }
}

function muuntaa(event){
    event.preventDefault();

    let input = document.getElementById("astekko");
    let optional = document.getElementById("conversion").value;
    let cel = parseFloat(input.value.replace(",","."));
    errorMessage(cel, optional);

    if ((optional === "celsius" && cel < -273.15) || (optional === "fahrenheit" && cel < -459.67) || isNaN(cel)){
        document.getElementById("tulos").textContent = "";
        return;
    }

    let decimals = 1;
    let radios = document.getElementsByName("desimaali");
    for (let radio of radios){
        if (radio.checked){
            if(radio.id === "1desi") decimals = 1;
            else if(radio.id === "2desi") decimals = 2;
            else if(radio.id === "3desi") decimals = 3;
            break;
        }
    }
    let result, text;
    if (optional === "celsius"){
        result = (cel * 9/5) + 32;
        text = `${cel}°C = ${result.toFixed(decimals)}°F`;
    } else {
        result = fahrenheitToCelsius(cel);
        text = `${cel}°F = ${result.toFixed(decimals)}°C`;
    }

    document.getElementById("tulos").textContent = text;

    num.push(cel);
    input.value = "";
}



