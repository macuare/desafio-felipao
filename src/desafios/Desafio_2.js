// Constantes de pruebas
const victorias = 150;
const derrotas = 10;

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

calculandoRankingJugador(derrotas, victorias);
posicionJugador(rankingJugador);

console.log(mensaje.replace("{saldoVitorias}", rankingJugador).replace("{nivel}", nivelJugador))