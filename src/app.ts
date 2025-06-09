type admin = {
  name: string;
  privileges: string[];
};

type teacher = {
  name: string;
  startDate: Date;
};

const logger = (member: admin | teacher) => {
  // console.log(member.name);
  "privileges" in member
    ? console.log(`Privileges : ${member.privileges}`)
    : console.log(`StartDate : ${member.startDate}`);
};

// const alireza : admin= {
//   name: "Alireza",
//   privileges: ["users management" , "Accept comments"]
// }

const alireza: teacher = {
  name: "Alireza",
  startDate: new Date()
}

logger(alireza)