const entrada = "A B C B A B A A";
const votos = entrada.split(' ');

const contagemVotos = {};

votos.forEach(voto => {
    contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

let mapaVencedor;
let maxVotos = 0;
//--------------------------
//determinarMapaVencedor();

console.log(contagemVotos);
console.log("-> " + contagemVotos["A"]);


for(let k in contagemVotos) {
  let cantidad = contagemVotos[k];
  
  if (cantidad > maxVotos) {
    maxVotos = cantidad;
    mapaVencedor = k;
  }
}

console.log(mapaVencedor);

