ES6가 뭐야?
ES6(ECMAScript 2015) 또는 ECMAScript 6는 JavaScript 언어 사양의 주요 업데이트로, JavaScript를 더 강력하고 효율적으로 만들기 위해 많은 새로운 기능과 개선사항을 도입했습니다. 아래는 ES6의 주요 기능과 개선 사항입니다:

let과 const:

let: 블록 스코프를 갖는 변수 선언. var와 달리 함수 스코프가 아닌 블록 스코프를 가집니다.
const: 값이 재할당되지 않는 상수. 블록 스코프를 가집니다.


----예시----
let x = 10;
const y = 20;


화살표 함수:

간결한 함수 표현식으로, this 키워드가 상위 스코프를 유지합니다.

----예시----
const add = (a, b) => a + b;



템플릿 리터럴:

백틱(`)을 사용해 문자열을 작성하며, ${} 구문을 통해 변수와 표현식을 삽입할 수 있습니다.

----예시----
const name = 'John';
const message = `Hello, ${name}!`;

기본 매개변수:

함수의 매개변수에 기본값을 설정할 수 있습니다.

----예시----
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

구조 분해 할당:

배열이나 객체의 값을 개별 변수로 쉽게 분해할 수 있습니다.

----예시----
// 배열 구조 분해
const [a, b] = [1, 2];

// 객체 구조 분해
const {name, age} = {name: 'Alice', age: 25};


스프레드 연산자와 나머지 매개변수:

배열이나 객체를 펼치거나, 함수의 인수 목록을 배열로 받을 수 있습니다.

----예시----
// 스프레드 연산자
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 나머지 매개변수
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}


클래스:

기존 프로토타입 기반 상속 대신 간단한 문법으로 객체 지향 프로그래밍을 할 수 있습니다.

----예시----
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const john = new Person('John', 30);


모듈:
import와 export 키워드를 사용하여 모듈 간의 코드 재사용이 가능합니다.

----예시----

// module.js
export const pi = 3.14;
export function add(a, b) {
  return a + b;
}

// main.js
import { pi, add } from './module.js';



프로미스:

비동기 작업을 처리하기 위한 객체로, 콜백 헬을 피하고 체인 형식으로 비동기 코드를 작성할 수 있습니다.

----예시----
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  if (/* 성공 */) {
    resolve('Success');
  } else {
    reject('Error');
  }
});

promise.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});



01_class-declarations 주석달기

class Student { // student라는 이름의 클래스를 선언한다.

                 // 생성자를 통해 인스턴스 생성 및 초기화
                // 생성자는 1개 이상 정의 될 수 없으며 생략할 경우 암묵적으로 정의 된다. 암묵적으로 this를 반환하므로 반환문은 작성하지 않는다.
    constructor(name) {         //생성자(Constructor)는 클래스의 인스턴스(객체)를 생성하고 초기화하는 특별한 메소드
        this.group = 1; // 고정 값으로 인스턴스 초기화
        this.name = name; // 인수로 인스턴스 초기화 
    }

//생성자(Constructor)는 클래스의 인스턴스(객체)를 생성하고 초기화하는 특별한 메소드

역할
객체 초기화: 객체의 초기 속성 값을 설정
객체 생성: new 키워드와 함께 호출되어 새로운 객체 인스턴스를 생성합니다.

class Student {
    // 생성자 메소드 정의
    constructor(name, age) {  // constructor(name, age) 메소드는 Student 클래스의 생성자입니다.
        this.name = name; // 인스턴스 속성 name 초기화
        this.age = age;   // 인스턴스 속성 age 초기화
    }

 // 학생 정보를 반환하는 메소드
    getInfo() {
        return `${this.name}(은)는 ${this.age}세입니다.`;
}

getInfo는 객체의 메소드로, 객체의 정보를 반환하는 역할
메소드는 객체에 포함된 함수로, 객체의 속성에 접근하고 이를 이용해 작업을 수행할 수 있습니다.

예시)

class Student {
    // 생성자 메소드: 새로운 Student 객체를 초기화
    constructor(name, age) {
        this.name = name; // 이름 속성 초기화
        this.age = age;   // 나이 속성 초기화
    }

    // getInfo 메소드: 학생 정보를 문자열로 반환
    getInfo() {
        return `${this.name}(은)는 ${this.age}세입니다.`; // 학생의 이름과 나이를 포함한 문자열 반환
    }
}

// 새로운 Student 객체 생성
const student1 = new Student('유관순', 16);

// getInfo 메소드 호출
console.log(student1.getInfo()); // 유관순(은)는 16세입니다.


위 예제에서
- Student 클래스는 name과 age라는 두 개의 속성을 가지며, 생성자를 통해 초기화
- getInfo 메소드는 this.name과 this.age 속성에 접근하여, 학생의 이름과 나이를 포함한 문자열을 반환
- student1.getInfo() 호출은 student1 객체의 name과 age 속성 값을 기반으로 문자열을 반환합니다.

메소드 getInfo는 클래스 인스턴스의 속성에 접근하고, 이를 활용하여 의미 있는 정보를 제공하는 역할을 합니다. 
this 키워드는 해당 메소드가 호출된 객체를 참조하는 데 사용됩니다.

this?

- 객체 메소드에서의 this
객체의 메소드 내부에서 this는 메소드를 호출한 객체를 참조합니다.

- 생성자 함수에서의 this
생성자 함수 내부에서 this는 새로 생성되는 객체를 참조합니다

- 글로벌 컨텍스트에서의 this
글로벌 컨텍스트(전역 범위)에서 this는 일반적으로 전역 객체를 참조합니다. 브라우저 환경에서는 window 객체를 참조합니다.

- 함수 호출에서의 this
일반 함수 호출에서 this는 엄격 모드(strict mode) 여부에 따라 달라집니다.

- 화살표 함수에서의 this
화살표 함수는 자신만의 this 바인딩을 가지지 않고, 상위 스코프의 this를 그대로 사용합니다. 이는 렉시컬(lexical) 스코프를 따른다고 표현합니다.

- call, apply, bind 메소드에서의 this
JavaScript는 call, apply, bind 메소드를 사용하여 this 값을 명시적으로 설정할 수 있습니다.

이와 같이 this는 JavaScript의 실행 컨텍스트에 따라 동적으로 결정되는 중요한 키워드