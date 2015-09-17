/*global describe, it*/

import chai from "chai";
import fizzbuzz from "../fizzbuzz";

const expect = chai.expect;

describe("fizzbuzz", function () {
  it("should print FizzBuzz for 0", function () {
    expect(fizzbuzz(0, 1)).to.deep.equal(["FizzBuzz"]);
  })
  it("should print 1 for 1", function () {
    expect(fizzbuzz(1, 2)).to.deep.equal(["1"]);
  })
  it("should do the first fifteen right", function () {
    expect(fizzbuzz(1, 16)).to.deep.equal(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  })
  it("should do a high number", function () {
    expect(fizzbuzz(3000000, 3000001)).to.deep.equal(["FizzBuzz"]);
  })
});
