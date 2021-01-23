// array
// array is room 
// start 0
// 0, 1, 2, 3, 4, 5,........

// var fruits = ['apple', 'mango', 'orange', 'banana', 'lemon', 'stawberry'];
// console.log(fruits); // all
// console.log(fruits[3]); // select room
// console.log(fruits[3][4]); // select room and select text
// for (let i = 0; i < 6; i++) {
//     console.log(fruits[i]); // select room with for loop
// }
// for (let i = 0; i < 6; i++) {
//     console.log(fruits[i][3]); // select room and select text with for loop
// }


// var fruits =[
//     ['apple', 'red'],
//     ['mango', 'green'],
//     ['orange', 'orange'],
//     ['banana', 'yellow'],
//     ['stawberry', 'pink']
// ];
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits[3][1]);
// for (let i = 0; i < 5; i++){
//     for (let j = 0; j< 2; j++){
//         console.log(fruits[i][j]);
//     }
// }

// var fruits =[
//     ['apple', 'red'],
//     ['mango', 'green'],
//     ['orange', 'orange'],
//     ['banana', 'yellow', ['price', '300Kyats']],
//     ['stawberry', 'pink']
// ];
// console.table(fruits);
// var i = 0;
// while(i < 5) {
//     console.log(fruits[i]);
//     i++;
// };


// //object
// //object key => value;
// var student = {
//     name: 'Mg Hla',
//     age: 30,
//     phone: 091234567,
//     job: {
//         first: 'staff',
//         second: 'sinor staff',
//         third: 'manager'
//     }
// };
// console.log(student);
// console.log(student.job);
// console.log(student.job.second);
// console.log(window); // Window Objects Modal || Browser Objects Model (BOM)


// Document Objects Modeln (DOM)
// Parent Nodes & Child Nodes || Children Nodes

// // DOM id
// var idHeader = document.getElementById('header'); // by id get element
// console.log(idHeader);

// // DOM class
// var classHeader = document.getElementsByClassName('header'); // by class get array
// console.log(classHeader);

// // DOM tag
// var tagName = document.getElementsByTagName('h2'); // by tag get array same class
// console.log(tagName);

// // DOM querselector
// var testQueryselector = document.querySelector('.test h1'); 
// console.log(testQueryselector);


// // innerText $ innerHTML
// var idHeader = document.getElementById('header');
// idHeader.innerText = "By calass, Inner text successfully!"; //inner text can change text
// idHeader.innerHTML = "<h5>By calass, Inner text successfully!</h5>"; // inner html can change element

// var classHeader = document.getElementsByClassName('header');
// classHeader[0].innerText = "By id, Inner text Successfully!";  
// classHeader[0].innerHTML = "<h5>By id, Inner text Successfully!</h5>";  





