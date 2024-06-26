/* 01_property-value-shorthand(프로퍼티 값 단축 구문) */

var id="p-0001";
var price =  30000;


var product={
    id:id,
    price:price
}

// 위 식을 축약시킨게 var product3 = {...product2}; 이거임

console.log(product);

/*
ES6에서 프로퍼티 값으로 변수를 사용하는 경우
변수의 이름으로 프로퍼티 키를 생성하게 되어 key와 값을 생략할 수 있다.
프로퍼티 키는 변수 이름으로 값은 변수의 값으로 할당한다.
*/
var product2 ={ id, price};
console.log(product2);

var product3 = {...product2};  // ...은 product2의 모든걸 가져온다.
console.log("product3")
console.log(product3)

var product4 = product2;
console.log("product4")
console.log(product4)