import createNav from "./components/common/createNav.js";
import setToFeatured from "./components/buttons/setToFeatured.js"
import validateAddProductForm from "./components/forms/validateAddProductForm.js";

createNav();
setToFeatured();

const successMessage = document.querySelector(".message__container")
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const imageAlt = document.querySelector("#image__alt");

if (title.activeElement || description.activeElement || price.activeElement || imageAlt.activeElement) {
    successMessage.innerHTML = "";
};

const form = document.querySelector(".add__product__form");
form.addEventListener("submit", validateAddProductForm)