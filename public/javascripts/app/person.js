class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        return `大家好，我叫${this.name}.`;
    }
    sayAge() {
        return `大家好，我今年${this.age}岁`;
    }
    sayHello() {
        return `大家好，我叫${this.name}，今年${this.age}岁了,很高兴认识大家！`;
    }
}

export default Person;