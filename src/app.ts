interface Type {
    length : number
}

const describe = <T extends Type>(param: T): [string, T] => {
    let text = "Zero(0) items in param"

    if (param.length) {
        text = `(${param.length} items in param)`
    }

    return [text , param]
} 

const result1 = describe("Alireza")
const result2 = describe({ length: 18 })
const result3 = describe([15, 18, 20])
// const result4 = describe(15)
console.log(result1, result2 , result3);