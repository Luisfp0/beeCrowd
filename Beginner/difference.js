/*Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

Input
The input file contains 4 integer values.

Output
Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal. */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift()
var B = lines.shift()
var C = lines.shift()
var D = lines.shift()

var DIFERENCA = A * B - C * D

console.log('DIFERENCA = ' + DIFERENCA)