import MESSAGES from "../../constants/messages.js";
import displayMessage from "../common/displayMessage.js";
import { getToken } from "../../utils/storage.js";

export default function renderFeatured(products) {
    if (products.length === 0) {
        return displayMessage("warning", MESSAGES.noResult, ".featured__message__container");
    }

    const featuredContainer = document.querySelector(".featured__container");

    featuredContainer.innerHTML = "";

    products.forEach(function (product) {
        if (product.attributes.Featured) {
            const token = getToken();

            if (token) {
                var productButtons = `<a href="product_details.html?id=${product.id}"><button class="standard__cta__btn">View product</button></a>
                                    <a href="edit.html?id=${product.id}"><button class="standard__cta__btn edit__btn">Edit product</button></a>`
            } else if (!token) {
                var productButtons = `<a href="product_details.html?id=${product.id}"><button class="standard__cta__btn">View product</button></a>`
            }
            const productImage = product.attributes.Image.data.attributes.url;
            const productImageAlt = product.attributes.Image_alt_text;
            const productTitle = product.attributes.Title;
            const productPrice = product.attributes.Price;
            featuredContainer.innerHTML += `<div class="product__card">
            <div class="favorite__icon__container"><i class="fas fa-heart favorite__button"></i></div>
            <a href="">
                <div class="product__img__container"><img src="${productImage}" alt="${productImageAlt}" class="product__image"></div>
                <div class="product__card__info">
                    <h3>${productTitle}</h3>
                    <p class="product__card__price">NOK ${productPrice},-</p>
                </div>
            </a>
            <div class="button__container">
                ${productButtons}
            </div>
        </div>`;
        };
    });
};