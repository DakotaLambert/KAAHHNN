import { getSauces, setSauce } from "./database.js"

document.addEventListener(
    "change",
    e => {
        if (e.target.name === "sauce") {
            setSauce(parseInt(e.target.value))
        }
    }
)

const sauces = getSauces()


//Function generates html for sauces list.
export const listSauces = () => {
    //define a variable with opening html.
    let html = "<ul>"
    //use forEach to iterate sauces array and append string with html for each object.
    sauces.forEach(sauce => {
        html += `<li>
        <input type="radio" name="sauce" value="${sauce.id}">${sauce.name}</input>
        </li>`
    }

    )
    //append string with closing tags.
    html += "</ul>"
    //return string.
    return html
}