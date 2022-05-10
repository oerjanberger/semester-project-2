import MESSAGES from "../../constants/messages.js";
import displayMessage from "../common/displayMessage.js";
import addProductForm from "./addProductForm.js";

export default function validateAddProductForm(event) {
    event.preventDefault();
    const title = document.querySelector("#title");
    const titleError = document.querySelector(".title__error");
    const description = document.querySelector("#description");
    const descriptionError = document.querySelector(".description__error");
    const price = document.querySelector("#price");
    const priceError = document.querySelector(".price__error");
    const image = document.querySelector("#image");
    const imageError = document.querySelector(".image__error");
    const imageAlt = document.querySelector("#image__alt");
    const imageAltError = document.querySelector(".image__alt__error");
    const featuredInput = document.querySelector(".featured__checkbox");

    titleError.innerHTML = "";
    descriptionError.innerHTML = "";
    priceError.innerHTML = "";
    imageError.innerHTML = "";
    imageAltError.innerHTML = "";

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = price.value.trim();
    const imageFile = image.value;
    const imageAltValue = imageAlt.value;
    const featuredValue = featuredInput.value;

    if (titleValue.length < 5) {
        displayMessage("warning", MESSAGES.titleError, ".title__error");
    } else if (descriptionValue.length < 20) {
        displayMessage("warning", MESSAGES.descriptionError, ".description__error");
    } else if (!imageFile) {
        displayMessage("warning", MESSAGES.imageError, ".image__error");
    } else if (imageAltValue < 5) {
        displayMessage("warning", MESSAGES.imageAltError, ".image__alt__error");
    }

    addProductForm(titleValue, descriptionValue, priceValue, imageFile, imageAltValue, featuredValue)
}