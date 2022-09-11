const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //form의 기본동작은 새로고침하는것
} else {
   paintGreetings();
}

//link.addEventListener("click", handleLinkClick); //link의 기본동작은 주소를 실행하는것