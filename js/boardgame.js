document.addEventListener('DOMContentLoaded', () => {
    let player1, player2, player1Points, player2Points, dice, pointsMax;

    (function () {
        let x = 5;
        let y = 6;
        let tileCount = 30;
        let board = document.getElementById('board');

        for (let i = 0; i < y; i++) {
            let row = board.appendChild(document.createElement('div'));
            row.id = 'row-' + i;

            for (let j = 0; j < x; j++) {
                let span = document.createElement('span')
                row.appendChild(span);
                span.id = 'tile-' + tileCount;
                span.className = 'tile'
                span.textContent = tileCount;
                tileCount--;
            }
        }
    })();

    player1 = true;
    player2 = false;
    player1Points = 1;
    player2Points = 1;
    pointsMax = 30;

    let getPlayer1 = sessionStorage.getItem('player1');
    document.querySelector('.playerName1').textContent = getPlayer1;

    let getToken1 = sessionStorage.getItem('playerToken1');
    document.getElementById('playerToken1').src = getToken1;
    document.getElementById('p1TokenDisplay').src = getToken1;

    let getPlayer2 = sessionStorage.getItem('player2');
    document.querySelector('.playerName2').textContent = getPlayer2;

    let getToken2 = sessionStorage.getItem('playerToken2');

    document.getElementById('playerToken2').src = getToken2;
    document.getElementById('p2TokenDisplay').src = getToken2;

    let playerLog = document.getElementById('dice-result');

    let trapLog = document.getElementById('trap-activate');

    let getPlayer1Token = document.querySelector('.p1Token');
    let tileP1 = document.querySelector('#tile-1');
    tileP1.appendChild(getPlayer1Token);

    let getPlayer2Token = document.querySelector('.p2Token');
    let tileP2 = document.querySelector('#tile-1');
    tileP2.appendChild(getPlayer2Token);

    function diceRoll() {
        dice = Math.floor(Math.random() * 6) + 1;

        let diceDOM = document.querySelector('.dice');
        diceDOM.src = './img/' + 'dice-' + dice + '.png';
        // ADDS ANIMATED CLASS ON CLICK
        diceDOM.classList.add('animation-target');

        // REMOVES ANIMATED CLASS AFTER 1 SECOND
        setTimeout(function () {
            document.querySelector('.dice').classList.remove('animation-target');
        }, 1000);

        return dice;
    }

    // Dice Roll
    document.getElementById('dice-roll').addEventListener('click', function () {
        players();
    });

    function players() {
        dice = diceRoll();
        if (player1 && player1Points < pointsMax) {
            if (dice === 6) {
                player1Points += dice;
                playerLog.textContent = getPlayer1 + ' rolled a ' + dice + '! ' + getPlayer1 + ' gets another turn!!';
                trapLog.textContent = '';
                console.log(getPlayer1 + ' has ' + player1Points + ' points.');

                moveToken();
            } else {
                player1Points += dice;
                playerLog.textContent = getPlayer1 + ' rolled a ' + dice;
                trapLog.textContent = '';
                console.log(getPlayer1 + ' has ' + player1Points + ' points.');
                moveToken();
                player1 = false;
                player2 = true;
            }
        } else if (player2 && player2Points < pointsMax) {
            if (dice === 6) {
                player2Points += dice;
                playerLog.textContent = getPlayer2 + ' rolled a ' + dice + '! ' + getPlayer2 + ' gets another turn!!';
                trapLog.textContent = '';
                console.log(getPlayer2 + ' has ' + player2Points + ' points.');

                moveToken();
            } else {
                player2Points += dice;
                playerLog.textContent = getPlayer2 + ' rolled a ' + dice;
                trapLog.textContent = '';
                console.log(getPlayer2 + ' has ' + player2Points + ' points.');

                moveToken();

                player1 = true;
                player2 = false;
            }
        }
        boardTraps1();
        boardTraps2();
        winner();
    }


    function moveToken() {
        if (player1Points > pointsMax) {
            document.querySelector('#tile-30').appendChild(getPlayer1Token);
        } else {
            document.querySelector('#tile-' + player1Points).appendChild(getPlayer1Token);
        }

        if (player2Points > pointsMax) {
            document.querySelector('#tile-30').appendChild(getPlayer2Token);
        } else {
            document.querySelector('#tile-' + player2Points).appendChild(getPlayer2Token);
        }
    }

    function resetGame() {
        player1Points = 1;
        player2Points = 1;

        playerLog.textContent = '';
        trapLog.textContent = '';

        moveToken();
    }

    function boardTraps1() {
        if (player1Points === 8) {
            player1Points -= 4;
            trapLog.textContent = 'A pack of wolves ambused ' + getPlayer1 + '!!' + ' Go back 4 tiles.';

            console.log(getPlayer1 + ' has ' + player1Points + ' points after ambushed.');

            moveToken();
        } else if (player1Points === 11 || player1Points === 15) {
            player1Points -= 2;

            trapLog.textContent = 'An archer ambused ' + getPlayer1 + '!!' + ' Go back 2 tiles.';

            console.log(getPlayer1 + ' has ' + player1Points + ' points after being ambused.');

            moveToken();
        } else if (player1Points === 18) {
            player1Points -= 4;

            trapLog.textContent = 'A Mounted Knight attacked ' + getPlayer1 + '!!' + ' Go back 4 tiles.';

            console.log(getPlayer1 + ' has ' + player1Points + ' points after being attacked.');

            moveToken();
        } else if (player1Points === 21) {
            player1Points -= 5;

            trapLog.textContent = 'The Night King appeared and attacked ' + getPlayer1 + '!!' + ' Go back 5 tiles.';

            console.log(getPlayer1 + ' has ' + player1Points + ' points after being attacked.');

            moveToken();
        } else if (player1Points === 25) {
            player1Points -= 8;

            trapLog.textContent = 'A Kraken appeared and attacked ' + getPlayer1 + '!!' + ' Go back 8 tiles.';

            console.log(getPlayer1 + ' has ' + player1Points + ' points after being attacked.');

            moveToken();
        } else if (player1Points === 28) {
            player1Points -= 9;

            trapLog.textContent = 'A Dragon attacked ' + getPlayer1 + '!!' + ' Go back 9 tiles.';

            console.log(getPlayer1 + ' has ' + player1Points + ' points after being attacked.');

            moveToken();
        }
    }

    function boardTraps2() {
        if (player2Points === 8) {
            player2Points -= 4;

            trapLog.textContent = 'A pack of wolves ambused ' + getPlayer2 + '!!' + ' Go back 4 tiles.';

            console.log(getPlayer2 + ' has ' + player2Points + ' points after ambushed.');

            moveToken();
        } else if (player2Points === 11 || player2Points === 15) {
            player2Points -= 2;

            trapLog.textContent = 'An archer ambused ' + getPlayer2 + '!!' + ' Go back 2 tiles.';

            console.log(getPlayer2 + ' has ' + player2Points + ' points after being ambused.');

            moveToken();
        } else if (player2Points === 18) {
            player2Points -= 4;

            trapLog.textContent = 'A Mounted Knight attacked ' + getPlayer2 + '!!' + ' Go back 4 tiles.';

            console.log(getPlayer2 + ' has ' + player2Points + ' points after being attacked.');

            moveToken();
        } else if (player2Points === 21) {
            player2Points -= 5;

            trapLog.textContent = 'The Night King appeared and attacked ' + getPlayer2 + '!!' + ' Go back 5 tiles.';

            console.log(getPlayer2 + ' has ' + player2Points + ' points after being attacked.');

            moveToken();
        } else if (player2Points === 25) {
            player2Points -= 8;

            trapLog.textContent = 'A Kraken appeared and attacked ' + getPlayer2 + '!!' + ' Go back 8 tiles.';

            console.log(getPlayer2 + ' has ' + player2Points + ' points after being attacked.');

            moveToken();
        } else if (player2Points === 28) {
            player2Points -= 9;

            trapLog.textContent = 'A Dragon attacked ' + getPlayer2 + '!!' + ' Go back 9 tiles.';

            console.log(getPlayer2 + ' has ' + player2Points + ' points after being attacked.');

            moveToken();
        }
    }

    function winner() {
        if (player1Points >= pointsMax) {
            alert(getPlayer1 + ' won!');
            sessionStorage.setItem('winnerName', getPlayer1);
            sessionStorage.setItem('winnerImg', getToken1);
            window.location.replace('finale.html');
        }
        if (player2Points >= pointsMax) {
            alert(getPlayer2 + ' won!');
            sessionStorage.setItem('winnerName', getPlayer2);
            sessionStorage.setItem('winnerImg', getToken2);
            window.location.replace('finale.html');
        }
    }
});