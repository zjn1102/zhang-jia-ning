// ts中的类
var People = /** @class */ (function () {
    function People(name, age) {
        this.age = age;
        this.name = name;
    }
    People.prototype.sayHi = function () {
        return this.name;
    };
    return People;
}());
var p1 = new People('张三', 12);
console.log(p1);

class People{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sport(){
        return this.name+'会运动'
    }
}
// 对类进行实例化
let p=new People('小明',18)
// 调用类的方法
console.log(p.sport());
// 获取类的属性
console.log(p.age);

function Animal(name){
    this.name = name
    this.run = ()=>{
       console.log(this.name + '会跑步');
    }
}
// 构造函数原型链上添加方法
Animal.prototype.song = function(){
    console.log(`${this.name}会唱歌`);
}

function Dog(name){
    Animal.call(this,name)
 }
 
 let d = new Dog('哈士奇')
 
 console.log(d.name);
 console.log(d.run()); 
 console.log(d.song()); 

 function Dog(name){
    Animal.call(this,name)
 }
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);
d.run()
d.song()

// 声明一个动物的类
class Animal {
    constructor(name){
       this.name = name
    }
    run(){
       console.log(`${this.name}会跑步`);
    }
 }
 class Dog extends Animal {
    constructor(name){
                super(name)
    }
}

let d = new Dog('哈士奇')
   console.log(d.name);
   d.run(); 









   



   // ts中的类
var People = /** @class */ (function () {
    function People(name, age) {
        this.age = age;
        this.name = name;
    }
    People.prototype.sayHi = function () {
        return this.name;
    };
    return People;
}());
var p1 = new People('张三', 12);
console.log(p1);

class People{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sport(){
        return this.name+'会运动'
    }
}
// 对类进行实例化
let p=new People('小明',18)
// 调用类的方法
console.log(p.sport());
// 获取类的属性
console.log(p.age);

function Animal(name){
    this.name = name
    this.run = ()=>{
       console.log(this.name + '会跑步');
    }
}
// 构造函数原型链上添加方法
Animal.prototype.song = function(){
    console.log(`${this.name}会唱歌`);
}

function Dog(name){
    Animal.call(this,name)
 }
 
 let d = new Dog('哈士奇')
 
 console.log(d.name);
 console.log(d.run()); 
 console.log(d.song()); 

 function Dog(name){
    Animal.call(this,name)
 }
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);
d.run()
d.song()

// 声明一个动物的类
class Animal {
    constructor(name){
       this.name = name
    }
    run(){
       console.log(`${this.name}会跑步`);
    }
 }
 class Dog extends Animal {
    constructor(name){
                super(name)
    }
}

let d = new Dog('哈士奇')
   console.log(d.name);
   d.run(); 











   // ts中的类
var People = /** @class */ (function () {
    function People(name, age) {
        this.age = age;
        this.name = name;
    }
    People.prototype.sayHi = function () {
        return this.name;
    };
    return People;
}());
var p1 = new People('张三', 12);
console.log(p1);

class People{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sport(){
        return this.name+'会运动'
    }
}
// 对类进行实例化
let p=new People('小明',18)
// 调用类的方法
console.log(p.sport());
// 获取类的属性
console.log(p.age);

function Animal(name){
    this.name = name
    this.run = ()=>{
       console.log(this.name + '会跑步');
    }
}
// 构造函数原型链上添加方法
Animal.prototype.song = function(){
    console.log(`${this.name}会唱歌`);
}

function Dog(name){
    Animal.call(this,name)
 }
 
 let d = new Dog('哈士奇')
 
 console.log(d.name);
 console.log(d.run()); 
 console.log(d.song()); 

 function Dog(name){
    Animal.call(this,name)
 }
Dog.prototype = Animal.prototype

let d = new Dog('哈士奇')

console.log(d.name);
d.run()
d.song()

// 声明一个动物的类
class Animal {
    constructor(name){
       this.name = name
    }
    run(){
       console.log(`${this.name}会跑步`);
    }
 }
 class Dog extends Animal {
    constructor(name){
                super(name)
    }
}

let d = new Dog('哈士奇')
   console.log(d.name);
   d.run(); 

