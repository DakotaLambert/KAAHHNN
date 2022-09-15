import { getCarbs, setCarbs } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "carb") {
            setCarbs(parseInt(event.target.value))
        }
    }
)

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