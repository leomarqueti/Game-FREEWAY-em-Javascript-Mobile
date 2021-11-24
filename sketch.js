function setup() {
  createCanvas(411, 731);
  somTransito.loop();
}

function draw() {
  background(imagemFundoJogo);
  mostrarAtor();
  mostrarCarro();
  movimentaCarro();
  controlaAtor();
  voltaCarroPosicaoInicial();
  verificaColisao();
  mostraPontos();
  calculaPontos();
  dificuldade();
  ReduzVelocidade();
}
