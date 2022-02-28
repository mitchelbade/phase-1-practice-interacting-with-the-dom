const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const submitButton = document.getElementById('submit');
const counter = document.getElementById('counter');


document.addEventListener('DOMContentLoaded' , setInterval(addNum, 1000));

plus.addEventListener("click", addNum);
minus.addEventListener('click', subNum);
heart.addEventListener();
pause.addEventListener();
submitButton.addEventListener();


function addNum() {
    counter.innerText = parseInt(counter.innerText) + 1
};

function subNum() {
    counter.innerText = parseInt(counter.innerText) - 1
};

function like() {
    const num = counter.innerText
    
}