import displayMessage from "../common/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import sendLoginData from "./sendLoginData.js";

export default function submitLogin(event) {
    event.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const usernameError = document.querySelector(".username__error");
    const passwordError = document.querySelector(".password__error");

    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    console.log(usernameValue)
    console.log(passwordValue)

    let formIsValid = true;

    if (usernameValue.length === 0) {
        formIsValid = false
        displayMessage("warning", MESSAGES.noUsername, ".username__error");
    };

    if (passwordValue.length === 0) {
        formIsValid = false
        displayMessage("warning", MESSAGES.noPassword, ".password__error");
    };
    if (formIsValid === true) {
        sendLoginData(usernameValue, passwordValue)
    };

}