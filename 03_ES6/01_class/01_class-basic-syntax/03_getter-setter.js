// 03. getter, setter 
class Product {

    constructor(name, price) {
        // setter를 활성화한다.
        this.name = name;
        this.price = price;
    }


    // 내가 쓴거야
    /* 접근자 프로퍼티는 프로토타입의 프로퍼티가 된다.
    프로퍼티가 뭐야 ? 객체의 속성을 정의하는 구성 요소로, 이름(key)과 값(value)으로 이루어진 쌍
    -데이터 프로퍼티 : 값을 직접 저장하는 일반적인 프로퍼티
    value 외에도 writable, enumerable, configurable 같은 속성을 가질 수 있습니다.

    -접근자 프로퍼티 : 값을 저장하지 않고, 값을 읽거나 설정할 때 호출되는 함수(getter와 setter)를 정의합니다.

    name, price로 외부 접근하고 _name, _price로 실제 값을 담는다.
    밑줄은 프로그래머들 사이에서 외부 접근이 불가능한 프로퍼티나 메서드를 나타낼 때 사용한다.
    

    // name 속성의 setter 메소드
    set name(newName) {
        this._name = newName;
    }

    // price 속성의 setter 메소드
    set price(newPrice) {
        this._price = newPrice;
    }

    /*위의 코드에서 set name(newName)과 set price(newPrice)은 name과 price 속성에 대한 setter 메소드를 정의합니다.*/ // 내가 쓴거야

    // getter 함수
    get name() {
        console.log('get name 동작');
        return this._name;
    }

    get price() {
        console.log('get price 동작');
        return this._price;
    }

    // setter 함수
    set name(value) {
        console.log('set name 동작');
        this._name = value;
    }

    set price(value) {
        console.log('set price 동작');
        if (value <= 0) {
            console.log("가격은 음수일 수 없습니다.");
            this._price = 0;
            return;
        }
        this._price = value;
    }

}

let phone = new Product('전화기', 23000);
console.log(phone.name + "," + phone.price);

let computer = new Product('컴퓨터', -1500000);
console.log(computer.name + "," + computer.price);