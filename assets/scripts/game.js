let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,
    
    // Type of cards, with respective techs
    techs: ['bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'],  
    
    cards: null,
    
    setCard: function(id){

        let card = this.cards.filter(card => card.id === id)[0];
        console.log(card)
        if(card.flipped || this.lockMode){
            return false
        }

        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        }else{
            this.secondCard = card;
            this.lockMode = true;
            this.secondCard.flipped = true;
            return true;
        }

    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver(){

        return this.cards.filter(card => !card.flipped).length == 0;

    },


        // The function who create cards techs
    createCardsFromTechs: function (){

        // Every card beggin empty
        this.cards = [];

        // For every var tech inside techs array, add to card the product of the function, create pair
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech))
        })

        //Return the cards and respective pairs
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },

    // Create the pair of every type of cards techs
    createPairFromTech: function (tech){

        // return an array with object and propieties
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },

    // Create the id for every card, this way, evening the cards pair was the "same", actully it will was not
    createIdWithTech: function (tech){

        // Create an random number for id
        return tech + parseInt(Math.random() * 1000);
    }, 

    shuffleCards: function (cards){
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0){
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
    
    
    
        }
    },
}