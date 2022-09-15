// IMPORT STATEMENTS GO UP HERE
import { listProteins } from "./proteins.js"
import { listCarbs } from "./Carbs.js"
import { listVegetables } from "./vegetables.js"
import { listSauces } from "./sauces.js";
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder();
        }
    }
)

export const KahnGrill = () => {
    return `
        <h1>Kahn Grill</h1>

        <article class="choices">
            <section class="choices__proteins options">
                <h2>Proteins</h2>
                ${listProteins()}
            </section>
            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${listVegetables()}
            </section>
            <section class="choices__carbs options">
                <h2>Carbs</h2>
                ${listCarbs()}
            </section>
            <section class="choices__sauces options">
                <h2>Sauces</h2>
                ${listSauces()}
            </section>
            <section class="choices__seasonings options">
                <h2>Seasonings</h2>
                
            </section>
            <section class="choices__bowlSizes options">
                <h2>Bowl Sizes</h2>
                
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Food Orders</h2>
            
        </article>
    `
}