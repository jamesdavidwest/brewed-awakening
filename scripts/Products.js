import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productsHTML = '<ul>'

    for (const product of products) {
        productsHTML += `<li data-type="product"
        data-product-id="${product.id}"
        >${product.name}
        </li>`;
    }

    productsHTML += '</ul>'

    return productsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {
            const productId = +(itemClicked.dataset.productId)

            const clickedProduct = products.find(product => product.id === productId)

            if (clickedProduct) {
                window.alert(`${clickedProduct.name} costs $${clickedProduct.price.toFixed(2)}`)
            } else {
                window.alert("Product not found.")
        }
    }       
})