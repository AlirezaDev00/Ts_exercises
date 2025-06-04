//! enum 
var roles;
(function (roles) {
    roles[roles["Admin"] = 0] = "Admin";
    roles[roles["User"] = 1] = "User";
    roles[roles["Teacher"] = 2] = "Teacher";
})(roles || (roles = {}));
console.log(roles);
var user = {
    id: 1,
    age: 16,
    name: "Alireza",
    role: roles.Admin
};
if (user.role === roles.Admin) {
    console.log("You access this page");
}
else {
    console.log("You not access this page");
}
