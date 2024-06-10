//데이터를 객체에 직접 대입
let dic = new Object();

dic.boy = "소년" ;
dic.girl = "소녀" ;
dic.friend = "친구" ;

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

//객체 리터럴
let dic2 = { 
    boy2 : "소년",
    girl2 : "소녀",
    friend2 : "친구"
} ;

console.log(dic2.boy2);
console.log(dic2.girl2);
console.log(dic2.friend2);

// 객체의 프로퍼티 동적 추가
// 객체.추가할 프로퍼티 이름 = 추가할 값 ;
dic.apple = "사과"
dic.ten = 10 ; 
console.log(dic.apple);
console.log(dic.ten);

// // 객체의 프로퍼티 동적 삭제
// delet 객체.삭제할 프로퍼티 이름 = 추가할 값 ;
delete dic.girl;

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
