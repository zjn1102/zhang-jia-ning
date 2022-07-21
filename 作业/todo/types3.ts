// 数字枚举
enum Arrss {
    a = 1,
    b = 2,
    c = 3
}
console.log(Arrss.a);  //1

// 指定索引
enum zidong {
    dog = 100,
    cat,
    pig,
}
console.log(zidong.pig);  //102
// 计算值和常量

const ass = () => {
    return 200
}

enum yunsuan {
    a = ass(),
    b = 200,  //第一个是计算后面跟着的第一个必须是常量
    c,
}


// 反向映射
enum fanxiang {
    abc = 455,
    bbs = 55,
    scuucss = 411
}
console.log(fanxiang.abc); //455
console.log(fanxiang, 55); //bbs


// 字符串枚举

enum strings {
    abcs = 'arrasss',
    abcss = 11,  //字符串枚举需要有初始化的值
}

// 成员类型

enum Ani {
    dog = 2,
    cat = 3,
}

interface aa {
    type: Ani.dog
}
interface bb {
    type: Ani.cat
}

let cat: aa = {
    type: Ani.dog
}

// 联合枚举类型


enum lianhe {
    no,
    off,
}
interface yes {
    status: lianhe
}
let tpps = {
    status: lianhe.no
}

// 异构枚举

enum yigou {
    string = 'yigouzifu',
    numberss = 123456    //既有字符串又有数值  就是异构枚举，尽量不要用，一般都是同一类型枚举
}


