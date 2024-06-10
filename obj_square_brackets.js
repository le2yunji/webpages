let kid = "아이";

let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구",
    kid,   // 객체의 프로퍼티 키와 값의 이름이 같은 경우 구문 단축 가능
};

console.log(dic['boy']);
console.log(dic['girl']);
console.log(dic['friend']);
console.log(dic.kid);

