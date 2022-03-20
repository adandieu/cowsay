
var cowsay = require('cowsay');
const { name } = require('./information');
const { campus } = require('./information');

console.log (cowsay.say({
    text : "I'm " + " " + (name) + " " + "de" + " " + (campus),
    e : "oO",
    T : "U "
}));



