import { getUsername } from "../../utils/storage.js";
import stickyNav from "./stickyNav.js";

export default function createNav() {
    stickyNav();

    const { pathname } = document.location;
    const navContainer = document.querySelector(".nav");
    const hamburgerMenu = document.querySelector(".hamburger__label");
    const menuCheckbox = document.querySelector(".hamburger__menu__input");
    const altNavContainer = document.querySelector(".alt__nav__container");
    const username = getUsername();

    let authLink = `<li><a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">
                    Login</a><a href="login.html"><i class="fas fa-user-alt"></i></a></li>`;
    let secondAuthlink = `<li class="alt__nav__user">
    <a href="login.html"><i class="fas fa-user-alt"></i></a>
</li>`;

    if (username) {
        authLink = `<li><a href="add_product.html" class="${pathname === "/add_product.html" ? "active" : ""}">Add Product</a></li>
        <li><a href="" class="">Logout user</a><a href=""><i class="fas fa-user-alt"></i></a></li>`;
        secondAuthlink = `<li class="alt__nav__user">
        <a href="login.html"><i class="fas fa-user-alt"></i></a><div class="logout__user__x">X</div>
    </li>`;
    }

    navContainer.innerHTML = `<ul class="nav__list">
                                <li><a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                                <li><a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a></li>
                                <li><a href="basket.html" class="${pathname === "/basket.html" ? "active" : ""}">Basket </a>
                                <a href="basket.html"><div class="basket__icon__container"><i class="fas fa-shopping-bag" aria-label="shopping basket"></i>
                                <div class="basket__count">2</div></div></a></li>
                                <li><a href="favorites.html" class="${pathname === "/favorites.html" ? "active" : ""}">Favorites</a>
                                <a href="favorites.html"><i class="fas fa-heart"></i></a></li>
                                <li><a href="about.html" class="${pathname === "/about.html" ? "active" : ""}">About us</a></li>
                                ${authLink}
                        </ul>`;

    altNavContainer.innerHTML = `<ul class="alt__navigation">
                                        <li class="alt__nav__basket">
                                            <a href="basket.html"><i class="fas fa-shopping-bag" aria-label="shopping basket"></i></a>
                                            <div class="basket__count">2</div>
                                        </li>
                                        <li class="alt__nav__favorites">
                                            <a href="favorites.html"><i class="fas fa-heart"></i></a>
                                        </li>
                                        ${secondAuthlink}
                                    </ul>`;

    hamburgerMenu.addEventListener("click", toggleNav);

    function toggleNav() {
        if (!menuCheckbox.checked) {
            navContainer.style.display = "block"
        } else if (menuCheckbox.checked) {
            navContainer.style.display = "none"
        }
    };

}
