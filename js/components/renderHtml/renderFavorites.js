import MESSAGES from "../../constants/messages.js";
import displayMessage from "../common/displayMessage.js";
import { getProductFromFavorites } from "../../utils/storage.js";
import removeProductFromFavorites from "../buttons/removeProductFromFavorites.js";

export default function renderFavorites() {
    const favorites = getProductFromFavorites();
    const favoritesContainer = document.querySelector(".favorite__grid");
    const favoriteMessage = document.querySelector(".message__container");

    favoritesContainer.innerHTML = "";
    favoriteMessage.innerHTML = "";
    if (favorites.length === 0) {
        displayMessage("warning", MESSAGES.noFavorites, ".message__container");
    }

    favorites.forEach((product) => {
        const favoritesPrice = parseFloat(product.price);
        const favoritesId = parseFloat(product.id);

        favoritesContainer.innerHTML += `<div class="product__card">
        <div class="favorite__icon__container"><i class="fas fa-heart favorite__button" data-id="${favoritesId}"></i></div>
        <a href="">
            <div class="product__img__container"><img src="${product.image}" alt="${product.alt}" class="product__image"></div>
            <div class="product__card__info">
                <h3>${product.title}</h3>
                <p class="product__card__price">NOK ${favoritesPrice},-</p>
            </div>
        </a>
        <div class="button__container">
            <a href="product_details.html?id=${favoritesId}"><button class="standard__cta__btn">View product</button></a>
            <a href="edit.html?id=${favoritesId}"><button class="standard__cta__btn edit__btn">Edit product</button></a>
        </div>
    </div>`;
    });
    removeProductFromFavorites()
};