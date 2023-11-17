let meetDate = new Date();
let dayOfWeek = meetDate.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3){
    let meetGreet = document.getElementById("meetAndGreet");
    meetGreet.style.display = 'block'
}

let x = document.getElementById("closeMeetAndGreet")

if (x.classList.contains('closed')){
    x.classList.remove('closed')
} else {
    
}