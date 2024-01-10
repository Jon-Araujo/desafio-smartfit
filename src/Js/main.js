import formClear from "./formClear.js";
import { findUnitsCloseOrOpen, findUnitsByPeriod } from "./btnFind.js";

const btnClear = document.getElementById('btn-clear');
btnClear.addEventListener("click", formClear);

const btnFind = document.getElementById('btn-find');
const closeUnits = document.getElementById('close-units');
let radios = document.querySelectorAll('input[name="period"]');
btnFind.addEventListener("click", (e) => {
    e.preventDefault();
    if (radios[0].checked || radios[1].checked || radios[2].checked) {
        findUnitsByPeriod();
    } else {
        findUnitsCloseOrOpen();
    }
});

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", () => {

        closeUnits.checked = false;
    })
}

closeUnits.addEventListener("click", () => {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios[i].checked = false;
        }
    }
})

