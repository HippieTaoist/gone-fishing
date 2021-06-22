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


}