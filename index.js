alert("Hola! Te ayudaremos a crear un truco de magia para que le hagas a tus amigos");
let nombre1 = prompt("Hola jugador 1, dime tu nombre por favor");
let nombre2 = prompt("Hola jugador 2, dime tu nombre por favor");

if (nombre1 === "" || nombre1 === null) {
    nombre1 = "XXX";
}
if (nombre2 === "" || nombre2 === null) {
    nombre2 = "YYY";
}
alert(`Listos para jugar? Jugador 1 = ${nombre1} y jugador 2 = ${nombre2}`);

let number = parseInt(prompt(`${nombre1}, dime el número que quieres que sea adivinado por ${nombre2}. \nSi eliges un número del 1 al 10, ${nombre2} tendrá 3 vidas para adivinarlo. \nSi eliges del 1 al 30, ${nombre2} tendrá 10 vidas.`));

let vidas;

function asignarVidas() {
    if (number >= 1 && number <= 10) {
        vidas = 3;
        alert(`Ok ${nombre1}! Buena elección. Ahora es momento de que ${nombre2} encuentre el numero oculto`);
        alert (`Ok ${nombre2}! Tendrás 3 oportunidades para adivinar el número elegido. Número del 1 al 10.`)
    }
    else if (number >= 1 && number <= 50) {
        vidas = 10;
        alert(`Ok ${nombre1}! Buena elección. Ahora es momento de que ${nombre2} encuentre el numero oculto`);
        alert (`Ok ${nombre2}! Tendrás 10 oportunidades para adivinar el número elegido. Número del 1 al 30.`);
    }
    else {
        alert("Por favor, ingresa un número válido entre 1 y 30.");
        number = parseInt(prompt(`${nombre1}, por favor elige un número entre 1 y 30.`));
        asignarVidas();
    }
}

asignarVidas();

while (vidas > 0) {
    let intento = parseInt(prompt(`${nombre2}, intenta adivinar el número elegido por ${nombre1}`));
    
    if (intento === number) {
        alert(`¡Felicidades ${nombre2}! Adivinaste el número que ${nombre1} eligió. ¡Ganaste!`);
        break; 
    } else {
        vidas--;
        if (vidas > 0) {
            alert(`Fallaste. Te quedan ${vidas} vidas.`);
        } else {
            alert(`Lo siento, ${nombre2}. Se te acabaron las vidas. El número era ${number}. ¡Fin del juego!`);
        }
    }
}
