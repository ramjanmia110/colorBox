let box = document.getElementById("box");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn10 = document.querySelector(".btn10");
let reset =document.querySelector(".reset")


btn1.addEventListener("click", function() {
    box.classList.add("black");
});

btn2.addEventListener("click", function() {
    box.classList.add("white");
});

btn3.addEventListener("click", function() {
    box.classList.add("red");
});

btn4.addEventListener("click", function() {
    box.classList.add("blue");
});

btn5.addEventListener("click", function() {
    box.classList.add("yellow");
});

btn6.addEventListener("click", function() {
    box.classList.add("green");
});

btn7.addEventListener("click", function() {
    box.classList.add("orange");
});

btn8.addEventListener("click", function() {
    box.classList.add("pink");
});

btn9.addEventListener("click", function() {
    box.classList.add("purple");
});

btn10.addEventListener("click", function() {
    box.classList.add("brown");
});

reset.addEventListener("click", function(){
    box.classList.remove("black", "white", "red", "blue", "yellow", "green", "orange", "pink", "purple", "brown");
    box.style.backgroundColor = 'tomato';
    
})
