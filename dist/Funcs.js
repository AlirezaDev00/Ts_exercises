"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNumber = exports.isLogin = void 0;
const isLogin = (user) => {
    return user.role === "Admin" ? true : false;
};
exports.isLogin = isLogin;
const userNumber = 12;
exports.userNumber = userNumber;
const add = (num1, num2) => {
    return num1 + num2;
};
exports.default = add;
//# sourceMappingURL=Funcs.js.map