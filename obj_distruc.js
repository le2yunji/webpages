// 배열 뿐만 아니라 객체도 비구조화 할당 가능

let user = {
    id : 'jamsuham',
    pw : '1234',
    name : "잠수함",
    age : 30
};

let {id, pw, name, age} = user;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);

// 간소화

let {id2, pw2, name2, age2} = {id2 : 'jamsuham', pw2 : '1234', name2 : '잠수함', age2 : 30 };

console.log(id2);
console.log(pw2);
console.log(name2);
console.log(age2);

// 객체에도 기본값 설정 가능
let user2 = {
    name3 : '잠수함',
    age3 : 20
};

let {id3 = 'guest', pw3='1010', name3, age3} = user2; 
console.log(id3);
console.log(pw3);
console.log(name3);
console.log(age3);

// 객체에도 나머지 패턴 사용
let user3 = {
    id4 : 'jamsuham',
    pw4 : '1234',
    name4 : "잠수함",
    age4: 30
};

let {id4, ...rest} = user3 ; 

console.log(id4);
console.log(rest.pw4);
console.log(rest.name4);
console.log(rest.age4);
