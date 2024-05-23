/* 01_object (객체)
자바스크립트는 객체 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체이다.
객체는 0개 이상의 프로퍼티로 구성 된 집합이며 프로퍼티는 키(key)와 값(value)으로 구성된다.
자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
프로퍼티 값이 함수일 경우 method라고 부른다.
*/

/*
객체 생성 방법
자바, C++ 같은 클래스 기반 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성한다.
자바스크립트는 프로토타입 기반 객체지향 언어로 클래스 기반 객체 지향 언어와는 달리 다양한 객체 생성 방법 지원한다.
1. 객체 리터럴
2. Object 생성자 함수
3. 생성자 함수
4. Object.create 메서드
5. Class(ES6)
이 중 가장 일반적이고 간단한 방법이 객체 리터럴을 사용하는 방법이다.
중괄호 내 0개 이상의 프로퍼티를 정의한다. */

var student = {  // 중괄호가 들어가면 객체, 프로퍼티임.
    // 키-값 쌍으로 구성 된 프로퍼티
    // 프로퍼티 : 객체의 상태를 나타내는 값(data)
    name : '유관순',
    age : 16,
    // 메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }, // this.name은 중괄호 기준으로 상단에 name속성을 가져온다.

    test : () => { // 애로우 펑션은 this를 사용할 수 없다.
        return `${this.name}(은)는 ${this.age}세입니다.`;
 
    },
    inner:{ // 중괄호니까 객체. inner객체
        name:"test",
        getInfo : function() {
            console.log(this)
        }
    }
};

var orion={
    product : "자두 알맹이",
    test : function() {

    }
}


var method = function(){
    console.log(this);
}
method.bind(student);
method();


test();
orion.test();
orion.test= test;

console.log(student.inner.getInfo());
console.log(student.test());
console.log(student.getInfo());
console.log(typeof student);
console.log(student);

// 프로퍼티를 정의하지 않을 시 빈 객체가 생성 된다. 
var student2 = {};
console.log(typeof student2);
console.log(student2);

/* 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다. 따라서 닫는 중괄호 뒤에는 세미콜론을 붙인다.
숫자 값이나 문자열을 만드는 것과 유사하게 리터럴로 객체를 생성한다.
객체 리터럴에 프로퍼티를 포함시켜 객체를 생성함과 동시에 프로퍼티를 만들 수도 있고, 객체를 생성한 이후에 프로퍼티를 동적으로 추가할 수도 있다.
객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용해서 생성하므로 함수 학습 이후에 다시 학습할 것이다.
*/
