'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {

    let length = arr.length
    
    let valuesPositive = 0
    let valuesNegative = 0
    let zeroValues = 0
    
    for(let i= 0; i < length; i++)
    if (arr[i] < 0){
        valuesNegative++
    } else if (arr[i] > 0){
        valuesPositive++
    } else {
        zeroValues++
    }
    
    console.log((valuesPositive / length).toFixed(6))
    console.log((valuesNegative / length).toFixed(6))
    console.log((zeroValues / length).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
