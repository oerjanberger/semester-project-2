import MESSAGES from "../../constants/messages.js";
import displayMessage from "../common/displayMessage.js";
import addNewProduct from "./addNewProduct.js";
import { checkPrice, checkLength } from "./validationFunctions.js"

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
    const imageFile = image.files[0];
    const imageAltValue = imageAlt.value.trim();
    const featuredValue = featuredInput.checked;

    var validForm = true;

    if (checkLength(titleValue, 4)) {
    } else {
        displayMessage("warning", MESSAGES.titleError, ".title__error");
        validForm = false;
    };
    if (checkLength(descriptionValue, 19)) {
    } else {
        displayMessage("warning", MESSAGES.descriptionError, ".description__error");
        validForm = false;
    };
    if (checkPrice(priceValue)) {
    } else {
        displayMessage("warning", MESSAGES.priceError, ".price__error");
        validForm = false;
    };
    if (image.files.length === 0 || imageFile.size > 200000000 || imageFile.type !== "image/jpeg" && imageFile.type !== "image/jpg" && imageFile.type !== "image/png") {
        displayMessage("warning", MESSAGES.imageError, ".image__error");
        validForm = false;
    }
    if (checkLength(imageAltValue, 1)) {
    } else {
        displayMessage("warning", MESSAGES.imageAltError, ".image__alt__error");
        validForm = false;
    };
    if (validForm) {
        addNewProduct(titleValue, descriptionValue, priceValue, imageFile, imageAltValue, featuredValue)
    }

}