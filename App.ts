//! enum 
enum roles {
  Admin,
  User,
  Teacher
}

console.log(roles);

const user: {
  id: number,
  age: number,
  name: string,
  role: roles
} = {
  id: 1,
  age: 16,
  name: "Alireza",
  role: roles.Admin
}

if (user.role === roles.Admin) {
  console.log("You access this page");
} else {
  console.log("You not access this page");
}