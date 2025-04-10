// crie um função que calcula as notas dos alunos e informa  que 
// se está aprovado ou reprovado e assim fazendo um calculo com a media 

function verificarSituacaoAluno(nome, notas) {
    // Calcula a soma das notas
    let soma = 0;
    for (let nota of notas) {
      soma += nota;
    }
  
    // Calcula a média
    let media = soma / notas.length;
  
    // Verifica se está aprovado ou reprovado
    let situacao = media >= 7 ? "Aprovado" : "Reprovado";
  
    // Exibe o resultado
    console.log(`Aluno: ${nome}`);
    console.log(`Notas: ${notas.join(", ")}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
  }
  
  // Exemplo de uso:
  verificarSituacaoAluno("João", [8, 6.5, 7.5]); // Aprovado
  verificarSituacaoAluno("Maria", [5, 6, 6.5]);  // Reprovado
  