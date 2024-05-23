/* 01_function-declaration (함수 선언문) */

// 함수 선언문에서는 함수의 이름을 생략할 수 없다.
function hello(name) {
    return `${name}님 안녕하세요!`;
}

// 함수 호출
console.log(hello('홍길동'));

/* 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 식별자를 암묵적으로 생성하고, 
거기에 함수 객체를 할당한다.
즉, 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다. 

var hello = function hello(name) {
    return `${name}님 안녕하세요!`;
}
console.log(hello('홍길동')); => 식별자 hello를 호출
*/
var hello = function test(name){
    return `${name}님 안녕하세요!`;
}

// console.log(hello.test("딸기라떼"));
// console.log(hello('홍길동')); //=> 식별자 hello를 호출

let test = function(){
    return "hit"
};

(function(){
    console.log()
})()  //
// 일회성으로 필요한 이름없는 '익명함수'
// 윈도우 온 로드- 브라우저에 화면이 다 그려진 시점.
//(윈도우가 화면에 로드됐을 때, 실행되는 함수)
// 화면이 구성되고나서 실행시켜! 라고 쓰는 함수