import { getProductFromBasket, saveToBasket } from "../../utils/storage.js";
import renderBasket from "../renderHtml/renderBasket.js";
import basketQuantityCounter from "../common/basketQuantityCounter.js";

export default function removeProductFromBasket() {
    const id = this.dataset.id;
    const currentProductsInBasket = getProductFromBasket();

    const productExists = currentProductsInBasket.find((product) => {
        return product.id === id;
    });

    if (productExists) {
        const updatedBasket = currentProductsInBasket.filter((product) => product.id !== id);
        saveToBasket(updatedBasket);
        renderBasket();
    }
    basketQuantityCounter()
}