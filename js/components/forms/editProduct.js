import { baseUrl } from "../../data/api.js";
import { saveToFavorites, getProductFromFavorites, getProductFromBasket, saveToBasket, getToken } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";
import MESSAGES from "../../constants/messages.js";

export default async function editProduct(title, description, price, image, alt, featured, id) {
    const url = `${baseUrl}products/${id}?populate=*`;
    const token = getToken();

    const imageError = document.querySelector(".image__error")
    const imageInput = document.querySelector("#image");
    const imageValue = image;

    let data = JSON.stringify({ Title: title, Description: description, Price: price, Image_alt_text: alt, Featured: featured })

    const imageFault = imageInput.files.length === 0 || imageValue.size > 200000000 || imageValue.type !== "image/jpeg" && imageValue.type !== "image/jpg" && imageValue.type !== "image/png"

    const formData = new FormData();
    formData.append("data", data);

    if (imageInput.files.length > 0 && !imageFault) {
        formData.append("files.Image", image, image.name);
        console.log(image)
        console.log(image.name)
        imageError.innerHTML = "";
    }

    const options = {
        method: "PUT",
        body: formData,
        headers: { "Authorization": `Bearer ${token}` },
        enctype: "multipart/form-data"
    };
    console.log(options)

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        if (json.data.attributes.updated_at) {
            displayMessage("success", MESSAGES.productEdited, ".message__container");
            window.scrollTo(0, 0)

            const newProductImage = product.attributes.Image.data.attributes.url;

            const currentProductsInBasket = getProductFromBasket();
            const productExistInBasket = currentProductsInBasket.find((product) => {
                return product.id === id;
            });

            if (productExistInBasket) {
                const productQuantity = productExistInBasket.quantity;
                const updatedProductsInBasket = currentProductsInBasket.filter(product => product.id !== id);
                saveToBasket(updatedProductsInBasket);

                const updatedProduct = { id: id, title: title, image: newProductImage, alt: alt, price: price, quantity: productQuantity }
                const updatedBasket = getProductFromBasket();
                updatedBasket.push(updatedProduct);
                saveToBasket(updatedBasket);
            }

            const currentFavorites = getProductFromFavorites();
            const productExistsInFavorites = currentFavorites.find((fav) => {
                return fav.id === id;
            })

            if (productExistsInFavorites) {
                const updatedProductsInFavorite = currentFavorites.filter((fav) => fav.id !== id);
                saveToFavorites(updatedProductsInFavorite);

                const updatedProduct = { id: id, title: title, image: newProductImage, alt: alt, price: price };
                const updatedFavorites = getProductFromFavorites();
                updatedFavorites.push(updatedProduct);
                saveToFavorites(updatedFavorites);
            }
        }
        if (json.data.attributes.error) {
            console.log(json.data.attributes.message)
            displayMessage("error", MESSAGES.error, ".message__container")
        }
    } catch (error) {
        console.log(error);
        displayMessage("error", MESSAGES.error, ".message__container");
    }
}