                                    // 一、
// function newget({name,next}:{name:string,next:string}){
//     let goods=`${next}${name}`
//     return goods
// }

// newget({name:'俊',next:'郭'})
// console.log(newget({name:'俊',next:'郭'}));


// interface persion{
//     name:string,
//     age:number,
//     sex:boolean,
//     like:string
//     dink?:string       //不确定后面的属性  的值
//     [porp:string]:any  //不确定有多少属性
// }


// console.log();

// // 类型断言AS方法
// interface vegetables{
//     color?:string,
//     type:string 
//     // [prop:string]:any  //添加类型断言不限制属性
// }

// const getvegetables=({color,type}:vegetables):string=>{
//         return `A ${color?color+'':''}${type}`
// }

// getvegetables({
//     type:'sad',
//     size:15,  //  添加类型断言则不报错  as
// } as vegetables)

// //函数类型

// interface AddFunc{
//     (num1:number,num2:number):number
// }

// const add:AddFunc=(n1,n2)=>n1+n2
// // const join:AddFunc=(n1,n2)=>`${n1}${n2}`  //不能将类型“string”分配给类型“number”
// add('a',2)



                                    // 二、
// function newget({name,next}:{name:string,next:string}){
//     let goods=`${next}${name}`
//     return goods
// }

// newget({name:'俊',next:'郭'})
// console.log(newget({name:'俊',next:'郭'}));


// interface persion{
//     name:string,
//     age:number,
//     sex:boolean,
//     like:string
//     dink?:string       //不确定后面的属性  的值
//     [porp:string]:any  //不确定有多少属性
// }


// console.log();

// // 类型断言AS方法
// interface vegetables{
//     color?:string,
//     type:string 
//     // [prop:string]:any  //添加类型断言不限制属性
// }

// const getvegetables=({color,type}:vegetables):string=>{
//         return `A ${color?color+'':''}${type}`
// }

// getvegetables({
//     type:'sad',
//     size:15,  //  添加类型断言则不报错  as
// } as vegetables)

// //函数类型

// interface AddFunc{
//     (num1:number,num2:number):number
// }

// const add:AddFunc=(n1,n2)=>n1+n2
// // const join:AddFunc=(n1,n2)=>`${n1}${n2}`  //不能将类型“string”分配给类型“number”
// add('a',2)


                                // 三、
function newget({name,next}:{name:string,next:string}){
    let goods=`${next}${name}`
    return goods
}

newget({name:'俊',next:'郭'})
console.log(newget({name:'俊',next:'郭'}));


interface persion{
    name:string,
    age:number,
    sex:boolean,
    like:string
    dink?:string       //不确定后面的属性  的值
    [porp:string]:any  //不确定有多少属性
}


console.log();

// 类型断言AS方法
interface vegetables{
    color?:string,
    type:string 
    // [prop:string]:any  //添加类型断言不限制属性
}

const getvegetables=({color,type}:vegetables):string=>{
        return `A ${color?color+'':''}${type}`
}

getvegetables({
    type:'sad',
    size:15,  //  添加类型断言则不报错  as
} as vegetables)

//函数类型

interface AddFunc{
    (num1:number,num2:number):number
}

const add:AddFunc=(n1,n2)=>n1+n2
// const join:AddFunc=(n1,n2)=>`${n1}${n2}`  //不能将类型“string”分配给类型“number”
add('a',2)


