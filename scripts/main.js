import { Employees } from "./Employees.js";
import { Orders } from "./Orders.js";
import { Products } from "./Products.js";
import { getProducts } from "./database.js";

//click event listener access for orders and products
const products = getProducts()
const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`

// click event listener for products
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {
            const productId = parseInt(itemClicked.dataset.id)

// Find the product object so we can access its price
        const product = products.find(prod => prod.id === productId)
            window.alert(`${product.name} costs : $${product.price.toFixed(2)}`) // make sure that decimal places was at the tenths place
        }
    }
)

mainContainer.innerHTML = applicationHTML

