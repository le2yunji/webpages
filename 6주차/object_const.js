let dic = {
    present : "현재" ,
};

console.log(dic.present);
dic.present = "선물";
console.log(dic.present);


const dic2 = {
    fruit : "apple" ,
};

console.log(dic2.fruit);
dic2.country = "banana";
console.log(dic2.fruit);

// 객체를 선언할 때 주로 const 상수 객체 사용
// const 지만 객체의 프로퍼티 수정 가능
// dic의 실제 값은 0x1000과 같은 참조형 주소값인데 이걸 변경 못 함
// const dic3 의 값 수전하면 상수화 위반에 대한 오류 메시지 출력

const dic3 = {
    present : "현재",
};

dic3 = {};
console.log(dic3.present);
dic3.present = "선물";
console.log(dic3.present);