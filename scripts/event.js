// function clickEvent() {
//     console.log("Event Click Successfully!");
// }

// function clickEvent() {
//     document.getElementsByTagName('div')[1].innerText = "Click Event : Successfully Change Text!";
//     document.getElementsByClassName('testEvent')[0].innerText = "Click Event : Successfully Change Text!";
//     document.querySelector('.testEvent').innerText = "Click Event : Successfully Change Text!";
// }

document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.testEvent').innerText = "Click Event : Successfully Change Text!";
})