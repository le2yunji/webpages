// readline 모듈을 불러옵니다.
// Node.js의 readline 모듈을 불러옵니다. 이 모듈은 터미널과 상호작용하여 사용자 입력을 처리하는데 사용됩니다.
const readline = require("readline");

// readline 인터페이스를 생성합니다.
//readline 모듈의 createInterface 함수를 사용하여 readline 인터페이스 객체 rl을 생성합니다. 이 인터페이스는 표준 입력과 출력을 관리합니다.
const rl = readline.createInterface({
    input: process.stdin, // 표준 입력(콘솔 입력)을 읽기 위해 process.stdin을 사용합니다.
    output: process.stdout, // 표준 출력(콘솔 출력)을 위해 process.stdout을 사용합니다.
});

// rl.question 함수를 사용하여 사용자로부터 입력을 받습니다.
rl.question("단수를 입력하세요 : ", function(dan) {
    // 입력된 dan 변수를 기반으로 구구단을 출력합니다.
    for (let i = 1; i < 10; i++) {
        // dan과 i를 곱한 결과를 계산하여 출력합니다.
        console.log(dan + " * " + i + " = " + dan * i);
    }
    // 입력을 마친 후 readline 인터페이스를 종료합니다.
    rl.close();
});
