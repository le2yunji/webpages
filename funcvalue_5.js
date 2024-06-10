let userName = '이창현'; // 전역변수
let userPW = '1111' // 전역변수

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    let savedName = '이창현';
    let savedPw = '1111' ; 

    userpw = userpw || '1111' ;

    if(userId == savedName)
    {
        if(userpw == savedPw){
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}

account(userName, userPW); 