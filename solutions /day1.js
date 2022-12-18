const fs = require(`fs`)
const data = fs.readFileSync('./data/day1.in', 'utf-8')
const dataPoint = data.trim().split("\n")

let splitPoint = []
for(let i = 0; i < dataPoint.length; i++){
    if (+dataPoint[i] === 0 ){
        splitPoint.push(i)
    }
}

let elfArrays = []
for(let i = 0; i < splitPoint.length; i++ ){
    elfArrays.push(dataPoint.slice(splitPoint[i], splitPoint[i+1]))
    elfArrays[i].shift()
}

let sumArray = []
for(let i = 0; i < elfArrays.length; i++){
    let tempArray = elfArrays[i]
    sumArray.push(tempArray.reduce((partialSum, a) => partialSum + +a, 0))
}

const highest = [...sumArray].sort((a, b) => b-a)

console.log(highest[0], "<--- most calorie elf")
console.log(highest[0] + highest[1] + highest[2], "<--- top 3 calorie elves values")