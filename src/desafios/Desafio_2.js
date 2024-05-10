// Constantes de pruebas
const jugadores = [
    {"nombre" : "Juan", "victorias" : 89, "derrotas" : 21},
    {"nombre" : "Alicia", "victorias" : 36, "derrotas" : 55},
    {"nombre" : "Andy", "victorias" : 150, "derrotas" : 10}
];

// Desde aqui inicia el desafio.
const mensaje = "O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}";

let rankingJugador = 0;
let nivelJugador = "---";

function posicionJugador(valor) {
    if (valor <= 10) {
        nivelJugador = "Ferro";
    } else if (valor >= 11 && valor <= 20) {
        nivelJugador = "Bronze";
    } else if (valor >= 21 && valor <= 50) {
        nivelJugador = "Prata";
    } else if (valor >= 51 && valor <= 80) {
        nivelJugador = "Ouro";    
    } else if (valor >= 81 && valor <= 90) {
        nivelJugador = "Diamante";
    } else if (valor >= 91 && valor <= 100) {
        nivelJugador = "Lendário";
    } else if (valor >= 101) {
        nivelJugador = "Imortal";
    }
}

function calculandoRankingJugador(derrotas, victorias) {
    rankingJugador = victorias - derrotas;
}


for(let indice = 0; indice < jugadores.length; indice++) {
    let jugador = jugadores[indice];

    calculandoRankingJugador(jugador.derrotas, jugador.victorias);
    posicionJugador(rankingJugador);

    console.log(mensaje.replace("{saldoVitorias}", rankingJugador).replace("{nivel}", nivelJugador));
}
