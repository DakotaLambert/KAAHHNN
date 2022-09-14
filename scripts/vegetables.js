import { getVegetables } from "./database.js"

const veggies = getVegetables()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "vegie") {
//             setVegtables(parseInt(event.target.value))
//         }
//     }
// )

export const listVegetables = () => {
    let html = "<ul>"

    for (const veggie of veggies) {
        html += `<li>
        <input type="radio" name="vegie" value="${veggie.id}" /> ${veggie.name}
        </li>`
    }

    html += "</ul>"
    return html
}
