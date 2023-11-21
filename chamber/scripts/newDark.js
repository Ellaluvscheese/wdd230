

function darkMode(){
    const checkBox = document.querySelector("#myCheck");
    if (checkBox.checked){
        document.documentElement.style.setProperty("--body-color", "black");
        document.documentElement.style.setProperty("--main-color", "#3b4a31");
        document.documentElement.style.setProperty("--secondary-color", "#960d42");
        document.documentElement.style.setProperty("--secondary-blue", "#344656");
        document.documentElement.style.setProperty("--black", "white");
        document.documentElement.style.setProperty("--white", "black");
        

    }
    else{
        document.documentElement.style.setProperty("--body-color", "#E6DBD0");
        document.documentElement.style.setProperty("--main-color", "#556F44");
        document.documentElement.style.setProperty("--secondary-color", "#CE2767");
        document.documentElement.style.setProperty("--secondary-blue", "#335C81");
        document.documentElement.style.setProperty("--black", "black");
        document.documentElement.style.setProperty("--white", "white");
    }
}

const checkBox = document.querySelector("#myCheck");
checkBox.addEventListener("change", darkMode);