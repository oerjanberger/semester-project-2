import { BASKET_KEY, FAVORITES_KEY, USERNAME } from "../constants/keys.js";

const tokenKey = "token";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(USERNAME, user);
}

export function getUsername() {
    const user = getFromStorage(USERNAME);

    if (user) {
        return user.username;
    }

    return null;
}

export function saveToFavorites(product) {
    saveToStorage(FAVORITES_KEY, product);
}

export function getProductFromFavorites() {
    const favorites = localStorage.getItem(FAVORITES_KEY);

    if (!favorites) {
        return [];
    }
    return JSON.parse(favorites);
}

export function clearFavorites() {
    localStorage.removeItem(FAVORITES_KEY);
}

export function clearUserFromStorage() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(USERNAME);
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }

    return JSON.parse(value);
}