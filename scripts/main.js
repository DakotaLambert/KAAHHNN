import { KahnGrill } from "./KahnGrill.js";

const mainContainer = document.querySelector("#container");

const createAllHTML = () => {
  mainContainer.innerHTML = KahnGrill();
}

createAllHTML();

document.addEventListener("stateChanged", event => {
  console.log("Shit has changed changing the HTML :)")
  createAllHTML();
})