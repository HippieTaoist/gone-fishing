// Call in prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to Gone Fishing");
console.log('Where you can fish 6 hours');
console.log('Possibly bring home a trophy fish!');
let userStats = { fishingTime: 0, fishWieght: 0, fishValue: 0 };
let playGame = prompt('Type [s] to start the game!');
let totalFish = []
while (playGame === 's') {
    console.log('Your current Stats');
    console.log(userStats);


    let fishTemp = getRandomFish();

    console.log(fishTemp.wieght)
    console.log(fishTemp.value)
    console.log(fishTemp.name)
    console.log(fishTemp.time)
    const keeper = prompt('[c]atch or [r]elease or [d]isplay');

    console.clear

    if (keeper === 'c') {
        userStats.fishWieght += fishTemp.wieght;
        totalFish.push(fishTemp);
    }
    if (keeper === 'r') {
        console.log('I agree send that little minnow back!');
    }
    if (keeper === 'd') {
        console.log('Was good fishin with ya buddy.');
        console.log('Here are your stats for the day:');
        console.log(userStats);
        console.log('Here are your fish!');
        console.log(displayFish(totalFish))
    }
}

function getRandomFish() {

    adjArr = ['responsible', 'nippy', 'lavish', 'frail', 'parsimonious', 'hushed', 'gruesome', 'hungry', 'noisy', 'stormy', 'cool', 'teeny']

    adjArr2 = ['nasty', 'daffy', 'special', 'extra-large', 'cowardly', 'medical', 'lamentable', 'zonked', 'careful', 'clever', 'royal', 'filthy']
    fishArr = ['angel fish', 'lizardfish', 'alligator gar', 'bluefish', 'vermillion snapper', 'blue marlin', 'tarpon', 'cod', 'king mackerel', 'swordfish']

    const adjRand = Math.floor(Math.random() * adjArr.length);
    const adjRand2 = Math.floor(Math.random() * adjArr2.length);
    const fishRand = Math.floor(Math.random() * fishArr.length);

    const caughtFish = {};
    caughtFish.name = adjArr[adjRand] + ' ' + adjArr2[adjRand2] + ' ' + fishArr[fishRand];


    const wieghtRand = (Math.random() * 10) + 1;
    caughtFish.wieght = wieghtRand;

    console.log('Random Weight: ', wieghtRand)

    const valueRand = Math.random() * 100;
    caughtFish.value = valueRand

    const timeRand = Math.random() * 60;
    caughtFish.time = timeRand

    return caughtFish;


}

function displayFish(fishArr) {

    for (let fish of fishArr) {
        if (fish.name.includes('angel fish')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('lizardfish')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('alligator gar')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('bluefish')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('vermillion snapper')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('blue marlin')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('tarpon')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('cod')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('king mackerel')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }

        if (fish.name.includes('swordfish')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ', fish.name);
            console.log('------------------------------------------')
            console.log(',')
            console.log('<><')
            console.log(' `   Max')
            console.log('');
            console.log('Wieghting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);

            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
    }

}