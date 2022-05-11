import { baseUrl } from "../../data/api.js";
import { getToken } from "../../utils/storage.js";

export async function createNewProduct(event) {
    event.preventDefault();
    const token = getToken();
    const form = event.target;
    const url = baseUrl + "products?populate=image";
    const originalFormData = new FormData(form);
    const newData = new FormData();
    const featuredBtn = document.querySelector(".featured__checkbox")
    console.log(token)

    for (const [key, value] of originalFormData.entries()) {
        if (key.includes("files.")) {
            newData.append(key, value);
            originalFormData.delete(key);
        }
    };

    const data = Object.fromEntries(originalFormData.entries());
    console.log(data)
    newData.append("data", JSON.stringify(data));
    const options = {
        method: "POST",
        body: newData,
        headers: { Authorization: `Bearer ${token}` },
        enctype: "multipart/form-data"
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
}