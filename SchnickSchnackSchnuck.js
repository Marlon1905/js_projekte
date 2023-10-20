var player1 = prompt("Spieler 1, wie heißt du?")
var pic1 = prompt("Stein, Schere, oder Papier?")

var player2 = prompt("Spieler 2, wie heißt du?")
var pic2 = prompt("Stein, Schere, oder Papier?")

if ((pic1 == "Stein") && (pic2 == "Stein")) {
    alert(player1 + " und " + player2 + " haben beide Stein gewählt: Untentschieden!")
}
if ((pic1 == "Schere") && (pic2 == "Stein")) {
    alert(player1 + " hat Schere, " + player2 + " hat Stein gewählt: " + player2 + " gewinnt!")
}

if ((pic1 == "Papier") && (pic2 == "Stein")) {
    alert(player1 + " hat Papier, " + player2 + " hat Stein gewählt: " + player1 + " gewinnt!")
}

if ((pic1 == "Stein") && (pic2 == "Papier")) {
    alert(player1 + " hat Stein, " + player2 + " hat Papier gewählt: " + player2 + " gewinnt!")
}
if ((pic1 == "Schere") && (pic2 == "Papier")) {
    alert(player1 + " hat Schere, " + player2 + " hat Papier gewählt: " + player1 + " gewinnt!")
}
if ((pic1 == "Papier") && (pic2 == "Papier")) {
    alert(player1 + " und " + player2 + "haben beide Papier gewählt: Untentschieden!")
}

if ((pic1 == "Stein") && (pic2 == "Schere")) {
    alert(player1 + " hat Stein, " + player2 + " hat Schere gewählt: " + player1 + " gewinnt!")
}
if ((pic1 == "Schere") && (pic2 == "Schere")) {
    alert(player1 + " und " + player2 + "haben beide Schere gewählt: Untentschieden!")
}
if ((pic1 == "Papier") && (pic2 == "Schere")) {
    alert(player1 + " hat Papier, " + player2 + " hat Schere gewählt: " + player2 + " gewinnt!")
}




