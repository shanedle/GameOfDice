let getName = sessionStorage.getItem('winnerName');
document.getElementById('winner-name').textContent = getName;

let getToken = sessionStorage.getItem('winnerImg');
document.getElementById('winner-img').src = getToken;


document.getElementById('newGame').addEventListener('click', function () {
    window.location.replace('boardgame.html');
    sessionStorage.removeItem('winnerName');
});

document.getElementById('newCharacter').addEventListener('click', function () {
    window.location.replace('index.html');
    sessionStorage.clear();
});

(function () {
    let snowflakeCount = 12;
    let snowflake = document.getElementById('snowflakes-container');

    for (let i = 0; i < snowflakeCount; i++) {
        let div = snowflake.appendChild(document.createElement('div'));
        div.textContent = '❅';
        div.className = 'snowflake';
    }
})();