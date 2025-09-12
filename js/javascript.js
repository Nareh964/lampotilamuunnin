let num =[];

function errorMessage(cel){
    var error = document.getElementById("virhe");
    if (isNaN(cel) || cel === ""){
        error.textContent = "Syötä kelvollisen lämpötila numero "
        error.style.color = "red"
    } else if(cel < -273.15){
        error.textContent = "Astekko ei saa olla pienempi kuin (-273.15 celsius)."
        error.style.color = "red"
    } else {
        error.textContent = ""
    }
}

function muuntaa(event){
    event.preventDefault();

    let input = document.getElementById("astekko");
    let cel = parseFloat(input.value.replace(",","."));
    errorMessage(cel);

    if (isNaN(cel) || cel < -273.15){
        document.getElementById("tulos").textContent = "";
        return;
    }

    let decimals = 1
    let radios = document.getElementsByName("desimaali");
    for (let radio of radios){
        if (radio.checked){
            if(radio.id === "1desi") decimals = 1;
            else if(radio.id === "2desi") decimals = 2;
            else if(radio.id === "3desi") decimals = 3;
            break;
        }
    }
    let fahr = cel * 9 / 5 + 32;
    let rounded = fahr.toFixed(decimals);

    document.getElementById("tulos").textContent = `${cel}°C = ${rounded}°F`;

    num.push(cel);
    input.value = "";


}


    
