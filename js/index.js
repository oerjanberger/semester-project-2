import { baseUrl } from "./data/api.js";
import createNav from "./components/common/createNav.js";
import renderFeatured from "./components/renderHtml/renderFeatured.js";
import displayMessage from "./components/common/displayMessage.js";
import MESSAGES from "./constants/messages.js";

const url = baseUrl + "products?populate=*";
createNav();

(async function getIndexContent() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const products = result.data
        renderFeatured(products)
    }
    catch (error) {
        console.log(error)
        displayMessage("error", MESSAGES.error, ".message__container")
    }
})();
