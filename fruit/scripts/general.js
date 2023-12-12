const hamburger = document.getElementById("hamburgerButton");
const nav = document.querySelectorAll("nav a");
document.querySelector("#lastModified").textContent = new Date(document.lastModified).toLocaleDateString();
const buyNow = document.querySelectorAll(".buySmoothieButton");

function hamburgerMenuMagic(){
    if (hamburger.innerHTML == "≡"){
        hamburger.innerHTML = "X";
        nav.forEach(a => {
            a.style.display = "block";  
        });
    } else {
        hamburger.innerHTML = "≡";
        nav.forEach(a => {
            a.style.display = "";  
        });
    }
}

buyNow.forEach(b => {
    b.addEventListener("click", () => {
        window.location.href = "https://ellaluvscheese.github.io/wdd230/fruit/order.html"
    })
})

hamburger.addEventListener("click", hamburgerMenuMagic);