#!/usr/bin/env node
/*eslint no-console: 0*/
import fizzbuzzify from "@n3dst4/fizzbuzzify";

function *range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const step = (end > start) ? 1 : -1;
  for (let i = start; i !== end; i += step )  {
    yield i;
  }
}

export default function fizzBuzz () {
  for (let i of range(1, 101)) {
    console.log(fizzbuzzify(i));
  }
}

if ( ! module.parent) {
  fizzBuzz();
}
