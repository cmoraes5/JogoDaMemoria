// Cards front and back
const FRONT = "card_front";
const BACK = "card_back";

// Type of cards, with respective techs
let techs = ['bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'];

let cards = null;

// Executing the startGame
startGame()

// When game started, cards receive createCards function, then, this cards were shuffle
function startGame(){
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);
    console.log(cards);
}


function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];



    }
}

// Executing the function for Create the cards
createCardsFromTechs(techs);

// The function who create cards techs
function createCardsFromTechs(techs){

    // Every card beggin empty
    let cards = [];

    // For every var tech inside techs array, add to card the product of the function, create pair
    for(let tech of techs){
        cards.push(createPairFromTech(tech))
    }

    //Return the cards and respective pairs
    return cards.flatMap(pair => pair);
}

// Create the pair of every type of cards techs
function createPairFromTech(tech){

    // return an array with object and propieties
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}

// Create the id for every card, this way, evening the cards pair was the "same", actully it will was not
function createIdWithTech(tech){

    // Create an random number for id
    return tech + parseInt(Math.random() * 1000);
}