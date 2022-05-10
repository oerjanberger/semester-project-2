import createNav from "./components/common/createNav.js";
import setToFeatured from "./components/buttons/setToFeatured.js"
import validateAddProductForm from "./components/forms/validateAddProductForm.js";

createNav();
setToFeatured();

const addProductForm = document.querySelector(".add__product__form");
addProductForm.addEventListener("submit", validateAddProductForm)