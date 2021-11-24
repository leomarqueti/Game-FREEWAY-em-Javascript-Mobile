// variaveis das imagens do jogos
let ImagemFundoJogo;
let imagemPersonagem;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarro7;
let imagemCarro8;

// variaveis dos sons do jogo
let somPontos;
let somBatida;
let somFundo;
let somTransito;

function preload() {
  imagemFundoJogo = loadImage("imagem/estrada.png");
  imagemPersonagem = loadImage("imagem/ator-1.png");
  imagemCarro = loadImage("imagem/carro-1.png");
  imagemCarro2 = loadImage("imagem/carro-2.png");
  imagemCarro3 = loadImage("imagem/carro-3.png");
  imagemCarro4 = loadImage("imagem/carro-4.png");
  imagemCarro5 = loadImage("imagem/carro-5.png");
  imagemCarro6 = loadImage("imagem/carro-6.png");
  imagemCarro7 = loadImage("imagem/carro-7.png");
  imagemCarro8 = loadImage("imagem/carro-8.png");
  imagemCarros = [
    imagemCarro,
    imagemCarro2,
    imagemCarro3,
    imagemCarro4,
    imagemCarro5,
    imagemCarro6,
    imagemCarro7,
    imagemCarro8
  ];

  somPontos = loadSound("sons/pontos.wav");
  somBatida = loadSound("sons/colidiu.mp3");
  somFundo = loadSound("sons/trilha.mp3");
  somTransito = loadSound("sons/transito.mp3");
} // variaveis dos sons do jogo