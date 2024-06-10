const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("포맷하시겠습니까 ? (Y / N) : " , function(a){
        if (a=='y'|| a=="Y"){
            console.log('네, 드라이브를 포맷하겠습니다.');
        }else if(a=='n' || a=='N'){
            console.log('아니오, 드라이브를 포맷하지 않겠습니다.');
        }else{
            console.log('유효하지 않은 문자입니다.');
        }
        rl.close();
});