// Call in prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

console.clear()

console.log("Welcome to Gone Fishing");
console.log('Where you can fish 6 hours');
console.log('Possibly bring home a trophy fish!');
console.log('!!!NO MORE THAN 10 LBS!!!')
console.log('');
let userStats = { time: 0, weight: 0, value: 0 };
let playGame = prompt('Type [s] to start the game!');

console.clear()
let totalFish = []
while (playGame === 's') {

    console.log('Your current Stats');
    // let timeStamp = timeStamp()
    // console.log(timeStamp)
    console.log('Total weight: ', Number(userStats.weight.toFixed(2)), '  |  ',
        Number((10 - userStats.weight).toFixed(2)), ' lbs left till over weight');
    console.log('Time on Water: ', userStats.time, 360 - userStats.time, ' minutes left to fish.');
    console.log('Value in Fish Bag: $', Number(userStats.value.toFixed(2)));
    console.log('');

    if (userStats.time < 360 && userStats.weight < 10) {

        let fishTemp = getRandomFish();
        let fishPasser = [];
        fishPasser.push(fishTemp);
        displayFish(fishPasser);
        console.log('NICE! You caught a ', fishTemp.name)
        console.log('This fin flipper weights ', fishTemp.weight, )
        console.log('Which between the fisha and the size is valued at $', fishTemp.value)
        console.log('And to think it took you ', fishTemp.time, 'minsc to catch it!');
        console.log('That puts your times worth at $',
            Number((fishTemp.value / fishTemp.time).toFixed(2)), ' per minute!')
        console.log('Are we going to keep it?')
        const keeper = prompt('[c]atch or [r]elease or [d]isplay');

        console.clear()

        if (keeper === 'c') {
            userStats.weight += fishTemp.weight;
            userStats.time += fishTemp.time;
            userStats.value += fishTemp.value;
            totalFish.push(fishTemp);
        }
        if (keeper === 'r') {
            console.log('I agree, send that little minnow back!');
        }
        if (keeper === 'd') {
            console.log('Was good fishin with ya buddy.');
            console.log('Here are your stats for the day:');
            console.log(userStats);
            console.log('Here are your fish!');
            console.log(displayFish(totalFish))
        }
    } else {
        while (userStats.weight >= 10) {
            console.clear();
            console.log('You are over your weight limit please select a fish to throw back. You can not be more than 10 lbs')
            console.log('Here are a list of the fish in your bag');
            for (let i = 0; i < totalFish.length; i++) {
                const fish = totalFish[i];
                console.log(i + 1, ' |  ', fish.name, ' |  ', 'Weight: ', fish.weight, ' | ', 'Time: ', Math.floor(fish.time), ' Mins | ', 'Total Value $', fish.value)
                console.log('');
            }
            console.log('Total Weight: ', userStats.weight, 'lbs | ', 'Total Time: ', Number(userStats.time.toFixed(2), ' Mins'));
            let legal = prompt('Do you wish to throw a fish back and stay within you legal parameters? [y]es | [n]o:   ');

            if (legal === 'y') {
                let throwBack = prompt('Which number fish would you like to release to stay legal?  ');
                console.log(totalFish[throwBack - 1])
                userStats.weight -= Number(totalFish[throwBack - 1].weight);
                totalFish.splice(Number(throwBack) - 1, 1);

            }
            if (legal === 'n') {
                // use this area to run a simple random test to see if the player will be picked up by the game warden.
                // if the player loses the roll of the dice, player will lose all fish | get a fine | Lose Game | GAME OVER

                let gameOver = Math.floor(Math.random() * 3);
                console.clear();
                if (gameOver % 2 === 0) {
                    console.clear();
                    console.log('GAME OVER - But you get to walk away witht he spoils');
                    console.log(' Due to your transgressions you have earned ', userStats.value);
                    console.log('');
                    console.log("Don't go spending it all in one place now!")
                } else {
                    console.clear();
                    console.log('GAME OVER - You have encountered the Game Warden.')
                    console.log('')
                    console.log('The Warden confiscates all your fish, hands you a  fine for ', userStats.value * 2, ' which is twice a much as you would have earned had you stayed legal...');
                    console.log('Was it worth it?  eh... it is just fishing and money.... who needs either anyways?')

                }
            }

        }
        if (userStats.time >= 360) {
            console.clear();
            console.log('Take it easy man you have been in the sun too long!')
            console.log('6 hours if your max. You have been out here');
            console.log('Let us call it a day, man.');
            console.log('Here are your stats for the day: ');
            console.log('Total Time:      ', userStats.time);
            console.log('Total Fish:      ', totalFish.length);
            console.log('Total Weight:    ', Number(userStats.weight.toFixed(2)));
            console.log('Total Value:      $', Number(userStats.value.toFixed(2)));
            playGame = 0
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


    caughtFish.weight = (Math.random() * 5) + 1;
    caughtFish.weight = Number(caughtFish.weight.toFixed(2));

    caughtFish.value = Math.random() * 100;
    caughtFish.value = Number(caughtFish.value.toFixed(2));

    caughtFish.time = Math.random() * 60;
    caughtFish.time = Number(caughtFish.time.toFixed(2));

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
            console.log('------------------------------------------')('------------------------------------------')
            console.log('------------------------------------------')
        }
        if (fish.name.includes('king mackerel')) {
            console.log('------------------------------------------')
            console.log('Got yourself a ' ('<><'));
            console.log(' `   Max');
            console.log('');
            console.log('weighting in at: ', fish.weight, ' lbs');
            console.log('And a market value of: $', fish.value);
            console.log('------------------------------------------');
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

    function timeStamp() {
        let today = new Date();
        let day = today.getDay();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let second = today.getSeconds();
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return console.log('As of now it is:' / n,
            weekDays[day], ' ', hour, ' ', minute, ' ', second)
    }

}