import createNav from "./components/common/createNav.js";
import { baseUrl } from "./data/api.js";
import displayMessage from "./components/common/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import renderProductDetails from "./components/renderHtml/renderProductDetails.js"

createNav();

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
const productSpecificUrl = baseUrl + "products/" + id + "?populate=*";

(async function getProductDetails() {
    try {
        const response = await fetch(productSpecificUrl);
        const json = await response.json();
        const product = json.data
        renderProductDetails(product)

    } catch (error) {
        console.log(error)
        displayMessage("error", MESSAGES.error, ".product__detail__message__container")

    }
})();
renderProductDetails()