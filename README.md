Floor
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Rounds a numeric value toward negative infinity.


## Installation

``` bash
$ npm install math-floor
```


## Usage

``` javascript
var floor = require( 'math-floor' );
```

#### floor( x )

Rounds a `numeric` value toward negative infinity.

``` javascript
var val = floor( -4.2 );
// returns -5

val = floor( 9.99999 );
// returns 9

val = floor( 0 );
// returns 0
```


## Examples

``` javascript
var floor = require( 'math-floor' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	console.log( 'Value: %d. Floored: %d.', x, floor( x ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-floor.svg
[npm-url]: https://npmjs.org/package/math-floor

[build-image]: http://img.shields.io/travis/math-io/floor/master.svg
[build-url]: https://travis-ci.org/math-io/floor

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/floor/master.svg
[coverage-url]: https://codecov.io/github/math-io/floor?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/floor.svg
[dependencies-url]: https://david-dm.org/math-io/floor

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/floor.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/floor

[github-issues-image]: http://img.shields.io/github/issues/math-io/floor.svg
[github-issues-url]: https://github.com/math-io/floor/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
