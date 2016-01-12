'use strict';

// MODULES //

var test = require( 'tape' );
var floor = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof floor === 'function', 'main export is a function' );
	t.end();
});

test( 'the function returns the largest integer less than or equal to a given number', function test( t ) {
	t.equal( floor( -4.2 ), -5, 'equals -5' );
	t.equal( floor( 9.99999 ), 9, 'equals 9' );
	t.equal( floor( 0 ), 0, 'equals 0' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = floor( NaN );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});
