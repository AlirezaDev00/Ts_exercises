
// ! DRY
// const item1: number | string = 12
// const item2 : number | string = 13
// const item3 : number | string = 14

type combine = number | string; //! alias type

const item1: combine = 12
const item2 : combine = 13
const item3: combine = 14

type uniqItems = "js" | "react" | "html";

const item4 : uniqItems = "js"