type combine = number | string;

const add = (param1: combine, param2: combine): combine => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  return param1.toString() + param2.toString();
};

console.log(
  add(
    54 , 65
  )
);
