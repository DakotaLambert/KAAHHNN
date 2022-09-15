import { getSeasonings, setSeasonings } from "./database.js"

const Seasonings = getSeasonings()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "seasoning") {
            setSeasonings(parseInt(event.target.value))
        }
    }
)

export const listSeasonings = () => {
    let html = "<ul>"

    for (const seasoning of Seasonings) {
        html += `<li>
        <input type="radio" name="seasoning" value="${seasoning.id}" /> ${seasoning.name}
        </li>`
    }

    html += "</ul>"
    return html
}