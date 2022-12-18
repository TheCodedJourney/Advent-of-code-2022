const fs = require(`fs`)
const data = fs.readFileSync('./data/day3.in', 'utf-8')
const rucksacks = data.trim().split("\n");

let totalPriority = 0;

for (const rucksack of rucksacks) {
  const [compartment1, compartment2] = [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ];

  for (const c of compartment1) {
    if (compartment2.includes(c)) {
      totalPriority += c >= 'a' && c <= 'z' ? c.charCodeAt(0) - 'a'.charCodeAt(0) + 1 : c.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
      break;
    }
  }
}

console.log(totalPriority); // prints the sum of the priorities of the item types that appear in both compartments of each rucksack