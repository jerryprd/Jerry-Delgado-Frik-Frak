// Define players
const player1 = 'X'; 
const player2 = 'O';

// Definir o jogador inicial e as peças
let currentPlayer = player1;
let piecesLeft = { [player1]: 3, [player2]: 4, };

// Obtém todos os quadrados
const squares = document.querySelectorAll('.square');

// Adicionar evento de clique a cada quadrado
squares.forEach(square => {
  square.addEventListener('click', () => {
	

    // Verifique se o jogador atual tem peças para jogar
    if (piecesLeft[currentPlayer] === 0) {
		alert(`Voce nao tem mais pecas para jogar, mova uma peca existente`);
		return;
	  }
  
    // Se o quadrado estiver ocupado, mostre alerta e não faz nada
    if (square.textContent !== '') {
      alert('Voce nao pode jogar aqui!');
      return;
    }

    // Adiciona o símbolo do jogador atual ao quadrado
    square.textContent = currentPlayer;
    piecesLeft[currentPlayer]--;

    // Verifica se as três peças foram jogadas por ambos os jogadores
    if (piecesLeft[player1] === 0 && piecesLeft[player2] === 0) {

      // Permitir que os jogadores movam suas peças
      squares.forEach(square => square.classList.add('moveable'));
    }

    // Verifica se o jogador atual ganhou
    if (hasPlayerWon(currentPlayer)) {
      alert(`${currentPlayer} Venceu!`);
      resetGame();
      return;
    }

    // Verifica se o jogo está empatado
    if (isGameTie()) {
      alert('O jogo terminou em empate!');
      resetGame();
      return;
    }

    // Muda para o próximo jogador
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  });
});

// Adicionar evento de click para mover a quadrados
squares.forEach(square => {
  square.addEventListener('click', () => {
	
    // Se o quadrado não for móvel, não faça nada
    if (!square.classList.contains('moveable')) {
      return;
    }

    // Mova a peça para um novo quadrado
    square.textContent = currentPlayer;
    piecesLeft[currentPlayer]--;

    // Limpa quadrados móveis
    squares.forEach(square => square.classList.remove('moveable'));

	 // Verifica se o movimento é válido
	 let squareOccupied = false;
	 let validMove = false;
	 const squareIndex = Array.from(squares).indexOf(square);
 
	 switch(squareIndex) {
	   case 0:
		 validMove = [1, 3, 4].includes(lastSquareIndex);
		 squareOccupied = [1, 3, 4].includes(squareIndex);
		 break;
	   case 1:
		 validMove = [0, 2, 4].includes(lastSquareIndex);
		 squareOccupied = [0, 2, 4].includes(squareIndex);
		 break;
	   case 2:
		 validMove = [1, 4, 5].includes(lastSquareIndex);
		 squareOccupied = [1, 4, 5].includes(squareIndex);
		 break;
	   case 3:
		 validMove = [0, 4, 6].includes(lastSquareIndex);
		 squareOccupied = [0, 4, 6].includes(squareIndex);
		 break;
	   case 4:
		 validMove = [0, 1, 2, 3, 5, 6, 7, 8].includes(lastSquareIndex);
		 squareOccupied = [0, 1, 2, 3, 5, 6, 7, 8].includes(squareIndex);
		 break;
	   case 5:
		 validMove = [2, 4, 8].includes(lastSquareIndex);
		 squareOccupied = [2, 4, 8].includes(squareIndex);
		 break;
	   case 6:
		 validMove = [3, 4, 7].includes(lastSquareIndex);
		 squareOccupied = [3, 4, 7].includes(squareIndex);
		 break;
	   case 7:
		 validMove = [6, 4, 8].includes(lastSquareIndex);
		 squareOccupied = [6, 4, 8].includes(squareIndex);
		 break;
	   case 8:
		 validMove = [5, 4, 7].includes(lastSquareIndex);
		 squareOccupied = [5, 4, 7].includes(squareIndex);
		 break;
	 }
 
	 if (!validMove) {
	   alert('Jogada inválida!');
	   return;
	 }
 
	 if (squareOccupied) {
	   alert('Você não pode jogar nesta casa novamente!');
	   return;
	 }

    // Verifica se o jogador atual ganhou
    if (hasPlayerWon(currentPlayer)) {
      alert(`${currentPlayer} Venceu!`);
      resetGame();
      return;
    }

    // Verifica se o jogo está empatado
    if (isGameTie()) {
      alert('O jogo terminou em empate!');
      resetGame();
      return;
    }

    // Muda para o próximo jogador
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  });
});

// Verifica se um jogador ganhou
function hasPlayerWon(player) {

	// Verifica as linhas horizontais
	if (squares[0].textContent === player && squares[1].textContent === player && squares[2].textContent === player) {
		return true;
	}
	if (squares[3].textContent === player && squares[4].textContent === player && squares[5].textContent === player) {
		return true;
	}
	if (squares[6].textContent === player && squares[7].textContent === player && squares[8].textContent === player) {
		return true;
	}
	// Verifica as linhas verticais
if (squares[0].textContent === player && squares[3].textContent === player && squares[6].textContent === player) {
return true;
}
if (squares[1].textContent === player && squares[4].textContent === player && squares[7].textContent === player) {
return true;
}
if (squares[2].textContent === player && squares[5].textContent === player && squares[8].textContent === player) {
return true;
}
// Verifica as linhas diagonais
if (squares[0].textContent === player && squares[4].textContent === player && squares[8].textContent === player) {
	return true;
}
if (squares[2].textContent === player && squares[4].textContent === player && squares[6].textContent === player) {
	return true;
}

// Se nenhuma combinação vencedora for encontrada
return false;

}

// Verifica se o jogo está empatado
function isGameTie() {
return Array.from(squares).every(square => square.textContent !== '');
}

const restartButton = document.getElementById('Reiniciar jogo');
restartButton.addEventListener('click', resetGame);


function resetGame() {
	squares.forEach(square => square.textContent = '');
	currentPlayer = player1;
	piecesLeft = { [player1]: 3, [player2]: 3 };
  }