// Array of characters
let charArr = [{
        "id": 1,
        "name": "Arya Stark",
        "title": ["Princess"],
        "house": "img/stark_square.svg",
        "houseToken": "img/stark.svg"
    },
    {
        "id": 2,
        "name": "Daenerys Targaryen",
        "title": ["Mother of Dragons"],
        "house": "img/targaryen_square.svg",
        "houseToken": "img/targaryen.svg"

    },
    {
        "id": 3,
        "name": "Margaery Tyrell",
        "title": ["Queen Consort"],
        "house": "img/tyrell_square.svg",
        "houseToken": "img/tyrell.svg"
    },
    {
        "id": 4,
        "name": "Maege Mormont",
        "title": ["Lady of Bear Island"],
        "house": "img/mormont_square.svg",
        "houseToken": "img/mormont.svg"
    },
    {
        "id": 5,
        "name": "Cersei Lannister",
        "title": ["Queen of the Andals and the First Men"],
        "house": "img/lannister_square.svg",
        "houseToken": "img/lannister.svg"
    },
    {
        "id": 6,
        "name": "Gregor Clegane",
        "title": ["Ser"],
        "house": "img/clegane_square.svg",
        "houseToken": "img/clegane.svg"
    },
    {
        "id": 7,
        "name": "Edmure Tully",
        "title": ["Lord of Riverrun"],
        "house": "img/tully_square.svg",
        "houseToken": "img/tully.svg"
    },
    {
        "id": 8,
        "name": "Theon Greyjoy",
        "title": ["Lord of Winterfell"],
        "house": "img/greyjoy_square.svg",
        "houseToken": "img/greyjoy.svg"
    },
    {
        "id": 9,
        "name": "Robin Arryn",
        "title": ["Lord of the Eyrie"],
        "house": "img/arryn_square.svg",
        "houseToken": "img/arryn.svg"

    },
    {
        "id": 10,
        "name": "Joffrey Baratheon",
        "title": ["Lord of the Seven Kingdoms"],
        "house": "img/baratheon_square.svg",
        "houseToken": "img/baratheon.svg"
    }
];

let number = 0;

// Card Container
let container = document.querySelector('.card-container');

// Start Game Button
let startGame = document.getElementById('startGame');

// Reset Character button
let resetChar = document.getElementById('resetChar');

// Creates cards from character array
let populateCharacters = charArr.map(character => {
    // Create a div with a card class
    let name = character.name;
    let title = character.title;
    let img = character.house;
    let token = character.houseToken;

    // Create a div with a card class
    let card = document.createElement('div')
    card.style.width = '12rem';
    card.classList.add('card', 'm-1', 'card-hover');

    // Create an image for the character card
    let cardImg = document.createElement('img');
    cardImg.setAttribute('src', img);
    cardImg.alt = name + ' ' + 'Image';
    cardImg.className = 'card-img-top';

    // Create a name for the character card
    let cardName = document.createElement('p');
    cardName.textContent = name;
    cardName.className = 'card-title';

    // Create a title for the character card
    let cardTitle = document.createElement('p');
    cardTitle.textContent = title.slice(0, 1);
    cardTitle.className = 'card-text';

    // Create div element that holds character name
    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header', 'text-center');

    // Create div element that holds character title
    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer', 'text-center');

    // Append card to container
    container.append(card);

    // Append card-header to card
    card.append(cardHeader);

    // Append card-image to card
    card.append(cardImg);

    // Append card-footer to card
    card.append(cardFooter);

    // Append card-name to card-header
    cardHeader.append(cardName);

    // Append card-title to card-footer
    cardFooter.append(cardTitle);

    // Character Selection
    card.addEventListener('click', function () {
        if (number < 2) {
            number++;
            if (number === 1) {
                sessionStorage.setItem('player' + number, name);
                sessionStorage.setItem('playerToken' + number, '' + token);

                let getName1 = sessionStorage.getItem('player1');
                document.getElementById('playerName1').textContent = getName1;

            } else {
                sessionStorage.setItem('player' + number, name);
                sessionStorage.setItem('playerToken' + number, '' + token);


                let getName2 = sessionStorage.getItem('player2');
                document.getElementById('playerName2').textContent = getName2;

                startGame.style.display = 'block';
                resetChar.style.display = 'block';
            }
        }
    });
});


// Start Game button appears after both characters are chosen
startGame.addEventListener("click", function () {
    window.location.replace('boardgame.html');

});

// Reset button that deselects and remove the characters from the session storage
resetChar.addEventListener("click", function () {
    number = 0;
    sessionStorage.clear();
    startGame.style.display = 'none';
    resetChar.style.display = 'none';
    document.getElementById('playerName1').textContent = 'Player 1';
    document.getElementById('playerName2').textContent = 'Player 2';
});