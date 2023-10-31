const color = document.querySelector(".background");




function cambiarColorP(){

    let color1 = color.style.backgroundColor;

    color.style.backgroundColor="red";

    if(color1 == "red"){
        color.style.backgroundColor="blue";
    }else if (color1=="blue"){
        color.style.backgroundColor="green";
    }

    var mostrarColor = color.getAttribute("style");

    document.querySelector(".texto").innerHTML = mostrarColor;
}

function cambiarColorS(){

    let color1 = color.style.backgroundColor;

    color.style.backgroundColor="cyan";

    if(color1 == "cyan"){
        color.style.backgroundColor="magenta ";
    }else if (color1=="magenta"){
        color.style.backgroundColor="yellow";
    }
    var mostrarColor = color.getAttribute("style");

    document.querySelector(".texto").innerHTML = mostrarColor;
}

function cambiarColorT(){

    let color1 = color.style.backgroundColor;

    color.style.backgroundColor="orange";
    
    if(color1 == "orange"){
        color.style.backgroundColor="lime";
    }else if (color1 == "lime"){
        color.style.backgroundColor = "MediumSpringGreen";
    }else if(color1 == "mediumspringgreen"){
        color.style.backgroundColor = "violet";
    }else if(color1 == "violet"){
        color.style.backgroundColor = "fuchsia";
    }
    var mostrarColor = color.getAttribute("style");

    document.querySelector(".texto").innerHTML = mostrarColor;
}

function cambiarColorH(){
    let aleatorio = Math.random()*255;
    aleatorio = Math.round(aleatorio);

    let aleat2 = Math.random()*255;
    aleat2 = Math.round(aleat2);

    let aleatorio3 = Math.random()*255;
    aleatorio3 = Math.round(aleatorio3);

    // console.log(aleatorio,aleat2,aleatorio3);
    color.style.backgroundColor= `rgb(${aleatorio},${aleat2},${aleatorio3})`;

    var mostrarColor = color.getAttribute("style");

    document.querySelector(".texto").innerHTML = mostrarColor;
}