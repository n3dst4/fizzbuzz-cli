# Fizzbuzz

![Travis status](https://travis-ci.org/n3dst4/fizzbuzz.svg)

FInally! An implementation of the problem known for centuries to mathematicians as "FizzBuzz".

## Usage

Global install, from the command line:

```bash
npm install @n3dst4/fizzbuzz -g
fizzbuzz
```

Local development:

```bash
git clone https://github.com/n3dst4/fizzbuzz.git
cd fizzbuzz
npm start
```

Import as a module:

```js
import fizzbuzz from "@n3dst4/fizzbuzz";
console.log(fizzbuzz(1, 101).join("\n"));
```

NOTE that this module uses ES6 features and will not work in vanilla Node.JS. You will probably need to use [BabelJS](http://babeljs.io) in some way.

## Hacking

Run tests with

```
npm test
```

or

```
mocha
```

See [Mocha's documentation](http://mochajs.org/) for more command line options for Mocha.
