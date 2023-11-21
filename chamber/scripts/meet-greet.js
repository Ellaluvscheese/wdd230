let meetDate = new Date();
let dayOfWeek = meetDate.getDay();

if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3){
    let meetGreet = document.getElementById("meetAndGreet");
    meetGreet.style.display = 'block'
};

var x = document.getElementById("closeMeetAndGreet");

x.addEventListener("click", function(){
    let meetGreet = document.getElementById("meetAndGreet");
    meetGreet.style.display = 'none';
});
