/*eslint no-console: 0*/
/*global describe, it*/

import chai from "chai";
import {exec} from 'child_process';

const expect = chai.expect;

const resultPromise = new Promise(function (resolve, reject) {
  exec("node __build/fizzbuzz.js", function (error, stdout, stderr) {
    if (error !== null) {
      console.log(`exec error while running script: ${error}`);
      process.exit(1);
    }

    const output = stdout.toString("utf-8");
    const tokens = output.split("\n");
    resolve(tokens);
  });
});

describe("fizzbuzz", function () {
  it("should do the first fifteen correctly", function () {
    return resultPromise.then(result => {
      expect(result.slice(1, 16)).to.deep.equal([
        "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11",
        "Fizz", "13", "14", "FizzBuzz"]);
    });
  })

  it("should do the last fifteen correctly", function () {
    return resultPromise.then(result => {
      expect(result.slice(86, 101)).to.deep.equal([
        "86", "Fizz", "88", "89", "FizzBuzz", "91", "92", "Fizz", "94", "Buzz",
        "Fizz", "97", "98", "Fizz", "Buzz"]);
    });
  })
});
