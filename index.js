const cardsContainer = document.querySelector('.cards-container');

const createCard = (character) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="left">
            <img id="logo" src="${character.image}" alt="${character.name}">
        </div>
        <div class="right">
            <div class="upper">
                <h1 id="name">${character.name}</h1>
                <div class="status-container">
                    <div class="circle ${character.status.toLowerCase()}"></div>
                    <p id="status">${character.status}</p>
                </div>
            </div>
            <div class="middle">
                <p class="gray">Last known location:</p>
                <p id="location">${character.location.name}</p>
            </div>
            <div class="bottom">
                <p class="gray">First seen in</p>
                <p id="firstSeen">${character.origin.name}</p>
            </div>
        </div>
    `;

    cardsContainer.appendChild(card);
};

const fetchApiData = async () => {
    for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 827);
        const data = await fetch("https://rickandmortyapi.com/api/character/" + random);
        const character = await data.json();
        createCard(character);
    }
};

fetchApiData();
