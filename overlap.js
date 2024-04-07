const readline = require('readline'); 
// 보통 브라우저 기반에서의 자바스크립트는 사용자로부터 데이터를 입력 받을 때 prompt() 함수 사용. 
// Node.js 기반의 독립적인 자바스크립트는 js 내장 모듈 사용

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

    r1.question('점수를 입력하세요. : ', function(score){
    if(score >= 60 && score <= 100){
        if(score >= 90){
            console.log('장학대상입니다.');
        }else{
            console.log('합격입니다.');
        }
    }
    else{
        if(score >= 0 && score < 60){
            console.log('불합격입니다.');
        }
        else{
            console.log('값이 유효하지 않습니다.');
        }
    }
        rl.close();
    });