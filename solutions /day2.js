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
    const yourChoice = round[1];
    if (opponentChoice === 'A') {
        // opponent chose rock
        if (yourChoice === 'Y') {
            // you chose paper, win
            totalScore += 2 + 6;
        } else if (yourChoice === 'X') {
            // you chose rock, draw
            totalScore += 1 + 3;
        } else {
            // you chose scissors, lose
            totalScore += 3 + 0;
        }
    } else if (opponentChoice === 'B') {
        // opponent chose paper
        if (yourChoice === 'Y') {
            // you chose paper, draw
            totalScore += 2 + 3;
        } else if (yourChoice === 'X') {
            // you chose rock, lose
            totalScore += 1 + 0;
        } else {
            // you chose scissors, win
            totalScore += 3 + 6;
        }
    } else {
        // opponent chose scissors
        if (yourChoice === 'Y') {
            // you chose paper, lose
            totalScore += 2 + 0;
        } else if (yourChoice === 'X') {
            // you chose rock, win
            totalScore += 1 + 6;
        } else {
            // you chose scissors, draw
            totalScore += 3 + 3;
        }
    }
}

console.log(totalScore);