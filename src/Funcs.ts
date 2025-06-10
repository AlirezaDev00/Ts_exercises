interface user {
  name: string;
  email: string;
  age: number;
  role: "Admin" | "User";
}

const isLogin = (user: user): boolean => {
  return user.role === "Admin" ? true : false;
};

const userNumber = 12

const add = (num1: number, num2: number) => {
    return num1 + num2
}

export {isLogin , userNumber , user}

export default add