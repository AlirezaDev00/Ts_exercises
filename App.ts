//! casting in dom

const linkElem = document.querySelector(".link") as HTMLAnchorElement; //! the pepular way

console.log(linkElem.href);

const inputElem = <HTMLInputElement>document.querySelector("input");

console.log(inputElem.placeholder);

const btnElem = document.querySelector("button")!;
console.log(btnElem.innerHTML);

console.log(btnElem?.innerHTML); //! the bad way
