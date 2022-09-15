import { getBowlSizes } from "./database.js"

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

