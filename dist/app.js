"use strict";
function echoStr(param) {
    return param;
}
function echoNumber(param) {
    return param;
}
function echoAny(param) {
    return param;
}
// const result = echoAny("js")
//* T = Type
function echo(param) {
    return param;
}
const number = echo(54);
const text1 = echo("React");
const text2 = echo("React");
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const mergedObjs = merge({ name: "alireza" }, { age: 16 });
// mergedObjs.name
// const mergeStrs = merge("Alireza", "Is The Best Ever") //! this line have err
function showLength(param) {
    console.log(param.length);
    return param;
}
showLength("Alireza");
function showProp(param) {
    console.log(param.length);
    return param[0];
}
// showProp("js")
showProp([{ length: 15 }, { length: 25 }]);
//# sourceMappingURL=app.js.map