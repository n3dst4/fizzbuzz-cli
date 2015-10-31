@n3dst4/fizzbuzz-cli
====================

![Travis status](https://travis-ci.org/n3dst4/fizzbuzz-cli.svg)

Finally, a modular, tested, functional solution to the problem known for centuries to mathematicians as "FizzBuzz".

## Usage

First, make sure you have [NodeJS](https://nodejs.org/en/) installed.  Installing NodeJS will also install **npm**, the NodeJS Package Manager, on your system.

This program is installed with `npm install` command:

```sh
npm install @n3dst4/fizzbuzz-cli -g
```

You can then run it with:

```sh
fizzbuzz
```

## Hacking

If you want to play with the the code in this repo, fork it (using the **Fork** button at the top of the GitHub page), and clone it locally:

```bash
git clone https://github.com/<your username>/fizzbuzz-cli.git
cd fizzbuzz-cli
```

Run FizzBuzz with:

```bash
npm start
```

Run tests with

```
npm test
```

Or cut to the chase and call Mocha directly if you have it installed globally:

```
mocha
```

See [Mocha's documentation](http://mochajs.org/) for more command line options
for Mocha. Especially useful is `mocha --watch`, which will keep mocha running and re-run your tests whenever the code changes. Handy for getting an early warning when you break something.


## But whyyyyy?

This project is an exercise in cramming as many cool things into a codebase as
possible.

If you're not familiar with "FizzBuzz": it's a tiny programming exercise
intended to be given to applicants for development roles to weed out people who
can't even program at all. The problem is usually stated as:

> Write a program that prints the numbers from 1 to 100. But for multiples of
> three print “Fizz” instead of the number and for the multiples of five print
> “Buzz”. For numbers which are multiples of both three and five print
> “FizzBuzz”.

Its origins are described in [a 2007 blog post by Imran
Ghory](http://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/).
There's nothing special about FizzBuzz. It's just a trivial programming
exercise.

This "project" started out as a conversation about the best possible answer that
anyone could give in an interview when asked to "solve" FizzBuzz. The real
answer of course is the simplest one: go the whiteboard, text editor, etc. and
write

```js
for (let i = 1; i <= 100; i++) {
    console.log(
        (i % 15 === 0) ? "FizzBuzz" :
        (i % 5 === 0) ? "Buzz" :
        (i % 3 === 0) ? "Fizz" :
        i
    );
}
```

What followed was a series of ideas about what the "perfect" FizzBuzz would look
like, if simplicity and time were totally removed as factors.

### Testing: Mocha and `npm test`

Any good solution must have automated tests that can be run easily, right?

In this project that means we have a `test/` folder using
[Mocha](http://mochajs.org/), and in `package.json`, the `test` script is set up
to run `mocha`, so anyone can call `npm test` from the root folder and see the
results.

### Installability: npmjs.com

Useful software is easy to find and install. So for command line JS scripts,
that means you should be able to `npm install -g <package>` and hey presto, you
have `<package>` on your `PATH`.

So this implementation of fizzbuzz is published on [the public NPM
registry](https://www.npmjs.com/) as **@n3dst4/fizzbuzz-cli**. Try it!

```bash
npm install -g @n3dst4/fizzbuzz-cli
fizzbuzz

# output:
1
2
Fizz
...etc...
```

### Next-gen language features: ES6 and Babel

Obviously we want to be using the latest language features because they improve code legibility.

So we're using [Babel](https://babeljs.io/) to transpile ES6 syntax into
run-anywhere ES5 syntax. There's a "prepublish" hook script that runs babel on
the contents of the `src/` folder and puts the results in the `__build` folder, 
which is what is then published to NPM.

### Small, sharp tools

Good software is small and does one thing well. It follows that large systems
should be created by composing small pieces. The practical benefits include:

* New team members can get on board and be productive in a subset of the code
    very quickly

* Existing team members can switch to working on bits of code they've never seen
    before without spending a month "getting up to speed".

* Individual packages can be replaced or rewritten in a short time frame, so you
    can have continuous improvement in your code base and never need a five-year
    rewrite-everything grand mission.

To demonstrate this, the logic of returning "Fizz", "Buzz", etc. is delegated to
a separate package,
[`@n3dst4/fizzbuzzify`](https://www.npmjs.com/package/@n3dst4/fizzbuzzify)

### Functional programming and reactive functional programming: RxJS

Functional Programming is many things, but the heart of it is coding in an
expression-oriented style. That means you write expressions to say what you
mean, not a sequence of steps which you hope will have the right result.
Functional programming is a must-have tool for modern development, because it
can help you keep your code manageable.

Reactive functional programming is a technique for describing running systems in
terms of static expressions. Events are modelled as a stream, which can be
treated like you'd treat an iterable in traditional FP, with mapping, filtering
etc.

RxJS is a powerful library for RFP in JavaScript, and we're using in this crazy,
crazy FizzBuzz implementation to generate an "observable stream" of the integers
1 to 100, mapping each of those onto its corrensponding FizzBuzz result using `fizzbuzzify`, and then sending the results to `console.log`.

```js
Rx.Observable.range(1, 100).
  map(fizzbuzzify).
  subscribe(console.log);
```

### Documentation

You're reading it! Useful code has as few barriers to entry as possible (see
Installability above). So to do well, a package should have a README that
explains what it does, and has at least a minimal usage example.


### Continuous Integration: Travis CI

Every time someone on your team commits, you want to know that the software
still builds and the tests still pass.

So this code is set up to be tested on [Travis CI](https://travis-ci.org/)
automatically when anyone pushes to the GitHub repo. The badge the the top of
this page that says **build | passing** (hopefully; it might say **build |
failing** if something is wrong) is generated by Travis.


### Contribution: Git and GitHub

I like to encourage a collaborative attitude to everything. Source code should
be as open as it possibly can be. Hosting your project on GitHub makes makes the
barriers-to-entry as low as possible. That's worked really well for the
open-source world, and it can transform business tech departments too, as long
as everyone in a company can see all the repositories for that company. Got a
problem with the way another team's API sends you data? Have a quick rummage
around their source code, change it, send a pull request.  They'll either accept
it, and thank you, or they'll vet the changes and reject it - at which point
you've *still* made progress towards a solution.

**What fixes bugs**: pull requests. **What doesn't fix bugs**: moaning.

So this repository is open source, open for bug reports if you like, and
especially open for PRs! Obviously it's a big joke, but it has a real goal of
being a demo of Things I Think Are Important In Software Projects, and I'm open
to suggestions on how to reach that goal even better.
