let today = new Date();
document.querySelector("#currentYear").innerHTML = "&copy;" + today.getFullYear();
document.querySelector("#lastModified").textContent = "Date Modified: " + document.lastModified;