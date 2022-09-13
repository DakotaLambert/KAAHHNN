import { getProteins } from "./database.js"

const proteins = getProteins()

//Function generates html for proteins list.
export const listProteins = () => {
    //define a variable with opening html.
    let html = "<ul>"
    //use forEach to iterate proteins array and append string with html for each object.
    proteins.forEach(protein => {
        html += `<li>
        <input type="radio" name="protein" value="${protein.id}">${protein.name}</input>
        </li>`
    }

    )
    //append string with closing tags.
    html += "</ul>"
    //return string.
    return html
}