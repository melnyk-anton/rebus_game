let result = document.getElementById("result");
let answer = document.getElementById("task1");
let button = document.getElementById("button");
let answer2=0;
button.addEventListener('click', (event) => {
    if (answer.value === "github") {answer2++;result.innerText= "Ваш результат: " + answer2;button.setAttribute("disabled", true);}
    else alert("false");
});
let answer3 = document.getElementById("task2");
let button2 = document.getElementById("button2");
button2.addEventListener('click', (event) => {
    if (answer3.value === "рекурсія") {answer2++;result.innerText= "Ваш результат: " + answer2;button2.setAttribute("disabled", true);}
    else alert("false");
});