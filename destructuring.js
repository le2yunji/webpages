const color = ['red', 'green', 'blue'] ;
let r = color[0];
let g = color[1];
let b = color[2];

console.log(r); 
console.log(g); 
console.log(b);

let [r1, g1, b1] = color ;
console.log(r1); 
console.log(g1); 
console.log(b1);

let user = {
    id : 'jamsuham',
    pw : '1234',
    name : '잠수함',
    age : 30,
} 

let id = user.id;
let pw = user.pw;
let name = user.name;
let age = user.age;

console.log(id);
console.log (pw);
console.log (name);
console.log (age);