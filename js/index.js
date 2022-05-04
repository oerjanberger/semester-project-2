import { baseUrl } from "./constants/api.js";
import createNav from "./components/common/createNav.js";
import renderFeatured from "./components/products/renderFeatured.js";

const url = baseUrl + "products?populate=*";
createNav();

(async function getAllProducts() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const products = result.data
        console.log(products)

        renderFeatured(products)
    }
    catch (error) {
        console.log(error)
    }
})();
