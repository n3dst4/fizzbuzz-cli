/*eslint no-console: 0 */
require("babel/register");
var fizzbuzz = require("./fizzbuzz");
console.log(fizzbuzz(1, 101).join("\n"));
