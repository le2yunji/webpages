// 구구단 전체를 출력하는 코드 기반으로 2단에서 5단까지만 출력. 6단부터는 출력되지 않도록 반복문 빠져나감.
let dan = 2 ; 
outside : while(dan < 10) {  //dan 이 10보다 작을 때까지 반복
    let num = 1;  
    while(num < 10) { // num이 10보다 작을 때까지 반복
        if(dan == 6 && num == 1)  // dan이 6이고, num이 1이면 반복문 빠져나감.
        break outside; // label 이름이 붙은 곳으로 빠져나감
        console.log(dan + "*" + num + "=" + dan*num ) ; 
        num++ ;
    }
    dan++;
}