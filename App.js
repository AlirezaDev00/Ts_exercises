//! casting in dom
var linkElem = document.querySelector(".link"); //! the pepular way
console.log(linkElem.href);
var inputElem = document.querySelector("input");
console.log(inputElem.placeholder);
var btnElem = document.querySelector("button");
console.log(btnElem.innerHTML);
console.log(btnElem === null || btnElem === void 0 ? void 0 : btnElem.innerHTML); //! the bad way
