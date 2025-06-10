//! index type
//* interface Errors {
//*   name: string,
//*   email: string,
//*   password: string
//* }
//* const loginFormErrors: Errors = {
//*   name: "Enter Name Is Required!",
//*   email: "Enter Email Is Required!",
//*   password: "Enter Password Is Required"
//* }

interface Errors {
  type: string,
  [prop : string] : string //! index type
}

const loginFormErrors: Errors = {
  type: "Login Form",
  name: "Enter name is required!",
  email: "Enter email is required!",
  password: "Enter password is required!",
}

const registerFormErrors: Errors = {
  type: "Register Form",
  username : "Username Is Required!"
}

