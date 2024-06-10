// for(key in object){ // key는 각 객체의 프로퍼티 키 }

let user = {
    id : "jamsil",
    pw : "1111",
    name : "lch",
    mobile : "010-4477-5577",
    country : "대한민국"
}

for(let info in user){
    console.log(`${info} : ${user[info]}`);
}