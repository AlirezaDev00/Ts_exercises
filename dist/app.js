"use strict";
const logger = (member) => {
    // console.log(member.name);
    "privileges" in member
        ? console.log(`Privileges : ${member.privileges}`)
        : console.log(`StartDate : ${member.startDate}`);
};
// const alireza : admin= {
//   name: "Alireza",
//   privileges: ["users management" , "Accept comments"]
// }
const alireza = {
    name: "Alireza",
    startDate: new Date()
};
logger(alireza);
//# sourceMappingURL=app.js.map