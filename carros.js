//lista onde armazenamos a posição X, Y e por ultimo a velocidade dos carros
PosicaoEmXDosCarros = [700, 700, 700, 700, 700, 700, 900, 900];
PosicaoEmYDosCarros = [70, 180, 260, 380, 480, 590, 310, 590];
velocidadeDosCarros = [5, 3.5, 8, 4, 7, 2.5, 7, 5];

//Controla o dimensionamento das imagens dos carros
let dimensaoCarroX = 90;
let dimensaoCarroY = 60;

//Nessa função serve para mostrar os carros na tela
function mostrarCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      PosicaoEmXDosCarros[i],
      PosicaoEmYDosCarros[i],
      dimensaoCarroX,
      dimensaoCarroY
    );
  }
}

//Criamos essa função para dar movimento nos carros
function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    PosicaoEmXDosCarros[i] -= velocidadeDosCarros[i];
  }
}

//Quando o carro passa a tela, ele precisa voltar na posicao inicial para que sempre fique passando na tela
function voltaCarroPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (voltaCarrosNaPosicaoInicial(PosicaoEmXDosCarros[i])) {
      PosicaoEmXDosCarros[i] = 700;
      velocidadeDosCarros[i] = valorRandomVelocidade(5, 9);
    }
  }
}

//
function voltaCarrosNaPosicaoInicial(xCarro) {
  return xCarro < -50;
}

//Foi criado essa função para que aumentase a velocidade toda vez que o jogador ganha se um determidado ponto , usei valores random na velocidade para que o jogo ficasse mais dinamico
function dificuldade() {
  if (meusPontos > 3) {
    for (let i = 0; i < imagemCarros.length; i++) {
      velocidadeDosCarros[i] = valorRandomVelocidade(7, 10);
    }
  }
  if (meusPontos > 7) {
    for (let i = 0; i < imagemCarros.length; i++) {
      velocidadeDosCarros[i] = valorRandomVelocidade(9, 12);
    }
  }
}

//é nessa função que geramos os valores random para a velocidades dos carros e usamos esse valor na funcao de cima
function valorRandomVelocidade(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//pensei em colocar dois carros na mesma rua, porem tive problemas, pois em alguns momentos os carros passavam um por cima dos outros, por causa da velocidade aleatoria
//Entao criei essa função para deixar a velocidade dos carros da mesma rua igual, toda vez que eles se aproximarem, sendo assim nunca um tera mais velocidade que o outro
function ReduzVelocidade() {
  if (PosicaoEmXDosCarros == PosicaoEmXDosCarros && PosicaoEmYDosCarros== PosicaoEmYDosCarros) {
    velocidadeDosCarros[3] = velocidadeDosCarros[6];
    velocidadeDosCarros[5] = velocidadeDosCarros[7];
  }
}
