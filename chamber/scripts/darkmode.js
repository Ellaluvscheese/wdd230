function darkMode() {
    const checkBox = document.querySelector("#myCheck");
    const paragraphs = document.querySelectorAll("p");
    const h3s = document.querySelectorAll("h3");
    const cards = document.querySelectorAll("section");
    const side = document.querySelectorAll("div");

    if (checkBox.checked){
        document.body.style.backgroundColor = 'black';
        h3s.forEach((h) => {
            h.style.color = 'white';
        });
        paragraphs.forEach((p) => {
            p.style.color = 'white';
        });
        cards.forEach((c) => {
            c.style.borderColor = 'white';
        });
        side.forEach((s) => {
            s.style.borderRightColor = 'white';
        });
    }
    else if(checkBox.checked !== true){
        document.body.style.backgroundColor = "";
        h3s.forEach((h) => {
            h.style.color = '';
        });
        paragraphs.forEach((p) => {
            p.style.color = '';
        });
        cards.forEach((c) => {
            c.style.borderColor = '';
        });
        side.forEach((s) => {
            s.style.borderRightColor = '';
        });
    }

}

const checkBox = document.querySelector("#myCheck");
checkBox.addEventListener("change", darkMode);