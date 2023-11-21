function darkMode() {
    const checkBox = document.querySelector("#myCheck");
    const paragraphs = document.querySelectorAll("p");
    const h3s = document.querySelectorAll("h3");
    const cards = document.querySelectorAll("section");
    const side = document.querySelectorAll("div");
    const nav = document.querySelector(".navigation");
    const head = document.querySelector("header");
    const h2s = document.querySelectorAll("h2");
    // const navHov = document.querySelector('.navigation a:hover');
    const foot = document.querySelector('footer');
    const logo = document.querySelector('.logo');
    const discH1 = document.getElementById('discH1');
    const menu = document.getElementById("menu");
    const discH2 = document.querySelectorAll(".discH2");
    const discPic = document.querySelectorAll(".discoverPics");
    // const button = document.querySelectorAll(".gridListButtons");
    // const directH2 = document.querySelectorAll(".directory_card .lineUnder");
    // const listVerPink = document.querySelectorAll(".listVersion section:nth-child(odd)");
    // const li = document.querySelectorAll("ul");
    // const label = document.querySelectorAll("#label")
    const GoldH2 = document.getElementById("joinH2Gold");



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
        nav.style.backgroundColor = '#960d42';
        menu.style.backgroundColor = '#960d42';
        head.style.backgroundColor = '#344656';
        h2s.forEach((h) => {
            h.style.backgroundColor = "#3b4a31"
        })
        foot.style.backgroundColor = '#344656';
        logo.style.borderColor = "white";
        discH1.style.backgroundColor = '';
        discH1.style.color = 'white';
        discH2.forEach((h) => {
            h.style.backgroundColor = "";
            h.style.color = "white";
        })
        discPic.forEach((p) => {
            p.style.borderColor = 'white';
        })
        // button.forEach((b) => {
        //     b.style.backgroundColor = "#344656";
        // })
        // directH2.forEach((h) => {
        //     h.style.borderColor = 'white';
        // })
        // listVerPink.forEach((p) => {
        //     p.style.backgroundColor = '#960d42';
        // })
        // li.forEach((l) => {
        //     l.style.color = "white";
        // })
        // label.forEach((lbl) => {
        //     lbl.style.color = "white";
        // })
        // GoldH2.forEach((h) => {
        //     h.style.color = "white"
        // })

        GoldH2.style.color = "white"

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
        nav.style.backgroundColor = '';
        menu.style.backgroundColor = '';
        head.style.backgroundColor = '';
        h2s.forEach((h) => {
            h.style.backgroundColor = ""
        })
        foot.style.backgroundColor = '';
        logo.style.borderColor = "";
        discH1.style.color = '';
        discH2.forEach((h) => {
            h.style.color = "";
        })
        discPic.forEach((p) => {
            p.style.borderColor = '';
        })
    }

}

const checkBox = document.querySelector("#myCheck");
checkBox.addEventListener("change", darkMode);