/* 
자바의 경우 정수와 실수를 구분해 int,long,float,dobule 등과 같은 다양한 숫자타입을 제공한다
하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/
// 자바의 변수 표현식
// 자료형 변수명 10;

Number();
var integer = 10;
var dobule = 5.5;
var negative = -10;
integer = "10";  // 자바스크립트에는 "" 써도 정수로 인식해준다. 그래서 오류가 안남!

console.log(Number("10") * "10"); // 넘버라는 클래스를 사용해서 문자열로 써있는것들을 다 형변환 시켜준다. 결국 10 * 10 = 100이 된다. number는 클래스타입이다.

console.log(typeof integer);
console.log(typeof dobule);
console.log(typeof negative);


console.log(10 === 10.0);            // 타입 변환을 수행하지 않으며, 값과 타입이 모두 일치하는지 비교 
                                      //(두 피연산자가 동일한 데이터 유형을 가질 때만 true를 반환합니다.)
                                     // 암묵적 형 변환을 하지 않습니다. 즉, 비교하는 값들의 데이터 유형이 다르면 무조건 false를 반환합니다.

console.log("test :"+ (10 == '10')); //타입 변환을 수행하며,값이 동등한지 비교
consol.log(10/4);                    // 타입을 신경쓰지않고 단순히 값만 비교 ==   
                                    //예기치 않은 결과를 피하기 위해서는 === 쓰기
                                    //값을 비교하기 전에 필요하면 데이터 유형을 변환합니다.
                                    // 암묵적 형 변환(type coercion)이 일어나서 서로 다른 데이터 유형이라도 비교할 수 있습니다.
/*
  infinty : 양의 무한대
  -infinty : 음의 무한대
  NaN :산술 연산 불가
  */

  console.log(10/0);
  console.log(10/-10);
  console.log(1*'문자열');