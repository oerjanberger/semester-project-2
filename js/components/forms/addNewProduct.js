import { baseUrl } from "../../data/api.js";
import { getToken } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";
import MESSAGES from "../../constants/messages.js";

export default async function addNewProduct(title, description, price, image, alt, featured) {
    const url = baseUrl + "products";
    const data = JSON.stringify({ title: title, description: description, price: price, image: image, alt: alt, featured: featured })
    const token = getToken();
    const addProductForm = document.querySelector(".add__product__form");

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json)
        if (json.created_at) {
            displayMessage("success", MESSAGES.productCreated, ".message__container");
            addProductForm.reset();
        }
        if (json.error) {
            console.log(json.message)
            displayMessage("error", MESSAGES.error, ".message__container")
        }
    } catch (error) {
        console.log(error);
        displayMessage("error", MESSAGES.error, ".message__container");
    }
}