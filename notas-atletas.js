let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

for (let i= 0; i < atletas.length; i++) {
  let nomes = atletas[i].nome;
  let notasObitidas = atletas[i].notas.sort((a, b) => a-b);
  let notaUtil = notasObitidas.slice(1, 4);
  let soma = notaUtil.reduce(function(total, atual){
    return total + atual
  }, 0);
  console.log("Atleta: "+nomes);
  console.log("Notas obitidas: "+notasObitidas);
  console.log("Média válida: "+soma / notaUtil.length);
  console.log();
};
