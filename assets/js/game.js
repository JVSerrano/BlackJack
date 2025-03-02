// C = Trebol
// D = Diamante
// H = Corazones
// S = Espadas

let deck = []
const types = ['C', 'D', 'H', 'S']
const specials = ['A', 'J', 'Q', 'K']
let playerPoints = 0
let iaPoints = 0


let btnLose = document.getElementById('btnLose')
let markers = document.querySelectorAll('small')
let divPlayerCards = document.getElementById('playerCards')
let divIaCards = document.getElementById('iaCards')
let btnStop = document.getElementById('btnStop')


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

const requestCard = () => {

    if (deck.length === 0) {
        alert('No quedan cartas en la baraja')
    }
    let card = deck.pop()

    console.log(card)

    console.log(deck)

    return card

}

requestCard()

const cardValue = (card) => {

    let value = card.substring(0, card.length - 1)

    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : parseInt(value)

    //    if(isNaN(value)){
    //         points = points = (value === 'A') ? 11 : 10
    //    }else{
    //     points = parseInt(value)
    //    }

}

const iaTurn = (minimumPoints) => {

     do {

        let card = requestCard()

        iaPoints += cardValue(card)
    
        markers[1].innerText = iaPoints
    
        const imgCard = document.createElement('img')
    
        imgCard.src = `assets/cartas/${card}.png`
        imgCard.classList.add('card')
    
    
        divIaCards.append(imgCard)

        if(minimumPoints > 21){
            break
        }

     } while (iaPoints < minimumPoints && minimumPoints <= 21)

}


btnLose.addEventListener('click', () => {

    let card = requestCard()

    playerPoints += cardValue(card)

    markers[0].innerText = playerPoints

    const imgCard = document.createElement('img')

    imgCard.src = `assets/cartas/${card}.png`
    imgCard.classList.add('card')


    divPlayerCards.append(imgCard)

    if (playerPoints > 21) {
        console.warn('Jugador perdedor')
        btnLose.disabled = true
        iaTurn(playerPoints)
    } else if (playerPoints === 21) {
        console.warn('Ganaste campeon')
    }

})

btnStop.addEventListener('click', ()=>{

    btnStop.disabled = true
    btnLose.disabled = true
    iaTurn(playerPoints)

})
