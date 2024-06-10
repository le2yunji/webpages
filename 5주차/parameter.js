function account(userId) {
    var savedUser = '이은성' ;
    if(userId == savedUser) {
        console.log('반갑습니다. ' + userId + '님' );
    }else{
        console.log('로그인 실패했습니다.');
    }
}
account('이은성');  // 외부에서 함수에 특정 데이터 전달. 함수 호출 시 매개변수 이용하면 임의이 데이터 함수 안에 전달 가능