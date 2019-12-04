
function testInputs(noun, verb, memory)
{
    const finalPositionZero = 19690720 
    memory[1] = noun;
    memory[2] = verb;

    if (computeTransform(memory) === finalPositionZero)
      return true
    else
      return false
} 

function computeIfMatchesOutput()
{
    let validInput = false
    let i=0;
    let j=0
    for (i=0; i<100; i++)
    {
        for (j=0; j < 100; j++)
        {
            let initalMemory = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0]
            validInput = testInputs(i, j, initalMemory)
            if (validInput === true)
                break;
        }
        if (validInput === true)
          break
    }

    console.log("Final Result: ",  100*i + j, i, j)
}

function computeTransform(input)
{
const step = 4

let opCodePosition = 0
const inputLen = input.length;
let exitCondition = false

while (opCodePosition < inputLen)
{
    let positionOne = opCodePosition + 1
    let positionTwo = opCodePosition + 2
    let positionThree = opCodePosition + 3

    switch(input[opCodePosition])
    {
        case 1:
             //console.log("1: For Opcode position before: ",  input[positionThree], input[input[positionOne]], input[input[positionTwo]],  opCodePosition)
             input[input[positionThree]] = input[input[positionOne]] + input[input[positionTwo]]
             //console.log("1: For Opcode position ater: ",  input[positionThree])
             
         break
        case 2:
          //console.log("2: For Opcode position before: ",  input[positionThree], input[input[positionOne]], input[input[positionTwo]], opCodePosition)
          input[input[positionThree]] = input[input[positionOne]] * input[input[positionTwo]]
          //console.log("2: For Opcode position after: ",  input[positionThree])

          break
        case 99:
           //console.log("Exit out of the loop", opCodePosition)
           exitCondition = true
           break
        default:
           //console.log("Something went wrong")
           exitCondition = true
           break
    }

    if (exitCondition === true)
    {
       console.log("Exit condition is true")
       break;
    }
    opCodePosition += 4
}

    console.log ("The first position : ", input[0])
    return input[0]
}

computeIfMatchesOutput()