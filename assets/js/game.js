// C = Trebol
// D = Diamante
// H = Corazones
// S = Espadas

let deck = []
const types = ['C', 'D', 'H', 'S']
const specials = ['A', 'J', 'Q', 'K']

const createDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type)
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type)
        }
    }
    // Barajar las cartas
    deck = _.shuffle(deck)

    console.log(deck)

   
}

createDeck()

const requestCard = ()=>{

    if(deck.length === 0){
        alert('No quedan cartas en la baraja')
    }
        let card = deck.pop()
       
        console.log(card)

    console.log(deck)

    return card

}

requestCard()

const cardValue = (card)=>{

    let value = card.substring(0,card.length - 1)
    
    return (isNaN(value)) ? 
            (value === 'A') ? 11 : 10
            : parseInt(value)

//    if(isNaN(value)){
//         points = points = (value === 'A') ? 11 : 10
//    }else{
//     points = parseInt(value)
//    }


}


console.log(cardValue(requestCard()))