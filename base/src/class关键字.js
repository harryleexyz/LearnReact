function Teacher(name, age) {
    this.name = name;
    this.age = age;
}

const teacher = new Teacher("T老师", 33);
Teacher.prototype.say = function () {
    console.log("老师会讲课");
};

Teacher.info = "老师";
Teacher.print = function () {
    console.log("老师类")
};
console.log(teacher);
teacher.say();
console.log(Teacher.info);
Teacher.print();

console.log("---------------------------------------------------------");


// class 报错安装: npm install @babel/runtime -D
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    learn() {
        console.log("学生会学习");
    }
    static info = "学生"; // 静态属性报错安装: npm install @babel/plugin-proposal-class-properties -D 并在 .babelrc -> plugins 启用
    static print() {
        console.log("学生类")
    }
}

const student = new Student("S学生", 16);

console.log(student);
student.learn();
console.log(Student.info);
Student.print();


console.log("---------------------------------------------------------");

// 使用 extends 实现继承关系
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class American extends Person{
}
class Chinese extends Person{
    constructor(name, age, idCard){
        super(name, age); // 注意super只能放在第一行
        this.idCard = idCard;
    }
}
const am = new American("Jack",12);
console.log(am);

const ch = new Chinese("张三",18,"3124142*******");
console.log(ch);