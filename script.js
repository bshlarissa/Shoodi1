function abrirChat() {
    var modal = document.getElementById("chatModal");
    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById("chatModal");
    modal.style.display = "none";
}


const duvida = document.getElementById('duvida');
const perguntaInput = document.getElementById('pergunta');

// Defindo qual pergunta e qual resposta o chat vai dar
const perguntasRespostas = [
  { Produto: 'Saboroso', resposta: 'Eu A-M-O o saboroso. Essa é aquela pedida pra quem tá com fome em DOBRO, pois vem com duas carnes e muito sabor!' },
  { Produto: 'Apetitoso', resposta: 'Esse aqui é pra quem, como eu, é apaixonade por Frango! O apetitoso além de frango, tem sabor de sobra!! ' },
  { Produto: 'Queridinho', resposta: 'O queridinho da galera não tem esse nome atoa. Além de um delicioso hamburguer tradicional, acompanha uma porção de Batata Frita CROCANTE!' },
  { Produto: 'Ideal', resposta: 'O'},
  { Produto: 'Exagerado', resposta: 'O'},
  { Produto: 'Envergonhado', resposta: 'O'},
  { Produto: 'Casal', resposta: 'O'},
  { Produto: 'Solteiro', resposta: 'O'},
  { Produto: 'Larica', resposta: 'O'},
  { Produto: 'Faminto', resposta: 'O'},
];

// Essa função serve pra resposta coincidir com o produtodigitado
function obterResposta(Produto) {
  // Vai percorrer a lista com os produtos
  for (let i = 0; i < perguntasRespostas.length; i++) {
    // Verifica se a pergunta corresponde a uma pergunta na lista
    if (perguntasRespostas[i].Produto.toLowerCase() === Produto.toLowerCase()) {
      // Retorna a resposta correspondente
      return perguntasRespostas[i].resposta;
    }
  }
  // Retorna uma mensagem de resposta padrão caso nenhuma correspondência seja encontrada
  return 'Este Produto não faz parte do nosso cardápio, ou foi escrito de forma Incorreta! Olhe as opções e me envie uma nova mensagem!!.';
}

// Função para enviar a pergunta e exibir a resposta na tela
function enviarPergunta() {
  const pergunta = document.getElementById('pergunta').value = "";
  
  const resposta = obterResposta(pergunta);

  // Cria um novo elemento de parágrafo para exibir a pergunta e a resposta
  const novoElemento = document.createElement('p');
  novoElemento.innerHTML = `<strong>Você:</strong> ${pergunta}<br><strong>Shoodi:</strong> ${resposta}`;

  // Adiciona o novo elemento ao chatbox
  const duvida = document.getElementById('duvida');
  duvida.appendChild(novoElemento);

  // Limpa o campo de pergunta após o envio
  document.getElementById('pergunta').value = '';
}

