let userName = '이창현'; // 전역변수
let userPW = '1111' // 전역변수

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    let savedName = '이창현';
    let savedPw = '1111' ; 

    if(userId == savedName)
    {
        if(userpw == savedPw){
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
// 매개변수를 1개만 입력하여 account(userName); 라고 호출해도 javascript 에서는 오류가 발생하지 않음. 
account(userName); 