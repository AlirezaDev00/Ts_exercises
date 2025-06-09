"use strict";
const logger = (param) => {
    // if ("privileges" in param) {
    //   //....
    // } else if ("startDate" in param) {
    //   //...
    // }
    switch (param.name) {
        case "Admin": {
            console.log("Admin Logged");
            break;
        }
        case "Teacher": {
            console.log("Teacher Logged");
            break;
        }
        default: {
            throw new Error("Invalid Parameter");
        }
    }
};
const aliAdmin = { name: "Admin", privileges: ["Accept Comment"] };
const teacherAli = { name: "Teacher", startDate: new Date() };
// logger(aliAdmin)
logger(teacherAli);
//# sourceMappingURL=app.js.map