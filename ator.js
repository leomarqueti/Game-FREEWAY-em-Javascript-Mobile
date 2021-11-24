// variaveis do personagem
let yPersonagem = 710;
let xPersonagem = 100;
let dimensaoPersonagemX = 25;
let dimensaoPersonagemY = 14;

// variavel da biblioteca de colisao(collide2d.js)
let recebeValorDaColisao = false;

// variavel que recebe o valor dos pontos do jogador
let meusPontos = 0;

// nessa funçao criamos para mostrar o personagem
function mostrarAtor() {
  image(
    imagemPersonagem,
    xPersonagem,
    yPersonagem,
    dimensaoPersonagemX,
    dimensaoPersonagemY
  );
}

// funçao que da o controle do personagem
function controlaAtor() {
  if (mouseIsPressed) {
    yPersonagem -= 2;
  }
  if (keyIsDown(UP_ARROW)) {
    yPersonagem -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yPersonagem += 2;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (bloqueaAsLaterais()) {
      xPersonagem -= 2;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (bloqueaAsLaterais()) {
      xPersonagem += 2;
    }
  }
}

//funcao da biblioeteca collide2d.js, para a colisao do carro com o personagem
function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    recebeValorDaColisao = collideRectCircle(
      PosicaoEmXDosCarros[i],
      PosicaoEmYDosCarros[i],
      dimensaoCarroX,
      dimensaoCarroY,
      xPersonagem,
      yPersonagem,
      2
    );
    if (recebeValorDaColisao) {
      voltaPersonagemPosicaoInicial();
      somBatida.play();
      if (descontarPontos()) {
        meusPontos -= 1;
      }
    }
  }
}

//funcao que volta o personagem para a posicao inicial se ele bater
function voltaPersonagemPosicaoInicial() {
  yPersonagem = 710;
}

// aqui serve para mostrar os pontos na tela
function mostraPontos() {
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(meusPontos, width / 2, 25);
}

// como ja diz na funçao, ela serve para fazer os calculos dos pontos do personagem
function calculaPontos() {
  if (yPersonagem < 15) {
    meusPontos += 1;
    voltaPersonagemPosicaoInicial();
    somPontos.play();
  }
}

//foi criado essa funçao para que o personagem so se movesse se tivesse pra cima de 380 pois assim ele nao sairia da tela
function podeSeMover() {
  return yPersonagem < 710;
}

//aqui serve para o personagem perder ponto se ele colidir com o carro
function descontarPontos() {
  return meusPontos > 0;
}

//criei essa funcao para que o personagem pudesse se mover para as laterais so se ele estivesse na calcada
function bloqueaAsLaterais() {
  return yPersonagem >= 710;
}
