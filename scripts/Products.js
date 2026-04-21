import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-id="${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

