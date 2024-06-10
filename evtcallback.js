const coffee = function(){
    console.log("주문하신 아메리카노 나왔습니다.");
}
setTimeout(coffee, 5000);  // coffee 콜백함수. 일정 시간이 지난 후에 함수를 실행

// coffee 함수를 5초 (5000 밀리초) 후에 실행하도록 스케줄링