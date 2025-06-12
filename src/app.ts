function echoStr(param: string): string {
    return param
}
function echoNumber(param: number): number {
    return param
}
function echoAny(param: any): any {
    return param
}

// const result = echoAny("js")

//* T = Type
function echo<T>(param: T): T {
    return param
}

const number: number = echo<number>(54)

const text1: string = echo<string>("React")
const text2: string = echo("React")

function merge<T extends object, T2 extends object>(obj1: T, obj2: T2): T & T2 {
    return {...obj1 , ...obj2}
}

const mergedObjs = merge({ name: "alireza" }, { age: 16 })
// mergedObjs.name
// const mergeStrs = merge("Alireza", "Is The Best Ever") //! this line have err

function showLength<T3 extends string>(param: T3): T3 {
    console.log(param.length);    

    return param
}

showLength("Alireza")

interface Width {
    length : number
}

function showProp<T4 extends Width>(param: T4[]):T4 {
    console.log(param.length);

    return param[0]
}

// showProp("js")
showProp([{ length: 15 }, { length: 25 }])

