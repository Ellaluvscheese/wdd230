const fruitDiv = document.querySelector(".divChecks")
const url = './data/fruit.json';

function displayFruit(data){
    data.forEach(f => {
        let check = document.createElement("label");
        check.classList.add("radioLabel");
        let checkHTML = `
        <input class='deezNuts' type="checkbox" name="${f.name}" id="${f.id}">
        ${f.name}
        `
        check.innerHTML = checkHTML;
        fruitDiv.appendChild(check);
    });
}

async function getFruitData(){
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();

        displayFruit(data);
    }
    else{
        console.error("NO WORK")
    }
}

getFruitData();