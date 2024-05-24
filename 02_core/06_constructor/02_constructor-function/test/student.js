class Student{
constructor(name, age){
    this.name = name;
    this.age = age;
}
    
    getInfo(){
        return `${this.name}의 나이는 ${this.age}세입니다.`;
    }
}

export default Student; // 내보내기 설정을 무조건 해줘야 한다. export , import