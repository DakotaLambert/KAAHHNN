import { getBowlSizes } from "./database.js"

const bowls = getBowlSizes = () => {
    let html = `<ul>`

    for (const bowl of bowls) {
        html += `<li>
        <input type="radio" name="bowl" value="${bowl.id}" /> ${bowl.name}
        <li>`
    }

    html += `</ul>`

    return html
}

