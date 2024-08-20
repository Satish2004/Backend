//  index.js is a special type of a file because this contain require (import) all the js file then who want to index.js (apple, banana, orange)  require to their file

let apple = require("./apple");;
let banana = require("./banana");
let orange = require("./orange");

let  Fruits = [apple, banana, orange];

module.exports = Fruits;


// sabhi js file ko index me liye aur then send kr diye jo lena chahta hai


