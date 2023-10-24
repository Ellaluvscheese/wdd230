function darkMode() {
    const checkBox = document.querySelector("#myCheck");
    const paragraphs = document.querySelectorAll("p");
    const h3s = document.querySelectorAll("h3");

    if (checkBox.checked){
        document.body.style.backgroundColor = 'black';
        h3s.forEach((h) => {
            h.style.color = 'white';
        });
        paragraphs.forEach((p) => {
            p.style.color = 'white';
        });
    }
    else if(checkBox.checked !== true){
        document.body.style.backgroundColor = "";
        h3s.forEach((h) => {
            h.style.color = '';
        });
        paragraphs.forEach((p) => {
            p.style.color = ''; // Set the text color to white
        });
    }

}

const checkBox = document.querySelector("#myCheck");
checkBox.addEventListener("change", darkMode);