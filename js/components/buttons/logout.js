import { clearUserFromStorage } from "../../utils/storage.js";

export default function logout() {
    const logoutBtn = document.querySelectorAll(".logout__btn");
    if (logoutBtn) {
        logoutBtn.forEach((btn) => { btn.addEventListener("click", clearUserFromStorage) });
    };
}