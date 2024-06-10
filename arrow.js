// 화살표 함수의 기본 형식
let plus = (a, b) => {
    return a+b ;
}
let result = plus(10, 20) ;
console.log('두 수의 합 : ', result ); 


// 화살표 함수 구현부 내용이 return 문 밖에 없는 경우, 중괄호와 return문 생략가능 
let sum = (c, d) => c+d ;
let result2 = sum(10, 20) ;
console.log('두 수의 합 : ', result2 ); 

// 화살표 함수의 매개변수가 하나밖에 없다면 매개변수를 감싸는 괄호 생략 가능
let sum2 = e => e+1 ;
let result3 = sum2(10);
console.log('값의 1증가 : ' + result3);

//화살표 함수의 매개변수가 하나도 없는 경우에는 괄호를 비워놓으면 됨. 괄호 생략 불가.
let plus2 = () => '플러스' ;
let result4 = plus2() ;
console.log('A ' + result4) ;