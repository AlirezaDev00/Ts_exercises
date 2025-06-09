type admin = {
  name: string,
  privileges : string[]
}

type teacher = {
  name: string,
  startDate : Date
}

//! The Bad Code
// type teacherAdmin = {
//   name: string,
//   privileges: string[],
//   startDate : Date
// }

const ReazaDolati: teacher = {
  name: "Reza Dolati",
  startDate: new Date()
}

// console.log(ReazaDolati);
const saeediRad: teacher & admin = {
  name: "MohammadAmin Saeedirad",
  startDate: new Date(),
  privileges: ["Accept Comments" , "Remove Comments" , "Delete Users"]
} //? inter Section type

console.log(saeediRad);