import MESSAGES from "../../constants/messages.js"
import { getProductFromBasket } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";

export default function renderBasket() {
    const basket = getProductFromBasket();
    const basketContainer = document.querySelector(".basket__grid");
    const basketMessage = document.querySelector(".basket__message__container")
    const totalPriceContainer = document.querySelector(".total__price__container")

    basketContainer.innerHTML = "";
    basketMessage.innerHTML = "";
    if (basket.length === 0) {
        displayMessage("warning", MESSAGES.nobasket, ".basket__message__container");
    }

    let sum = 0.00;

    basket.forEach(function (product) {
        const basketPrice = parseFloat(product.price);
        sum += basketPrice;
        const totalPrice = sum.toFixed(2);

        basketContainer.innerHTML += `<div class="basket__card">
                                        <div class="basket__img__container">
                                            <img src="${product.image}" alt="${product.alt}" class="basket__img">
                                        </div>
                                        <div class="basket__info__container">
                                            <h5>${product.title}</h5>
                                            <i class="fas fa-trash product__trash"></i>
                                            <div class="counter__container">
                                                <i class="fas fa-minus counter__icon"></i>
                                                <div class="count__container">1 item(s)</div>
                                                <i class="fas fa-plus counter__icon"></i>
                                            </div>
                                            <p>NOK ${basketPrice},-</p>
                                        </div>

                                    </div>
        `
        totalPriceContainer.innerHTML = `<h4>Total price</h4>
                                        <p>NOK ${totalPrice},-</p>`
    })
}