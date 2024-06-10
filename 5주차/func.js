const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
savedUser = "이윤지" ;

// userId가 savedUser 와 같으면 true, 다르면 false 
function account(userId) {
    
    if(userId == savedUser){
       return true;
    }else{
        return false;
    }
}


rl.question( "이름을 입력하세요 : " , function(userId){  // 사용자가 입력하는 값을 userId 
    if(account(userId)){
        console.log('반갑습니다.' + userId + '님');
    }else{
        console.log('로그인에 실패했습니다.');
    } 
    rl.close();
})