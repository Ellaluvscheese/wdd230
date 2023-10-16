function darkMode() {
    const checkBox = document.querySelector("#myCheck");
    const paragraphs = document.querySelectorAll("p");

    if (checkBox.checked){
        document.body.style.backgroundColor = 'black';
        paragraphs.forEach((p) => {
            p.style.color = 'white';
        });
    }
    else if(checkBox.checked !== true){
        document.body.style.backgroundColor = "";
        paragraphs.forEach((p) => {
            p.style.color = ''; // Set the text color to white
        });
    }

}

const checkBox = document.querySelector("#myCheck");
checkBox.addEventListener("change", darkMode);