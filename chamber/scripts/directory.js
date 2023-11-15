//"name": "Sarah",
//            "address" : "123 Main Street, Rexburg Idaho",
//            "phone" : "111-111-1111",
//            "websiteURL" : "https://www.rexburg.org",
//            "imgeURL" : "images/example.jpg",
//            "membershipLevel" : "gold"

const url = './data/members.json';
const cards = document.getElementById('gridOrList');

function displayMembers(members){
    members.forEach(member => {
        let section = document.createElement("section");
        section.classList.add('card', 'directory_card');
        let sectionHTML = `
            <img src="${member.imgeURL}" alt="Picture of ${member.name}">
            <h2 class="lineUnder" >${member.name}</h2>
            <p class="space">${member.address}</P>
            <p>${member.phone}</p>
            <p><a href="${member.websiteURL}" id="directoryButton" target="_blank">Website: </a></p>
            
        `
        section.innerHTML = sectionHTML;
        cards.appendChild(section);
    });
};

async function getMemberData() {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();

        displayMembers(data.members);
    }
    else{
        console.error("NO WORK")
    }
};

var layoutGrid = document.getElementById('grid_button');
var layoutList = document.getElementById('list_button');
var directoryView = document.getElementById('gridOrList');

layoutGrid.addEventListener('click', () => {
    if (!layoutGrid.classList.contains('view')){
        layoutGrid.classList.add('view');
        layoutList.classList.remove('view');
        directoryView.classList.add('gridVersion');
        directoryView.classList.remove('listVersion');
    }
});

layoutList.addEventListener('click', () => {
    if (!layoutList.classList.contains('view')){
        layoutList.classList.add('view');
        layoutGrid.classList.remove('view');
        directoryView.classList.add('listVersion');
        directoryView.classList.remove('gridVersion');
    }
});

getMemberData();
