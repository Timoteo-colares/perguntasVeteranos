// Seleciona todos os botões dentro da div .choices
const botoes = document.querySelectorAll(".choices button");

// Pega os elementos de texto onde vamos mostrar as escolhas dos jogadores e o vencedor
const textoj1 = document.getElementById("player1-choice");
const textoj2 = document.getElementById("player2-choice");
const textoResultado = document.getElementById("winner");

// Variáveis que armazenam a escolha de cada jogador
let jogador1 = null;
let jogador2 = null;

// Função que verifica quem venceu baseado nas escolhas de j1 e j2
function verificarVencedor(j1, j2) {
  // Se as escolhas forem iguais, é empate
  if (j1 === j2) {
    return "Empate";
  }

  // Se jogador 1 vencer nas condições clássicas
  if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "papel" && j2 === "pedra") ||
    (j1 === "tesoura" && j2 === "papel")
  ) {
    return "Jogador 1 venceu!";
  } else {
    // Se não for empate nem vitória do jogador 1, jogador 2 vence
    return "Jogador 2 venceu!";
  }
}

// Função que reinicia o jogo (reseta variáveis e textos)
function novoJogo() {
  jogador1 = null;
  jogador2 = null;

  // Textos padrão para início da partida
  textoj1.textContent = "Jogador 1: escolha sua jogada";
  textoj2.textContent = "Jogador 2: escolha sua jogada";
  textoResultado.textContent = "";
}

// Adiciona um evento de clique para cada botão (pedra, papel, tesoura)
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Pega o valor da escolha (pedra, papel ou tesoura)
    const escolha = botao.getAttribute("data-choice");

    // Se o jogador 1 ainda não escolheu
    if (jogador1 === null) {
      jogador1 = escolha;
      textoj1.textContent = "Jogador 1 já escolheu!";
      textoResultado.textContent = "Vez do jogador 2";
    
    // Se o jogador 2 ainda não escolheu
    } else if (jogador2 === null) {
      jogador2 = escolha;
      textoj2.textContent = "Jogador 2 já escolheu!";

      // Verifica quem venceu e mostra o resultado
      const resultado = verificarVencedor(jogador1, jogador2);
      textoResultado.textContent = `${resultado} (J1: ${jogador1}, J2: ${jogador2})`;

    // Se os dois já escolheram e clicaram de novo → começa um novo jogo
    } else {
      novoJogo(); // Reseta tudo

      // Registra a nova jogada como a do jogador 1
      jogador1 = escolha;
      textoj1.textContent = "Jogador 1 já escolheu!";
      textoResultado.textContent = "Vez do jogador 2";
    }
  });
});

// Inicia o jogo assim que a página carrega
novoJogo();
