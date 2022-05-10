import { getProductFromFavorites } from "../../utils/storage.js";
import addProductToFavorites from "../buttons/addProductToFavorites.js";
import addProductToBasket from "../buttons/addProductToBasket.js";

export default function renderProductDetails(product) {
    const productDetailsContainer = document.querySelector(".product__details__container");
    const productDescription = product.attributes.Description;
    const productImage = product.attributes.Image.data.attributes.url;
    const productImageAlt = product.attributes.Image.data.attributes.alternativeText
    const productTitle = product.attributes.Title;
    const productPrice = product.attributes.Price;

    let cssClass = "far";
    const favorites = getProductFromFavorites();
    const isFav = favorites.find((fav) => {
        return parseInt(fav.id) === product.id;
    })

    if (isFav) {
        cssClass = "fas";
    };

    productDetailsContainer.innerHTML += `
        <div class="loading__products"></div>
        <div class="product__detail__title">
            <h1>${productTitle}</h1>
        </div>
        <div class="product__detail__grid">
            <div class="details__img__fav__container">
                <div class="favorite__icon__container"><i class="${cssClass}  fa-heart favorite__button" data-id="${product.id}" data-title="${productTitle}" data-image="${productImage}" data-alt="${productImageAlt}" data-price="${productPrice}"></i></div>
                <a href="">
                    <div class="product__details__img__container"><img
                            src="${productImage}" alt="${productImageAlt}"
                            class="product__details__image"></div>
                </a>
            </div>
            <div class="product__detail__info">
                <h2>Product description</h2>
                <p>${productDescription}</p>
                <p>Nok ${productPrice},-</p>
                <button class="standard__cta__btn add__to__basket" data-id="${product.id}" data-title="${productTitle}" data-price="${productPrice}" data-image="${productImage}" data-alt="${productImageAlt}">Add to basket</button></a>
            </div>`;

    addProductToFavorites();
    addProductToBasket();
}


