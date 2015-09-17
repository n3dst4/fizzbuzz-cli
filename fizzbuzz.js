import _ from "lodash";

export default function (start, end) {
  return _.range(start, end).map(i =>
    (i % 15 === 0)? "FizzBuzz" :
    (i % 3 === 0)? "Fizz" :
    (i % 5 === 0)? "Buzz" :
    i.toString())
}
