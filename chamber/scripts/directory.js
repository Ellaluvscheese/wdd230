//"name": "Sarah",
//            "address" : "123 Main Street, Rexburg Idaho",
//            "phone" : "111-111-1111",
//            "websiteURL" : "https://www.rexburg.org",
//            "imgeURL" : "images/example.jpg",
//            "membershipLevel" : "gold"

const url = './data/members.json';
const cards = document.getElementById('cards');

function displayMembers(members){
    members.forEach(member => {
        let section = document.createElement("section");
        section.classList.add('card', 'directory_card');
        let sectionHTML = `
            <h2>${member.name}</h2>
            <p>Phone: ${member.phone}</p>
            <p>Website: ${member.websiteURL}</p>
            <img src="${member.imgeURL}" alt="Picture of ${member.name}">
            <p>Membership Level: ${member.membershipLevel}</P>
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

getMemberData();
