// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGift(gifts) {
    for (let i = 0; i < 3; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts
}

function writeCards(names, eventName) {
    const thanksMessages = []
    for (let i = 0; i < names.length; i++) {
        thanksMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return thanksMessages
}

function countdown(startingNum) {
    for (let i = startingNum; i >= 0; i--){
        console.log(i)
    }
}

wrapGifts(gifts)


