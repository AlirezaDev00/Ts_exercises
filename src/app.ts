type admin = {
  name: "Admin";
  privileges: string[];
};

type teacher = {
  name: "Teacher";
  startDate: Date;
};

const logger = (param: admin | teacher) => {
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
      throw new Error("Invalid Parameter")
    }
  }
};

const aliAdmin: admin = { name: "Admin", privileges: ["Accept Comment"] }
const teacherAli : teacher = {name: "Teacher" , startDate : new Date()}

// logger(aliAdmin)
logger(teacherAli)