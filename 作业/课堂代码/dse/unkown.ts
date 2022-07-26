/**
 *                  一、
 */
// 1
// let value1: unknown;
// value1 = "a";
// value1 = 123;


// 2
// let value2: unknown;
// let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
// value1 = value2;


// 3/
// let value4: unknown;
// value4 += 1;


// 4
// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]


// 5
// type type5 = string | unknown; // type5 => unknown
// type type6 = any | unknown; // type6 => any
// type type7 = number[] | unknown; // type7 => unknown


// 6/
// type type8 = never extends unknown ? true : false; // type8 => true


// 7/
// type type9 = keyof unknown; // type9 => never


// 8
// value1 === value2;
// value1 !== value2;
// value1 += value2; // error


// 9
// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error


// 10
// type Types<T> = { [P in keyof T]: number };
// type type10 = Types<any>; // type10 => { [x: string]: number }
// type type11 = Types<unknown>; // type10 => {}



/***
 *                              二、
 */
/**
 *                  一、
 */
// 1
// let value1: unknown;
// value1 = "a";
// value1 = 123;


// 2
// let value2: unknown;
// let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
// value1 = value2;


// 3/
// let value4: unknown;
// value4 += 1;


// 4
// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]


// 5
// type type5 = string | unknown; // type5 => unknown
// type type6 = any | unknown; // type6 => any
// type type7 = number[] | unknown; // type7 => unknown


// 6/
// type type8 = never extends unknown ? true : false; // type8 => true


// 7/
// type type9 = keyof unknown; // type9 => never


// 8
// value1 === value2;
// value1 !== value2;
// value1 += value2; // error


// 9
// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error


// 10
// type Types<T> = { [P in keyof T]: number };
// type type10 = Types<any>; // type10 => { [x: string]: number }
// type type11 = Types<unknown>; // type10 => {}


/**
 *                                三、
 */
/**
 *                  一、
 */
// 1
// let value1: unknown;
// value1 = "a";
// value1 = 123;


// 2
// let value2: unknown;
// let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
// value1 = value2;


// 3/
// let value4: unknown;
// value4 += 1;


// 4
// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]


// 5
// type type5 = string | unknown; // type5 => unknown
// type type6 = any | unknown; // type6 => any
// type type7 = number[] | unknown; // type7 => unknown


// 6/
// type type8 = never extends unknown ? true : false; // type8 => true


// 7/
// type type9 = keyof unknown; // type9 => never


// 8
// value1 === value2;
// value1 !== value2;
// value1 += value2; // error


// 9
// let value5: unknown;
// value5.age; // error
// value5(); // error
// new value5(); // error


// 10
type Types<T> = { [P in keyof T]: number };
type type10 = Types<any>; // type10 => { [x: string]: number }
type type11 = Types<unknown>; // type10 => {}