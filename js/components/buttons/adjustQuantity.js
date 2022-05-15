import { getProductFromBasket, saveToBasket } from "../../utils/storage.js";
import renderBasket from "../renderHtml/renderBasket.js";
import basketQuantityCounter from "../common/basketQuantityCounter.js";

export function plusProduct() {
    const id = this.dataset.id
    const currentProductsInBasket = getProductFromBasket();

    const thisProduct = currentProductsInBasket.find((product) => {
        return product.id === id;
    });
    thisProduct.quantity++;
    saveToBasket(currentProductsInBasket)
    renderBasket();
    basketQuantityCounter()
};

export function minusProduct() {
    const id = this.dataset.id
    const currentProductsInBasket = getProductFromBasket();

    const thisProduct = currentProductsInBasket.find((product) => {
        return product.id === id;
    });

    if (thisProduct.quantity > 1) {
        thisProduct.quantity--;
        saveToBasket(currentProductsInBasket)
    } else if (thisProduct.quantity === 1) {
        const newBasket = currentProductsInBasket.filter((product) => product.id !== id);
        saveToBasket(newBasket);
    }
    renderBasket();
    basketQuantityCounter()
}