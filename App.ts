// literal vars

const item: undefined = undefined;
const num: null = null;

type Alireza = { id: 1; name: "Alireza"; age: 16 };
type MohammadAmin = { id: 2; name: "MohammadAmin"; age: 25 };
type AlirezaFd = { id: 3; name: "AlirezaFd"; age: 22 };
type Admins = Alireza | MohammadAmin | AlirezaFd;

const adminLoginHandler = (admin: Admins): string => {
  switch (admin.name) {
    case "Alireza": {
      return "Alireza is logged"
    } 
    case "AlirezaFd": {
      return "AlirezaFd is logged"
    }
    case "MohammadAmin": {
      return "MohammadAmin is logged"
    }
      
    default: {
      const neverVariable :never = admin
      return neverVariable
    }
  }
}