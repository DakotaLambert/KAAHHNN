import { getCarbs } from "./database.js"

const carbs = getCarbs()

export const listCarbs = () => {
    let html = `<ul>`

    for (const carb of carbs) {
        html += `<li>
        <input type="radio" name="carb" value="${carb.id}" /> ${carb.name}
        </li>`
    }

    html += `</ul>`

    return html
}

// document.addEventListener(
//     "change",
//     e => {
//         if (e.target.name="carb") {
//             const carbId = e.target.value

//             setCarbs(carbs.find(carb => carb.id === carbId))
//         }
//     }
// )