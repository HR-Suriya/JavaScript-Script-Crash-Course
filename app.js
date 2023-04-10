// Task 1
// 1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

// function ClosureReturn(num) {
//     return function(value) {
//         return num + value;
//     }
// }
// const plusFive = ClosureReturn(5);
// console.log(plusFive(35));



// Task 2
// 2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

// function arraySearcher(array, value) {
//     if (array.length === 0) {
//         return false;
//     }
//     else if (array[0] === value) {
//         return true;
//     }
//     return arraySearcher(array.slice(1), value);
// }
// let myArray = [1, 2, 3, 4, 5];
// console.log(arraySearcher(myArray, 3)); // Output: true
// console.log(arraySearcher(myArray, 6)); // Output: false 



// Task 3
// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

// function addNewPara(text) {
//     const newParagraph = document.createElement("p");
//     newParagraph.textContent = text;
//     const bottom = document.body.lastElementChild;
//     document.body.insertBefore(newParagraph, bottom.nextSibling);
// }

// addNewPara("Muhammad Hassan Raza");



// Task 4
// 4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

// function addListItem(textContent) {
//     let ul = document.querySelector("ul");
//     let li = document.createElement("li");
//     li.textContent = textContent;
//     ul.appendChild(li);
// }

// addListItem("Muhammad Hassan Raza");



// Task 5
// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

// function changeBgColor(element, newColor) {
//     element.style.backgroundColor = newColor;
// }

// let elementToChangeBg = document.getElementById("docBody");
// changeBgColor(elementToChangeBg, "grey");



// Task 6
// 6. Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

// function saveObjectToLocalStorage(key, obj) {
//     let objAsString = JSON.stringify(obj);
//     localStorage.setItem(key, objAsString);
// }

// let aboutStudent = {
//     name: "Muhammad Hassan Raza",
//     rollNo: "JS-125090",
//     city: "Karachi"
// };

// saveObjectToLocalStorage("aboutStudent", aboutStudent);



// Task 7
// 7. Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

// function getObjectFromLocalStorage(key) {
//     const objAsString = localStorage.getItem(key);
//     let obj = JSON.parse(objAsString);
//     return obj;
// }

// let aboutStudent = getObjectFromLocalStorage("aboutStudent");
// console.log(aboutStudent)



// Task 8
// 8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

// function savePropertyToLocalStorage(obj) {
//     for (let [key, value] of Object.entries(obj)) {
//         localStorage.setItem(key, JSON.stringify(value));
//     }
//     const retrievedObj = {};
//     for (const key of Object.keys(obj)) {
//         retrievedObj[key] = JSON.parse(localStorage.getItem(key));
//     }
//     return retrievedObj;
// }

// let aboutStudent = {
//     name: "Muhammad Hassan Raza",
//     whatsapp: 03462480846,
//     rollNo: "JS-125090",
//     city: "Karachi"
// };

// let retrievedObj = savePropertyToLocalStorage(aboutStudent);
// console.log(retrievedObj);