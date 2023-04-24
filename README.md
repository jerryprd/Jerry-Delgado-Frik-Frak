# Jerry-Delgado-Frik-Frak

O jogo é jogado por dois jogadores e o objetivo é colocar três peças do mesmo tipo em linha reta, em qualquer direção, horizontal, vertical ou diagonal.

Este jogo, em vez de um tabuleiro de nove casas, tem um tabuleiro de nove quadrados e três peças para cada jogador. Os jogadores começam alternadamente a colocar suas peças no tabuleiro. Depois de colocadas todas as peças, os jogadores começam a movê-las para tentar formar uma linha de três. O jogador que conseguir formar uma linha de três vence o jogo.

Instruções
Para jogar este jogo, abra o arquivo index.html no seu navegador. Isso abrirá a interface do jogo no seu navegador.

O jogo começa com o jogador 1 (X), que tem três peças, colocando uma peça em qualquer lugar no tabuleiro. Então, é a vez do jogador 2 (O), que também tem três peças, colocar uma peça em qualquer lugar no tabuleiro. Os jogadores alternam até que todas as peças sejam colocadas.

Depois que todas as peças são colocadas, os jogadores alternam novamente movendo uma de suas peças para uma casa vazia. Se um jogador formar uma linha de três com suas peças, ele ganha o jogo.

Código
O jogo é criado usando HTML, CSS e JavaScript. O arquivo HTML contém o esqueleto do jogo, o arquivo CSS é usado para definir o estilo e o arquivo JavaScript é usado para controlar a lógica do jogo.

O arquivo JavaScript começa definindo os jogadores e a quantidade de peças restantes para cada jogador. Ele então seleciona todos os quadrados no tabuleiro e adiciona um listener de eventos de clique a eles. Quando um jogador clica em um quadrado, o JavaScript verifica se o jogador tem peças restantes para jogar e se o quadrado está vazio. Se o jogador não tiver mais peças para jogar ou se o quadrado estiver ocupado, o jogo não faz nada. Caso contrário, a peça do jogador é colocada no quadrado e o jogo verifica se o jogador venceu ou se o jogo está empatado. Se o jogo não acabou, o próximo jogador é selecionado e o processo é repetido.

Quando todas as peças são colocadas, o jogo permite que os jogadores movam suas peças. Para fazer isso, os quadrados no tabuleiro são tornados "movíveis". Quando um jogador clica em um quadrado movível, o jogo verifica se a jogada é válida (se o quadrado é adjacente ao quadrado anterior) e, em caso afirmativo, a peça é movida para o novo quadrado. Se o movimento não for válido ou se o quadrado estiver ocupado, o jogo não fará nada. O jogo verifica se o jogador venceu ou se o jogo está empatado após cada jogada e o processo de jogo continua até que um jogador vença ou o jogo termine empatado.

Conclusão
Este jogo é uma boa demonstração da linguagem de programação JavaScript. O jogo é fácil de jogar e é um bom exercício para praticar a lógica de programação.

Em resumo, este jogo é uma ótima introdução ao desenvolvimento de jogos em JavaScript e pode ser uma atividade divertida para praticar habilidades de programação. Com algumas modificações, ele pode se tornar uma experiência de jogo mais complexa e desafiadora.
