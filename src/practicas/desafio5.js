// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const saldoInicial = 98;
const resultadoUltimoRound = "perdeu";
const custoItem = 120;

function decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem) {
    let novoSaldo;
    console.log("Valor Inicial: "+novoSaldo);

    // TODO: Implemente a lógica para ajustar o saldo de acordo com o resultado do último round
    novoSaldo = saldoInicial;
    console.log("Saldo asignado: "+novoSaldo);

    switch(resultadoUltimoRound) {
        case "ganhou":
          novoSaldo *= 1.15;
          break;
        case "perdeu ":
        case "perdeu":
          novoSaldo *= 1.05;
          break;
        case "bônus":
          novoSaldo *= 1.20;
          break;
        default:
          print("Ninguno");
          break;
      }
    
    console.log("saldo antes de conversion "+novoSaldo);
  
	// Utilizamos a função JavaScript Math.round() para arredondar um número para o inteiro mais próximo.
	novoSaldo = Math.round(novoSaldo);
    console.log("saldo despues de conversion "+novoSaldo);

    // TODO: Implemente a lógica para verificar se o saldo é suficiente para comprar o item
    if (novoSaldo >= custoItem) {
        console.log("Comprar");
    } else {
        console.log("Economizar");
    }
}

// TODO: Chame a função para imprimir o resultado

decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem);