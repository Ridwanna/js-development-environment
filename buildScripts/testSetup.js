// this file isn't transpied, so must use commonJS or ES5

// Register abel to transpile before test run
require('babel-register')();

//Disable webpack features tha Mocha doesn't understand
require.extensions['.css'] = function() {};
