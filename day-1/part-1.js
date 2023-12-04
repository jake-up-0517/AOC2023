import { readFileSync } from 'fs';

// Read input file, convert to string, split into array by new line
const input = readFileSync('./day-1/input.txt', 'utf8');
const array = input.split('\n')

// loop thru array, remove all non-numbers from each string, concat first and last num, convert to number and push to results array

const result = [];

array.forEach((str) => {
  let num;
  str = str.replace(/\D/g,'')
  if (str.length === 1) {
    num = str[0] + str[0]
    result.push(Number(num))
  } else if (str.length === 2) {
    num = str[0] + str[1]
    result.push(Number(num))
  } else {
    num = str[0] + str[str.length - 1]
    result.push(Number(num))
  }
})

// use reduce methode to sum all numbers in results array

const sum = result.reduce((a, b) => a + b, 0);
console.log(sum)