#!/usr/bin/env node
/*eslint no-console: 0*/
import fizzbuzzify from "@n3dst4/fizzbuzzify";
import Rx from "rx";

export default function fizzBuzz () {
  Rx.Observable.range(1, 100).
    map(fizzbuzzify).
    subscribe(console.log);
}

if ( ! module.parent) {
  fizzBuzz();
}
