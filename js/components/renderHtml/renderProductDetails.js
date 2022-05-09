export default function renderProductDetails(product) {

    const productDetailsContainer = document.querySelector(".product__details__container");
    const productDetail = product.attributes;
    const productImage = product.attributes.Image.data.attributes.url;
    const productImageAlt = product.attributes.Image.data.attributes.alternativeText
    console.log(product.attributes)

    productDetailsContainer.innerHtml += `
                                            <div class="loading__products"></div>
                                            <div class="product__detail__title">
                                                <h1>${productDetail.Title}</h1>
                                            </div>
                                            <div class="product__detail__grid">
                                                <div class="">
                                                    <div class="favorite__icon__container"><i class="fas fa-heart favorite__button"></i></div>
                                                    <a href="">
                                                        <div class="product__details__img__container"><img
                                                                src="${productImage}" alt="${productImageAlt}"
                                                                class="product__details__image"></div>
                                                    </a>
                                                </div>
                                                <div class="product__detail__info">
                                                    <h2>Product description</h2>
                                                    <p>${productDetail.Description}</p>
                                                    <p>Nok ${productDetail.Price},-</p>
                                                    <button class="standard__cta__btn add__to__basket" data-id="${product.id}" data-title="${productDetail.Title}" data-price="${productDetail.Price}">Add to basket</button></a>
                                                </div>`;
}



