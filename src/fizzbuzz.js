#!/usr/bin/env node
/*eslint no-console: 0*/
import fizzbuzzify from "fizzbuzzify";
import Rx from "rx";

export default function fizzBuzz () {
  Rx.Observable.range(1, 100).
    map(fizzbuzzify).
    subscribe(console.log);
}

// only run the above function if we're the main script
if ( ! module.parent) {
  fizzBuzz();
}
