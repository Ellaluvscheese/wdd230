let url = new URL(window.location);
let params = url.searchParams;

const fruitURL = "./data/fruit.json"

const fruitContainer = document.getElementById("containerOFruit");
const nutritionContainer = document.getElementById("nutritionCon");
const NAME = document.getElementById("usersName");
const mail = document.getElementById("usersEmail");
const phone = document.getElementById("usersPhone");
const special = document.getElementById("specialInstructions");
const date = document.getElementById("orderDate");
const estimated = document.getElementById("estimatedTime");

const uPhone = params.get('phone');
const uMail = params.get('email');
const uName = params.get('name');
const fruit = params.getAll("checkboxGroup");
const uSpecial = params.get('instructions');
const uDate = params.get("date");
console.log(uDate)

if (!uSpecial){
    special.innerHTML = "None"
} else {
    special.innerHTML = uSpecial
}

fruitContainer.innerHTML = '';
NAME.innerHTML = uName;
mail.innerHTML = uMail;
phone.innerHTML = uPhone;
date.innerHTML = uDate

let purch = localStorage.getItem('purchaseNum');
purch = parseInt(purch) || 0; // Convert to number, default to 0 if NaN
purch += 1;
localStorage.setItem('purchaseNum', purch);



// Loop through each value and create a list item
fruit.forEach(f => {
    const listItem = document.createElement('li');
    listItem.classList.add('fruitLI')
    listItem.textContent = f;
    fruitContainer.appendChild(listItem);
});

function nutrition(data) {
    let cals = []
    let fat = []
    let sugar = []    
    let carbs = []
    let protein = []
    const nutrientLabels = ['Calories', 'Fat', 'Sugar', 'Carbs', 'Protein'];

    fruit.forEach(f => {
        data.forEach(fruitd => {
            if (fruitd.name === f){
                cals.push(fruitd.nutritions.calories)
                fat.push(fruitd.nutritions.fat)
                sugar.push(fruitd.nutritions.sugar)
                carbs.push(fruitd.nutritions.carbohydrates)
                protein.push(fruitd.nutritions.protein)
                console.log(protein)
        }
        })
    })
    let sumsList = [
        cals.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        fat.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        sugar.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        carbs.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
        protein.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    ];

    sumsList.forEach((sum, i) => {
        const listItem = document.createElement('li');
        listItem.classList.add('nutLI')
        listItem.textContent = `${nutrientLabels[i]}: ${sum}`;
        nutritionContainer.appendChild(listItem);
        
    })

}

async function getFruitData() {
    const response = await fetch(fruitURL);

    if (response.ok) {
        const data = await response.json();
        nutrition(data);
    } else {
        console.error("NO WORK");
    }
}

function getCurrentTimePlus10Minutes() {
    const currentDate = new Date();
  
    // Add 10 minutes to the current time
    currentDate.setMinutes(currentDate.getMinutes() + 10);
  
    // Get the hour and minutes
    let hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
  
    // Determine AM/PM
    const amOrPm = hour >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hour = hour % 12 || 12;
  
    // Format the result as "h:mm AM/PM"
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
  
    return formattedTime;
  }
  
  // Example usage:
  const result = getCurrentTimePlus10Minutes();
  estimated.innerHTML = `Estimated Time For Pickup: ${result}`
  console.log(result);
  

getFruitData();