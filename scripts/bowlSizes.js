import { getBowlSizes, setBowlSizes } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "bowl") {
            setBowlSizes(parseInt(event.target.value))
        }
    }
)

const bowls = getBowlSizes()

export const listBowlSizes = () => {
    let html = `<ul>`

    for (const bowl of bowls) {
        html += `<li>
        <input type="radio" name="bowl" value="${bowl.id}" /> ${bowl.size}
        </li>`
    }

    html += `</ul>`

    return html
}

