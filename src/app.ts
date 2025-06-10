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

function merge<T, T2>(obj1: T, obj2: T2): T & T2 {
    return {...obj1 , ...obj2}
}

const mergedObjs = merge({ name: "alireza" }, { age: 16 })
// mergedObjs.name
// const mergeStrs = merge("Alireza", "Is The Best Ever")
