// 기본적으로 객체의 구성요소는 프롶퍼티와 메소드
// 메소드란 객체 내부에서 정의된 멤버 함수

// 프로퍼티 이름 : function(매개변수) {구현 내용};

const unit = {
    attack : function(weapon) {
        return `${weapon}으로 공격한다.`;
    }
}

console.log(unit.attack("주먹"));
console.log(unit.attack("총"));

// function 키워드를 생략한 축약 표현도 가능
const unit2 = {
attack(weapon) {
    return `${weapon}으로 공격한다.`;
}}

