import add, { isLogin, user } from "./Funcs";

const userAli: user = {
  name: "Alireza",
  email: "alirezaxogame@gmail.com",
  age: 16,
  role: "User",
};

console.log(isLogin(userAli));
console.log(add(1388, 1395));
