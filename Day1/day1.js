const path = require("path");

function readFile(fileName) {
    const fs = require("fs");
    return fs.readFileSync(fileName, 'utf8');
}

function getLine(textBuffer) {
    const arr = textBuffer.split('\n').filter(line => {
        return line.length > 0;
    });

    return arr;
}

function calculateFuelPerModule(massString) {
    const mass = parseInt(massString)
    const fuel = Math.floor(mass/3) - 2
    return fuel
}

 function calculateReducedFuelPerModule(massString) {
    let mass = parseInt(massString)
    let fuel = 0
    
    do
    {
        tempFuel = Math.floor(mass/3) - 2
        fuel += tempFuel
        mass = tempFuel
    }while(mass/3 > 2)
    
    return fuel;
}
 

console.log(path.join(__dirname, "input.txt"))

const textFileBuffer = readFile(path.join(__dirname, "input.txt"));
const lines = getLine(textFileBuffer);
const totalFuel = lines.reduce(function(sum, line) {
    return sum + calculateFuelPerModule(line);
  }, 0);

 const totalAugmentedFuel = lines.reduce(function(sum, moduleFuel)
{
    return sum + calculateReducedFuelPerModule(moduleFuel);
  }, 0);

console.log("Total Fuel: ", totalFuel)
console.log("Augmented Fuel : ", totalAugmentedFuel)


