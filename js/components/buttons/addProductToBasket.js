import { getProductFromBasket, saveToBasket } from "../../utils/storage.js";

export default function addProductToBasket() {
    const addToBasketBtn = document.querySelector(".add__to__basket");

    addToBasketBtn.addEventListener("click", addToBasketClick);

    function addToBasketClick() {
        const id = this.dataset.id;
        const title = this.dataset.title;
        const image = this.dataset.image;
        const alt = this.dataset.alt;
        const price = this.dataset.price;

        const currentProductsInBasket = getProductFromBasket();

        const productExists = currentProductsInBasket.find((basket) => {
            return basket.id === id;
        })

        if (!productExists) {
            const thisProduct = { id: id, title: title, image: image, alt: alt, price: price };
            currentProductsInBasket.push(thisProduct);
            saveToBasket(currentProductsInBasket);
        } else {
            const newProductInBasket = currentProductsInBasket.filter((basket) => basket.id !== id);
            saveToBasket(newProductInBasket);
        };
    }

}