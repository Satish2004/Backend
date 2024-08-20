// const sum = (a, b)=> a+b;
// const sub =(a, b)=> a-b;
// const mul =(a, b)=> a*b;
// const PI = 3.14;
// const g = 9.8;

// const obj ={
//     // sum,
//     // sub,
//     // mul,
//     // g,
//     // PI,
//     // also jb dono sam eho to we canwrite like this

//     sum:sum,
//     sub:sub,
//     mul:mul,
//     g:g,
//     PI:PI,

// }

// module.exports = obj

// where module.exports send the value in other file which is required
//  required ---> script.js
// export is like react export;
// if i doesnt pass any export value then return by default empty obj "{}"
// because module.exports in an object
// and most  important thing that we pass anything in module.exports like string , char, int , array . obj anything ;
// ===========FROM IMPORT METHOD ====>

export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const PI = 3.14;
export const g = 9.8;
