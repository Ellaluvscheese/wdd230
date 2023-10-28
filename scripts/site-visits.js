// create a key
const VISITS_KEY = 'site-visits';

function getSiteVisits(){
// check to see if key exists in local storage
    let currentValue = localStorage.getItem(VISITS_KEY);
  // If key does not exist, initialize they key to 1  
    let siteVisits = 1;

    if (currentValue != null) {
// if Key does exist, add one to the current value
        siteVisits = parseInt(currentValue) + 1;
    }
// save the new value for current visits
    localStorage.setItem(VISITS_KEY, `${siteVisits}`);
    return siteVisits
};
// updated the html page with the current visits
document.getElementById("visitCount").textContent = `${getSiteVisits()}`;