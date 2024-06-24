var game = document.getElementById('game');
var gameFinish = document.getElementById('gameFinish');
var gameover = document.getElementById('gameover');
var playerOne = [];
var playerTwo = [];
var win = document.getElementById('win');
var turn = 'playerOne';
var winner = '';
var limit = 0;
    document.addEventListener('click', function(element) {
    if (turn === 'playerOne' && element.target.innerText === '') {
        winner = 'X';
        element.target.innerText = 'X';
        turn = 'playerTwo';
        playerOne.push(element.target.id);
        limit++;
        checkWinner(playerOne);
    } else if (turn === 'playerTwo' && element.target.innerText === '') {
        winner = 'O';
        element.target.innerText = 'O';
        turn = 'playerOne';
        playerTwo.push(element.target.id);
        limit++;
        checkWinner(playerTwo);
    }
});

function checkWinner(element) {
    const arr = element.join(' ').split(' ');
    const check = arr.sort((a, b) => a > b ? 1 : -1);
    for (var i = 0; i < check.length; i++) {
        if (check[i] === check[i + 1] && check[i + 1] === check[i + 2] || check[i] === 'x1' && check[i + 1] === 'x2' && check[i + 2] === 'x3') {
            setTimeout(() => {
                game.style.display = 'none';
                gameFinish.style.display = 'flex';
                win.className = 'visible';
                win.innerText = winner + ' - WINNER!';
            }, 500);
        }
    }
    if (limit === 9) {
        game.style.display = 'none';
        gameFinish.style.display = 'flex';
        gameover.className = 'visible';
    }
}

function reset() {
    var tds = document.getElementsByTagName('td');
    game.style.display = 'flex';
    gameFinish.style.display = 'none';
    win.className = 'd-none';
    limit = 0;
    for (var i = 0; i < tds.length; i++) {
        tds[i].innerText = '';
    }
    playerOne = [];
    playerTwo = [];
    turn = 'playerOne';
}