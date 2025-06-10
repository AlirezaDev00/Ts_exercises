type combine = string | number;

function add(param1: string, param2: string): string;
function add(param1: number, param2: number): number;

function add(param1: combine, param2: combine): combine {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
}

console.log(add("Alireza", " Is The Best Ever!").split(""));
