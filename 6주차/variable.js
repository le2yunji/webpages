// var 사용 하면 안되는 이유 1. 변수 중복 선언 허용 · 2. 함수 레벨 스코프 · 3. 변수 호이스팅.
function myTest() {

    if(true){
        var x = 100 ;   //사용 범위 : 함수
    }
    console.log(x);
}
myTest();

// function myTest() {

//     if(true){
//         let x = 100 ;   //사용 범위 : 중괄호
//     }
//     console.log(x);
// }
// myTest();

// function myTest() {

//     if(true){
//         const x = 100 ;   // 값을 변결할 수 없는 상수. 사용 범위
//     }
//     console.log(x);
// }
// myTest();