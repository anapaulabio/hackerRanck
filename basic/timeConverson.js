'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
 let hour = parseInt(s.slice(0, 2));
  let str = s.slice(2, 8);

  if (s.includes("AM")){
    if (hour == 12) {
      hour = "00";
      
    } else {
      hour = s.slice(0, 2)
    }
    return hour+str
        
  } else if (s.includes("PM")){
    if (hour == 12) {
      hour = 12;
      
    } else {
      hour += 12
    }
    return hour+str
        
  } else {
    if (hour > 12 && hour < 22) {
        hour -= 12
        return '0'+hour+str+'AM'
    } else if (hour > 12){
        hour -= 12
        return hour+str+'AM'
    } else {
        return hour+str
    }
    
  }  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
