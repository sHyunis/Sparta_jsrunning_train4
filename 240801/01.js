// 클래스의 사용
// 1.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    console.log(`저의 이름은 ${this.name} 나이는 ${this.age}입니다.`);
  }
}
// 2.
const jung = new Person("yuno", 20);
jung.info();

// 3.
class student extends Person {
  constructor(name, age, study) {
    super(name, age);
    this.study = "study";
  }
}

// 4.
const student1 = new student("준현", 12000, "javascript");
console.log(student1);
