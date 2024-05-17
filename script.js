function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function choice(play) {
    let result = "";
    if (play == 1) {
        result = "PIEDRA🥌";
    } else if (play == 2) {
        result = "PAPEL🗞";
    } else if (play == 3) {
        result = "TIJERA✂";
    } else {
        result = "GAME OVER";
    }
    return result;
}

let player = 0;
let computer = 0;
let wins = 0;
let losses = 0;

function playGame(playerChoice) {
    computer = random(1, 3);
    player = playerChoice;

    let resultText = "<br>Tu eleccion: " + choice(player) + "<br>El computador eligió: " + choice(computer);

    if (computer == player) {
        resultText += "<br>Empate😨!";
    } else if (player == 1 && computer == 3){    
        resultText += "<br>GANASTE!!!🎉";
        wins++;
    } else if(player == 2 && computer == 1){
        resultText += "<br>GANASTE!!!🎉!";
        wins++;
    } else if(player == 3 && computer == 2){
        resultText += "<br>GANASTE!!!🎉!";
        wins++;
    }   else {
        resultText += "<br>PERDISTE!😝";
        losses++;
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("score").innerHTML = "Score - TU: " + wins + ", La computadora: " + losses;

    if (wins === 3 || losses === 3) {
        alert("FIN DEL JUEGO. GANASTE: " + wins + " veces. PERDISTE: " + losses + " veces.");
        wins = 0;
        losses = 0;
        
    }
}
