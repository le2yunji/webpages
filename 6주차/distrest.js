// 나머지 요소들은 모아서 저장하고 싶다면 '...'나머지 패턴을 사용
const [a, b, ...rest] = ['c++' , 'javascript', 'python', 'react', 'c#'];
console.log(a);
console.log(b);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);