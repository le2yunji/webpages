var savedUser = '이은성' ;
function account() {
    console.log('반갑습니다. '+ savedUser +'님');
    savedUser = '이윤지';  // 함수 내에서 전역변수 값 수정 가능
}
account();
console.log('또 오셨네요. '+ savedUser +'님');
