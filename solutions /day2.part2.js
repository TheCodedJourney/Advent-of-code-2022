const fs = require(`fs`)
const data = fs.readFileSync('./data/day2.in', 'utf-8')
const sorted = data.trim().split("\n");

let newArr = []
for (let i = 0; i < sorted.length; i++ ){
    newArr.push(sorted[i].split(' '))
}

let totalScore = 0;

for (const round of newArr) {
    const opponentChoice = round[0];
    const desiredOutcome = round[1];
    if (opponentChoice === 'A') {
        // opponent chose rock
        if (desiredOutcome === 'Y') {
            // you need to draw, choose rock
            totalScore += 1 + 3;
        } else if (desiredOutcome === 'X') {
            // you need to lose, choose scissors
            totalScore += 3 + 0;
        } else {
            // you need to win, choose paper
            totalScore += 2 + 6;
        }
    } else if (opponentChoice === 'B') {
        // opponent chose paper
        if (desiredOutcome === 'Y') {
            // you need to draw, choose paper
            totalScore += 2 + 3;
        } else if (desiredOutcome === 'X') {
            // you need to lose, choose rock
            totalScore += 1 + 0;
        } else {
            // you need to win, choose scissors
            totalScore += 3 + 6;
        }
    } else {
        // opponent chose scissors
        if (desiredOutcome === 'Y') {
            // you need to draw, choose scissors
            totalScore += 3 + 3;
        } else if (desiredOutcome === 'X') {
            // you need to lose, choose paper
            totalScore += 2 + 0;
        } else {
            // you need to win, choose rock
            totalScore += 1 + 6;
        }
    }
}

console.log(totalScore);
