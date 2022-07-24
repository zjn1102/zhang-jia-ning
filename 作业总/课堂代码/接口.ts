//                一。 索引类型  绕过多余属性判断
// interface rules {
//     [id: number]: string
// }

// interface ruless {
//     readonly [id: number]: string   //设置只读属性
// }

// const objs:rules={
//     123:'wode',
//     '123':'qwe'
// }
// console.log(objs['123']);


// interface Cont {
//     (): void;
//     count: number
// }

// const getcont = (): Cont => {
//     const c = () => {
//         c.count++
//     };
//     c.count = 0;
//     return c
// }
// const counterass:Cont=getcont()
// console.log(counterass.count);

// interface Cont {
//     ():void;
//     abc:number
// }

// const getabc=() : Cont => {
//     const c=()=>{
//         c.abc++
//     }
//     c.abc=12
//     return c
// }
// const abcss:Cont=getabc()
// console.log(abcss.abc);
// abcss()
// console.log(abcss.abc);
// abcss()
// console.log(abcss.abc);



// let ajax = new XMLHttpRequest()
// ajax.open('get','qweqwe')
// ajax.send()
// ajax.onreadystatechange=function(){
//     if(ajax.status===200 && ajax.readyState===4){
//         console.log(ajax.response);
        
//     }
// }
// interface typesa {
//     method:string,
//     url:string,
//     data?:any
// }
// enum meiju {
//     statuu=200,
//     ready=4
// }
// function getAjax(pramas:typesa){
//     ajax.open(pramas.method,pramas.url)
//     ajax.send()
//     ajax.onreadystatechange=function(){
//         if(ajax.status===meiju.statuu&&ajax.readyState===meiju.ready){
//             console.log('易烊千玺');
            
//         }
//     }
// }

// interface Prmeas {
//     url:string,
//     type:string,
//     data?:any
// }

// enum Statuss {
//     status=200,
//     readystatus=4
// }

// function getAjax(prmeas:Prmeas){
//     ajax.open(prmeas.type,prmeas.url)
//     ajax.send(prmeas.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Statuss.status && ajax.readyState===Statuss.readystatus){
//             console.log('输出成功');
            
//         }
//     }
// }

// let parmesa={type:'get',url:'qweqwe'}
// getAjax(parmesa)


//                  二、 索引类型  绕过多余属性判断
// interface rules {
//     [id: number]: string
// }

// interface ruless {
//     readonly [id: number]: string   //设置只读属性
// }

// const objs:rules={
//     123:'wode',
//     '123':'qwe'
// }
// console.log(objs['123']);


// interface Cont {
//     (): void;
//     count: number
// }

// const getcont = (): Cont => {
//     const c = () => {
//         c.count++
//     };
//     c.count = 0;
//     return c
// }
// const counterass:Cont=getcont()
// console.log(counterass.count);

// interface Cont {
//     ():void;
//     abc:number
// }

// const getabc=() : Cont => {
//     const c=()=>{
//         c.abc++
//     }
//     c.abc=12
//     return c
// }
// const abcss:Cont=getabc()
// console.log(abcss.abc);
// abcss()
// console.log(abcss.abc);
// abcss()
// console.log(abcss.abc);



// let ajax = new XMLHttpRequest()
// ajax.open('get','qweqwe')
// ajax.send()
// ajax.onreadystatechange=function(){
//     if(ajax.status===200 && ajax.readyState===4){
//         console.log(ajax.response);
        
//     }
// }
// interface typesa {
//     method:string,
//     url:string,
//     data?:any
// }
// enum meiju {
//     statuu=200,
//     ready=4
// }
// function getAjax(pramas:typesa){
//     ajax.open(pramas.method,pramas.url)
//     ajax.send()
//     ajax.onreadystatechange=function(){
//         if(ajax.status===meiju.statuu&&ajax.readyState===meiju.ready){
//             console.log('易烊千玺');
            
//         }
//     }
// }

// interface Prmeas {
//     url:string,
//     type:string,
//     data?:any
// }

// enum Statuss {
//     status=200,
//     readystatus=4
// }

// function getAjax(prmeas:Prmeas){
//     ajax.open(prmeas.type,prmeas.url)
//     ajax.send(prmeas.data)
//     ajax.onreadystatechange=function(){
//         if(ajax.status===Statuss.status && ajax.readyState===Statuss.readystatus){
//             console.log('输出成功');
            
//         }
//     }
// }

// let parmesa={type:'get',url:'qweqwe'}
// getAjax(parmesa)


//                 三。 索引类型  绕过多余属性判断
interface rules {
    [id: number]: string
}

interface ruless {
    readonly [id: number]: string   //设置只读属性
}

const objs:rules={
    123:'wode',
    '123':'qwe'
}
console.log(objs['123']);


interface Cont {
    (): void;
    count: number
}

const getcont = (): Cont => {
    const c = () => {
        c.count++
    };
    c.count = 0;
    return c
}
const counterass:Cont=getcont()
console.log(counterass.count);

interface Cont {
    ():void;
    abc:number
}

const getabc=() : Cont => {
    const c=()=>{
        c.abc++
    }
    c.abc=12
    return c
}
const abcss:Cont=getabc()
console.log(abcss.abc);
abcss()
console.log(abcss.abc);
abcss()
console.log(abcss.abc);



let ajax = new XMLHttpRequest()
ajax.open('get','qweqwe')
ajax.send()
ajax.onreadystatechange=function(){
    if(ajax.status===200 && ajax.readyState===4){
        console.log(ajax.response);
        
    }
}
interface typesa {
    method:string,
    url:string,
    data?:any
}
enum meiju {
    statuu=200,
    ready=4
}
function getAjax(pramas:typesa){
    ajax.open(pramas.method,pramas.url)
    ajax.send()
    ajax.onreadystatechange=function(){
        if(ajax.status===meiju.statuu&&ajax.readyState===meiju.ready){
            console.log('易烊千玺');
            
        }
    }
}

interface Prmeas {
    url:string,
    type:string,
    data?:any
}

enum Statuss {
    status=200,
    readystatus=4
}

function getAjax(prmeas:Prmeas){
    ajax.open(prmeas.type,prmeas.url)
    ajax.send(prmeas.data)
    ajax.onreadystatechange=function(){
        if(ajax.status===Statuss.status && ajax.readyState===Statuss.readystatus){
            console.log('输出成功');
            
        }
    }
}

let parmesa={type:'get',url:'qweqwe'}
getAjax(parmesa)
