// referencia javascript https://www.w3schools.com/js/js_array_iteration.asp
// referencia https://www.w3schools.com/js/js_random.asp

const mensaje = "O Herói de nome {nombreHeroe} está no nível de {nivel}";

let puntosExperiencia = 0;
let nombreDelHeroe = "Macuare";
let nombreCategoria = "---";
let niveles = [
    [0, 1000, "Ferro"],
    [1001, 2000, "Bronze"],
    [2001, 5000, "Prata"],
    [5001, 7000, "Ouro"],
    [7001, 8000, "Platina"],
    [8001, 9000, "Ascendente"],
    [9001, 10000, "Imortal"],
    [10001, 999999, "Radiante"]
];

puntosExperiencia = Math.floor(Math.random() * 15000); // Aleatoreadad

for (let indice in niveles) {
    let categoria = niveles[indice];
    let minimo = categoria[0];
    let maximo = categoria[1];
    
    if (puntosExperiencia >= minimo && puntosExperiencia <= maximo) {
        nombreCategoria = categoria[2];
        console.log("Encontrado");
        break;
    }
}
let item = inventario.find(item => item.nome === nome);
votos.forEach(voto => {
    contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

console.log(mensaje.replace("{nombreHeroe}", nombreDelHeroe).replace("{nivel}", nombreCategoria));
