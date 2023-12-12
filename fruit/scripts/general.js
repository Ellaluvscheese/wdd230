const hamburger = document.getElementById("hamburgerButton");
const nav = document.querySelectorAll("nav a");
document.querySelector("#lastModified").textContent = new Date(document.lastModified).toLocaleDateString();


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

hamburger.addEventListener("click", hamburgerMenuMagic);