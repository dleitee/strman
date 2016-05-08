require('babel-core/register');

/*
var strman = require('./src/strman');
var safe = strman.safeTruncate;

console.log(safe('foo bar', 3, '.'));
*/
var strman = require('./src/strman');
var hexEncode = strman.hexEncode;
console.log(hexEncode('strman'));
