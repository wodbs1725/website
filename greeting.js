const form = document.querySelector(".name-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".name-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit() {
    event.preventDefault();
    const currentValue = input.value;
    greetingUser(currentValue);
    saveName(currentValue);
}

function askUserName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function greetingUser(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요, ${text}님`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askUserName();
    } else {
        greetingUser(currentUser);
    }
}

function init() {
    loadName();
}

init();