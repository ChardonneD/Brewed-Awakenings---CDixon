import { Employees } from "./Employees.js";
import { Orders } from "./Orders.js";
import { Products } from "./Products.js";
import { getEmployees, getOrders, getProducts } from "./database.js";

//click event listener access for orders and employes with products totals
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()
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
        } else if (itemClicked.dataset.type === "employee") {
            const employeeId = parseInt(itemClicked.dataset.id)
            const employee = employees.find((emp) => emp.id === employeeId)
            const employeeOrderCount = orders.filter((order) => order.employeeId === employeeId).length

            window.alert(`${employee.name} has sold ${employeeOrderCount} products`)
        }
    }
)

mainContainer.innerHTML = applicationHTML

