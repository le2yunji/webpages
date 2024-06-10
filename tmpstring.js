const name = '이창현' ;
const age = 25 ;
const height = 178.5 ;

console.log("My name is " + name + ", " + "My age is " + age + ", " + "My height is " + height + ".");
console.log("My name is " + name + "\n" + "My age is " + age + "\n" + "My height is " + height + ".");

console.log(`My name is ${name}, My age is ${age}, My height is ${height}.`)  // 가독성있음. 권장              
console.log(`My name is ${name}, 
My age is ${age},  
My height is ${height}.`)  // 백틱을 사용하면 규칙에 대한 구분 필요 없음.                            