import createNav from "./components/common/createNav.js";
import setToFeatured from "./components/buttons/setToFeatured.js"
import addNewProduct from "./components/forms/addNewProduct.js";

createNav();
setToFeatured();

const form = document.querySelector(".add__product__form");
form.addEventListener("submit", addNewProduct)