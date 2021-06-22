// Call in prompt-sync
const prompt = require('prompt-sync')();

console.log("Welcome to Gone Fishing");
console.log('Where you can fish 6 hours');
console.log('Possibly bring home a trophy fish!');
let userStats = { fishingTime: 0, fishWieght: 0, fishValue: 0 };
let playGame = prompt('Type [s] to start the game!');
while (playGame === 's') {
    console.log('Your current Stats');
    console.log(userStats);

    console.log(getRandomFish().toUpperCase())
}

function getRandomFish() {

    adjArr = ['responsible', 'nippy', 'lavish', 'frail', 'parsimonious', 'hushed', 'gruesome', 'hungry', 'noisy', 'stormy', 'cool', 'teeny']

    adjArr2 = ['nasty', 'daffy', 'special', 'extra-large', 'cowardly', 'medical', 'lamentable', 'zonked', 'careful', 'clever', 'royal', 'filthy']
    fishArr = ['angel fish', 'lizardfish', 'alligator gar', 'bluefish', 'vermillion snapper', 'blue marlin', 'tarpon', 'cod', 'king mackerel', 'swordfish']

    const adjRand = Math.floor(Math.random() * adjArr.length);
    const adjRand2 = Math.floor(Math.random() * adjArr2.length);
    const fishRand = Math.floor(Math.random() * fishArr.length);


    return adjArr[adjRand] + ' ' + adjArr2[adjRand2] + ' ' + fishArr[fishRand];


}