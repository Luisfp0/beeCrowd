/*In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point. */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var object1 = lines.shift().split(' ')
var object2 = lines.shift().split(' ')

var codeObject1 = object1.shift()
var unitysObject1 = object1.shift()
var priceObject1 = object1.shift()

var codeObject2 = object2.shift()
var unitysObject2 = object2.shift()
var priceObject2 = object2.shift()

var price1 = unitysObject1 * priceObject1
var price2 = unitysObject2 * priceObject2

var total = price1 + price2

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))