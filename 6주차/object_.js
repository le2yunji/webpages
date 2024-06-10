let msg = {
    name : '불꽃 남자' ,
    comment : '포기를 모르는 남자' ,
    age : 19
};

let array = [] ;
array.push(msg);

console.log(array);
console.log(msg);

// 보통 오브젝트형 데이터를 생성할 때는 new연산자를 사용하여 메모리를 할당하는 것이 정석
let msg2 = new Object();
msg2 = {
    name : '불꽃 여자',
    comment : '포기를 모르는 여자',
    age : 19
};

let array2 = new Array();
array2.push(msg2);
console.log(array2);