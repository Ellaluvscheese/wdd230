const fruitDiv = document.querySelector(".divChecks");
const url = './data/fruit.json';
const submitButton = document.getElementById("submitButton");
const dateINP = document.getElementById('THEDATE');
const formDate = new Date();
const hidden = document.getElementById('THEDATE');
hidden.value = formDate.toISOString().split('T')[0];




function displayFruit(data) {
    data.forEach(f => {
        let check = document.createElement("label");
        check.classList.add("radioLabel");
        let checkHTML = `
        <input class='deezNuts' type="checkbox" name="checkboxGroup" value="${f.name}" id="${f.id}">
        ${f.name}
        `;
        check.innerHTML = checkHTML;
        fruitDiv.appendChild(check);
    });
}

async function getFruitData() {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        displayFruit(data);
    } else {
        console.error("NO WORK");
    }
}

function checkBoxesSlay() {
    const checkboxes = document.querySelectorAll('input[name="checkboxGroup"]');
    var maxChecks = 3;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            var curr = document.querySelectorAll('input[name="checkboxGroup"]:checked').length;
            checkboxes.forEach(cb => {
                cb.disabled = curr >= maxChecks && !cb.checked;
            });

            if (curr === 3){
                submitButton.type = 'submit';
            } else {
                submitButton.type = "button";
            }
        });
    });
}

async function loadDataAndInitialize() {
    await getFruitData();
    checkBoxesSlay();
}

loadDataAndInitialize();
