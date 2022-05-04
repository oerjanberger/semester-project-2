import { baseUrl } from "./constants/api.js";
import createNav from "./components/common/createNav.js";
import renderProducts from "./components/products/renderProducts.js";
import MESSAGES from "./constants/messages.js"
import displayMessage from "./components/common/displayMessage.js";

let count = 1;
let totalPages = 0;
const previousPage = document.querySelector(".fa-chevron-left")
const nextPage = document.querySelector(".fa-chevron-right")


createNav();

async function getAllProducts() {
    const productUrl = `${baseUrl}products?pagination[page]=${count}&pagination[pageSize]=10&populate=*`;
    try {
        console.log(count);
        const response = await fetch(productUrl);
        const result = await response.json();
        const products = result.data;
        const pages = result.meta;
        totalPages = pages.pagination.pageCount;
        console.log(totalPages);

        renderProducts(products);
        showPreviousPageButton()
        showNextPageButton()

        const paginationContainer = document.querySelector(".pagination__container");
        if (pages.pagination.pageCount >= 2) {
            paginationContainer.style.display = "flex";

            const pageContainer = document.querySelector(".pages__container");
            pageContainer.innerHTML = "";
            pageContainer.innerHTML = `<p>${pages.pagination.page}</p>`;

        } else {
            paginationContainer.style.display = "none";
        }
    }
    catch (error) {
        console.log(error);
        displayMessage("error", MESSAGES.error, ".all__products__grid");
    }
};
getAllProducts();

function showPreviousPageButton() {
    if (count === 1) {
        previousPage.style.display = "none"
    } else {
        previousPage.style.display = "block"
    }
}
function showNextPageButton() {
    if (count >= totalPages) {
        displayMessage("error", MESSAGES.noMoreProducts, ".message__container");
        nextPage.style.display = "none"
    } else {
        nextPage.style.display = "block"
    }
}

function showNextPage() {
    count++;
    getAllProducts();
};

function showPreviousPage() {
    count--;
    getAllProducts();
};

previousPage.addEventListener("click", showPreviousPage);
nextPage.addEventListener("click", showNextPage);