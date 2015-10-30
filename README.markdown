@n3dst4/fizzbuzz-cli
====================

![Travis status](https://travis-ci.org/n3dst4/fizzbuzz-cli.svg)

Finally, a modular, tested, functional solution to the problem known for centuries to mathematicians as &quot;FizzBuzz&quot;

## Usage

Global install, from the command line:

```bash
npm install @n3dst4/fizzbuzz-cli -g
fizzbuzz
```

Local development:

```bash
git clone https://github.com/n3dst4/fizzbuzz-cli.git
cd fizzbuzz-cli
npm start
```

## Hacking

Run tests with

```
npm test
```

or cut to the chase and

```
mocha
```

See [Mocha's documentation](http://mochajs.org/) for more command line options for Mocha.


## For the love of gosh, why?

This package is an exercise in cramming as many good practices into a codebase
as possible. Tests, documentation, modularised code, transpilation, it's all
here. See also
[n3dst4/fizzbuzzify](https://github.com/n3dst4/fizzbuzzify), which is a
micropackage implementing the core fizzbuzz login.
