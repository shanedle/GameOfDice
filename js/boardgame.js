function getPlayers() {
    let getPlayer1 = sessionStorage.getItem('player1');
    document.querySelector('.playerName1').textContent = getPlayer1;


    let getPlayer2 = sessionStorage.getItem('player2');
    document.querySelector('.playerName2').textContent = getPlayer2;
}
getPlayers();

document.getElementById('rollDice').addEventListener('click', function () {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './img/' + 'dice-' + dice + '.png';
    console.log('You rolled a ' + dice);
});