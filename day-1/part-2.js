import { readFileSync } from 'fs';

// Read input file, convert to string, split into array by new line
const input = readFileSync('./day-1/input.txt', 'utf8');
const array = input.split('\n')


// array of possible strings to match and obj to replace strings with numbers
const possibleStrs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const matches = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9'
};

// function to replace all spelled out numbers in a string with numbers
function replaceAll(str,mapObj){
  const re = new RegExp(Object.keys(mapObj).join("|"),"gi");
  return str.replace(re, function(matched){
      return mapObj[matched.toLowerCase()];
  });
}

const nums = [];

//loop thru array, find first and last, concat, replace all spelled out numbers with numbers, convert to number and push to nums array
array.forEach((str) => {
  let first, last, num;
  possibleStrs.forEach((possibleStr) => {
    if (str.includes(possibleStr)) {
      if (str.indexOf(possibleStr) < str.indexOf(first) || first === undefined) {
        first = possibleStr;
      }
      if (str.lastIndexOf(possibleStr) > str.lastIndexOf(last) || last === undefined) {
        last = possibleStr;
      }
    }
  })
  if (last === undefined) {
    last = first;
  }
  num = first + last;
  nums.push(Number(replaceAll(num, matches)))
})

// use reduce methode to sum all numbers in nums array
const sum = nums.reduce((a, b) => a + b);
console.log(sum)