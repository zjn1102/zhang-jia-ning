/**
 *                               一、
 */
/**
 * 装饰器工厂
 */
// function setName() {
//     console.log('get setName');
//     return function(target:any) {
//         console.log('setName');
//     }
// }
// function setAge() {
//     console.log('get setAge');
//     return function(target: any) {
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
//@ts-ignore
// class Test {}

// get setName
// get setAge
// setAge
// setName

/**
 * 类装饰器
 */
// let sign = null
// function setName1(name:string) {
//     return function(target:Function) {
//         sign: target
//         console.log(target.name);
//     }
// }
// @setName1("lison")
// class Info {
//     constructor() {}
// }
// console.log(sign === Info);
// console.log(sign === Info.prototype.constructor);

// Info
// false
// false


/**
 * 修改类的原型对象和构造函数
 */
// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = 'lison'
// }
// @addName
// class A{
//     name: any;
// }
// const a = new A()
// console.log(a.name);

// lison


/**
 * 修改类
 */
// function classDecorator<T extends { new (...args: any[]): {} } >(target: T) {
//     return class extends target {
//         newProperty = "new property"
//         hello = "override"
//     }
// }
// @classDecorator
// class Greeter {
//     hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greeter("world"));

// Greeter { hello: 'override', newProperty: 'new property' }


/**
 * 继承修饰的类
 */
// function classDecorator(target: any):any {
//     return class {
//         newProperty = "new property"
//         hello = "override"
//     }
// }
// @classDecorator
// class Greeter {
//     property = "property"
//     hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greeter("world"));

// // { newProperty: 'new property', hello: 'override' }

// /**
//  * 属性描述符
//  */
// var obj = {}
// Object.defineProperty(obj, "name", {
//     value: 'lison',
//     writable: false,
//     configurable: true,
//     enumerable: true
// })
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test"
// console.log(obj);
// // { name: "lison" }
// for (let key in obj) {
//     console.log(key);
// }
// Object.defineProperty(obj, "name", {
//     enumerable: false
// })
// for(let key in obj) {
//     console.log(key);
// }
// Object.defineProperty(obj,"name", {
//     writable: true
// })
// obj.name = "test"
// console.log(obj);
// Object.defineProperty(obj, "name", {
//     configurable: false
// })
// Object.defineProperty(obj, "name", {
//     writable: false
// })

// function enumerable(bool: boolean): any {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         return {
//             value: function() {
//                 return "not age"
//             },
//             enumerable: bool
//         }
//     }
// }
// class info {
//     static getAge: any;
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age
//     }
// }
// const info = new Info()
// console.log(info.getAge);



/**
 * 参数装饰器
 */
// function required(target: any, propertyName: string, index:number) {
//     console.log(`修饰符是${propertyName}的第${index + 1}个参数`);
// }
// class Info {
//     name: string = "lison"
//     age: number = 18
//     getInfo(prefix: string, @required infoType: string): any {
//         return prefix + "" + this[infoType]
//     }
// }
// interface Info {
//     [key: string]: string | number | Function
// }
// const info = new Info()
// info.getInfo('Hihi', 'age')



// 访问装饰器
// function enumerable(bool: boolean) {
//     return function (
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDecorator
//     ) {
//         descriptor.enumerable = bool
//     }
// }
// class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
    // @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
    // set name(name) {
    //   this._name = name;
    // }
//   }



/**
 *                           二、
 */
/**
 * 装饰器工厂
 */
//  function setName() {
//     console.log('get setName');
//     return function(target:any) {
//         console.log('setName');
//     }
// }
// function setAge() {
//     console.log('get setAge');
//     return function(target: any) {
//         console.log('setAge');
//     }
// }
// @setName()
// @setAge()
//@ts-ignore
// class Test {}

// get setName
// get setAge
// setAge
// setName

/**
 * 类装饰器
 */
// let sign = null
// function setName1(name:string) {
//     return function(target:Function) {
//         sign: target
//         console.log(target.name);
//     }
// }
// @setName1("lison")
// class Info {
//     constructor() {}
// }
// console.log(sign === Info);
// console.log(sign === Info.prototype.constructor);

// Info
// false
// false


/**
 * 修改类的原型对象和构造函数
 */
// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = 'lison'
// }
// @addName
// class A{
//     name: any;
// }
// const a = new A()
// console.log(a.name);

// lison


/**
 * 修改类
 */
// function classDecorator<T extends { new (...args: any[]): {} } >(target: T) {
//     return class extends target {
//         newProperty = "new property"
//         hello = "override"
//     }
// }
// @classDecorator
// class Greeter {
//     hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greeter("world"));

// Greeter { hello: 'override', newProperty: 'new property' }


/**
 * 继承修饰的类
 */
// function classDecorator(target: any):any {
//     return class {
//         newProperty = "new property"
//         hello = "override"
//     }
// }
// @classDecorator
// class Greeter {
//     property = "property"
//     hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greeter("world"));

// // { newProperty: 'new property', hello: 'override' }

// /**
//  * 属性描述符
//  */
// var obj = {}
// Object.defineProperty(obj, "name", {
//     value: 'lison',
//     writable: false,
//     configurable: true,
//     enumerable: true
// })
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test"
// console.log(obj);
// // { name: "lison" }
// for (let key in obj) {
//     console.log(key);
// }
// Object.defineProperty(obj, "name", {
//     enumerable: false
// })
// for(let key in obj) {
//     console.log(key);
// }
// Object.defineProperty(obj,"name", {
//     writable: true
// })
// obj.name = "test"
// console.log(obj);
// Object.defineProperty(obj, "name", {
//     configurable: false
// })
// Object.defineProperty(obj, "name", {
//     writable: false
// })

// function enumerable(bool: boolean): any {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         return {
//             value: function() {
//                 return "not age"
//             },
//             enumerable: bool
//         }
//     }
// }
// class info {
//     static getAge: any;
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age
//     }
// }
// const info = new Info()
// console.log(info.getAge);



/**
 * 参数装饰器
 */
// function required(target: any, propertyName: string, index:number) {
//     console.log(`修饰符是${propertyName}的第${index + 1}个参数`);
// }
// class Info {
//     name: string = "lison"
//     age: number = 18
//     getInfo(prefix: string, @required infoType: string): any {
//         return prefix + "" + this[infoType]
//     }
// }
// interface Info {
//     [key: string]: string | number | Function
// }
// const info = new Info()
// info.getInfo('Hihi', 'age')



// 访问装饰器
// function enumerable(bool: boolean) {
//     return function (
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDecorator
//     ) {
//         descriptor.enumerable = bool
//     }
// }
// class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
    // @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
    // set name(name) {
    //   this._name = name;
    // }
//   }



/**
 *                                三、
 */
/**
 * 装饰器工厂
 */
 function setName() {
    console.log('get setName');
    return function(target:any) {
        console.log('setName');
    }
}
function setAge() {
    console.log('get setAge');
    return function(target: any) {
        console.log('setAge');
    }
}
@setName()
@setAge()
//@ts-ignore
class Test {}

// get setName
// get setAge
// setAge
// setName

/**
 * 类装饰器
 */
let sign = null
function setName1(name:string) {
    return function(target:Function) {
        sign: target
        console.log(target.name);
    }
}
@setName1("lison")
class Info {
    constructor() {}
}
console.log(sign === Info);
console.log(sign === Info.prototype.constructor);

// Info
// false
// false


/**
 * 修改类的原型对象和构造函数
 */
function addName(constructor: { new (): any }) {
    constructor.prototype.name = 'lison'
}
@addName
class A{
    name: any;
}
const a = new A()
console.log(a.name);

// lison


/**
 * 修改类
 */
// function classDecorator<T extends { new (...args: any[]): {} } >(target: T) {
//     return class extends target {
//         newProperty = "new property"
//         hello = "override"
//     }
// }
// @classDecorator
// class Greeter {
//     hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greeter("world"));

// Greeter { hello: 'override', newProperty: 'new property' }


/**
 * 继承修饰的类
 */
// function classDecorator(target: any):any {
//     return class {
//         newProperty = "new property"
//         hello = "override"
//     }
// }
// @classDecorator
// class Greeter {
//     property = "property"
//     hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greeter("world"));

// // { newProperty: 'new property', hello: 'override' }

// /**
//  * 属性描述符
//  */
// var obj = {}
// Object.defineProperty(obj, "name", {
//     value: 'lison',
//     writable: false,
//     configurable: true,
//     enumerable: true
// })
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test"
// console.log(obj);
// // { name: "lison" }
// for (let key in obj) {
//     console.log(key);
// }
// Object.defineProperty(obj, "name", {
//     enumerable: false
// })
// for(let key in obj) {
//     console.log(key);
// }
// Object.defineProperty(obj,"name", {
//     writable: true
// })
// obj.name = "test"
// console.log(obj);
// Object.defineProperty(obj, "name", {
//     configurable: false
// })
// Object.defineProperty(obj, "name", {
//     writable: false
// })

// function enumerable(bool: boolean): any {
//     return function(
//         target: any,
//         propertyName: string,
//         descriptor: PropertyDescriptor
//     ) {
//         return {
//             value: function() {
//                 return "not age"
//             },
//             enumerable: bool
//         }
//     }
// }
// class info {
//     static getAge: any;
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//         return this.age
//     }
// }
// const info = new Info()
// console.log(info.getAge);



/**
 * 参数装饰器
 */
function required(target: any, propertyName: string, index:number) {
    console.log(`修饰符是${propertyName}的第${index + 1}个参数`);
}
class Info {
    name: string = "lison"
    age: number = 18
    getInfo(prefix: string, @required infoType: string): any {
        return prefix + "" + this[infoType]
    }
}
interface Info {
    [key: string]: string | number | Function
}
const info = new Info()
info.getInfo('Hihi', 'age')



// 访问装饰器
function enumerable(bool: boolean) {
    return function (
        target: any,
        propertyName: string,
        descriptor: PropertyDecorator
    ) {
        descriptor.enumerable = bool
    }
}
class Info {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }
    @enumerable(false)
    get name() {
      return this._name;
    }
    // @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
    // set name(name) {
    //   this._name = name;
    // }
  }
