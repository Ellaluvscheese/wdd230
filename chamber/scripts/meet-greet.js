let meetDate = new Date();
let dayOfWeek = meetDate.getDay();
let menu = document.getElementById("menu");
let x = document.getElementById("closeMeetAndGreet");
if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3){
    let meetGreet = document.getElementById("meetAndGreet");

    meetGreet.style.display = 'block';
    // if (menu.classList.contains('opened')){
    //     x.style.position = "absolute"
    //     x.style.top = "45%"
    // }

};


x.addEventListener("click", function(){
    let meetGreet = document.getElementById("meetAndGreet");
    meetGreet.style.display = 'none';
});

function fixX(){
    let menu = document.getElementById("menu");
    if (menu.classList.contains('opened')){
        menu.classList.remove('opened');
    }else{
        menu.classList.add('opened')
    }
}

menu.addEventListener("click", fixX)