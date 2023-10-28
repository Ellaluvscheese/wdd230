const LAST_VISIT_DATE_KEY = 'last-visit';
const DAY_IN_MILIS = 24*60*60*1000;

function getDiscoverMessage() {
    let message = 'Welcome! Let us know if you have any questions.';
    let lastVisitValue = localStorage.getItem(LAST_VISIT_DATE_KEY)
    let today = new Date();
    if (lastVisitValue != null) {
        lastVisit = parseInt(lastVisitValue);
        daysSinceLastVisit = Math.floor((today - lastVisit) / DAY_IN_MILIS)
        if (daysSinceLastVisit == 1) {
            message = "You last visited 1 day ago. "
        }
        else {
            message = `You last visited ${daysSinceLastVisit} days ago.`
        }
    }
    localStorage.setItem(LAST_VISIT_DATE_KEY, `${today.getTime()}`)
    return message;
}