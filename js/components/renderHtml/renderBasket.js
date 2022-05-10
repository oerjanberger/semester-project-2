import MESSAGES from "../../constants/messages.js"
import { getProductFromBasket } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";
import { plusProduct, minusProduct } from "../buttons/adjustQuantity.js";
import { clearBasketFromStorage } from "../../utils/storage.js";
import removeProductFromBasket from "../buttons/removeProductFromBasket.js";

export default function renderBasket() {
    const basket = getProductFromBasket();
    const basketContainer = document.querySelector(".basket__grid");
    const basketMessage = document.querySelector(".message__container")
    const totalSum = document.querySelector(".total__sum")
    const clearBasketBtn = document.querySelector(".clearbtn")

    basketContainer.innerHTML = "";
    basketMessage.innerHTML = "";
    let sum = 0.00;

    if (basket.length === 0) {
        displayMessage("warning", MESSAGES.nobasket, ".message__container");
        totalSum.innerHTML = "NOK 0,00,-"
    }

    basket.forEach(function (product) {
        const sumPriceSpecificProduct = parseFloat(product.price).toFixed(2) * parseFloat(product.quantity);
        sum += sumPriceSpecificProduct;
        const totalPrice = sum.toFixed(2);

        basketContainer.innerHTML += `<div class="basket__card">
                                        <div class="basket__img__container">
                                            <img src="${product.image}" alt="${product.alt}" class="basket__img">
                                        </div>
                                        <div class="basket__info__container">
                                            <h5>${product.title}</h5>
                                            <i class="fas fa-trash product__trash" data-id="${product.id}"></i>
                                            <div class="counter__container">
                                                <i class="fas fa-minus counter__icon" data-id="${product.id}"></i>
                                                <div class="count__container">${product.quantity} item(s)</div>
                                                <i class="fas fa-plus counter__icon" data-id="${product.id}"></i>
                                            </div>
                                            <p>NOK ${sumPriceSpecificProduct},-</p>
                                        </div>
                                    </div>`

        totalSum.innerHTML = `NOK ${totalPrice},-`
    });
    clearBasketBtn.addEventListener("click", clearBasketFromStorage);

    const removeProductBtn = document.querySelectorAll(".product__trash");
    removeProductBtn.forEach((btn) => { btn.addEventListener("click", removeProductFromBasket) });

    const quantityPlusBtn = document.querySelectorAll(".fa-plus");
    quantityPlusBtn.forEach((btn) => { btn.addEventListener("click", plusProduct) });

    const quantityMinusBtn = document.querySelectorAll(".fa-minus");
    quantityMinusBtn.forEach((btn) => { btn.addEventListener("click", minusProduct) });


}