function readFile(fileName) {
    const fs = require("fs");
    const path = require("path");
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
    console.log("Mass : ", mass)
    const fuel = Math.floor(mass/3) - 2
    console.log(fuel) 
    return fuel;
}


const textFileBuffer = readFile("./input.txt");
const lines = getLine(textFileBuffer);
const totalFuel = lines.reduce(function(sum, line) {
    return sum + calculateFuelPerModule(line);
  }, 0);
console.log("Total Fuel: ", totalFuel)


