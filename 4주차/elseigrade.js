const readline =  require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('점수를 입력하세요. : ' , function(score){
    if ( 100>= score && score >= 91 ){
        console.log('A학점');
    }
    else if (90>= score && score >= 81 ){
        console.log('B학점');
    }
    else if (80>= score && score  >= 71 ){
        console.log('C학점');
    }
    else if (70>= score && score >= 61 ){
        console.log('D학점');
    } else {
        console.log('범위를 벗어났습니다.')
    }
    rl.close();

});