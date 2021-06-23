// Call in prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

console.clear()

console.log("Welcome to Gone Fishing");
console.log('Where you can fish 6 hours');
console.log('Possibly bring home a trophy fish!');
console.log('!!!NO MORE THAN 10 LBS!!!')
console.log('');
let counter = 1
let userStats = { fishingTime: 0, fishweight: 0, fishValue: 0 };
let playGame = prompt('Type [s] to start the game!');

console.clear()
let totalFish = []
while (playGame === 's') {
    console.log('Your current Stats');
    console.log('Total weight: ', userStats.fishweight, 10 - userStats.fishweight, ' lbs left till over weight');
    console.log('Time on Water: ', userStats.fishingTime, 360 - userStats.fishingTime, ' minutes left to fish.');
    console.log('Value in Fish Bag: ', userStats.fishValue);
    console.log('')
    if (userStats.fishingTime < 360 && userStats.fishweight < 10) {

        let fishTemp = getRandomFish();

        console.log(fishTemp.weight)
        console.log(fishTemp.value)
        console.log(fishTemp.name)
        console.log(fishTemp.time)
        const keeper = prompt('[c]atch or [r]elease or [d]isplay');

        console.clear()

        if (keeper === 'c') {
            userStats.fishweight += fishTemp.weight;
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
    } else {
        if (userStats.fishweight >= 10) {
            console.clear();
            console.log('You are over your weight limit please select a fish to throw back. You can not be more than 10 lbs')
            console.log('Here are a list of the fish in your bag');
            for (let i = 0; i < totalFish.length; i++) {
                const fish = totalFish[i];
                console.log(i + 1, ' |  ', fish.name, ' |  ', fish.weight, ' | ', fish.time, ' | ', fish.value)
                console.log('');
            }
            let legal = prompt('Do you wish to throw a fish back and stay within you legal parameters? [y]es | [n]o:   ');
            if (legal === 'y') {
                let throwBack = prompt('Which number fish would you like to release to stay legal?  ');
                totalFish.splice(Number(throwBack) - 1, 1);
            }
            if (legal === 'n') {
                // use this area to run a simple random test to see if the player will be picked up by the game warden.
                // if the player loses the roll of the dice, player will lose all fish | get a fine | Lose Game | GAME OVER
            }

        }
        if (userStats.fishingTime >= 360) {
            console.log('Take it easy man you have been in the sun too long!')
        }
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


    const weightRand = (Math.random() * 10) + 1;
    caughtFish.weight = weightRand;

    console.log('Random Weight: ', weightRand)

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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
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
            console.log('weighting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);

            console.log('------------------------------------------')
            console.log('------------------------------------------')
        }
    }

}