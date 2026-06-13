// ==========================================
// 1. DOM ELEMENTS & INITIALIZATION
// ==========================================
const navigation = document.querySelector(".hamb");
const pressbtn = document.querySelector("#menu");
const cards = document.querySelector(".grid");

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#companies");




// Unique URL Configurations
const companyUrl = './data/members.json';
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Lagos&units=metric&appid=e3334e9fead2e7c7f41445efc5a59596`;

// ==========================================
// 2. NAVIGATION & FOOTER METADATA
// ==========================================
if (pressbtn) {
    pressbtn.addEventListener("click", function () {
        navigation.classList.toggle("show");
        pressbtn.classList.toggle("show");
        const isOpen = navigation.classList.contains("show");
        pressbtn.setAttribute("aria-expanded", isOpen);
    });
}

if (document.getElementById("lastModified")) {
    document.getElementById("lastModified").innerHTML = document.lastModified;
}

const currentYear = new Date().getFullYear();
if (document.getElementById("currentyear")) {
    document.getElementById("currentyear").textContent = currentYear;
}

// ==========================================
// 3. COMPANY DIRECTORY LOGIC 
// ==========================================

// 1. Fetch data from your JSON source using async/await
async function getCompany() {
    try {
        const response = await fetch(companyUrl);
        const data = await response.json();

        // Pass the array of all companies to our modified display function
        displayCompany(data.companies);
    } catch (error) {
        console.error("Error fetching companies:", error);
    }
}

getCompany();

const displayCompany = (companies) => {
    if (!cards) return;
    cards.innerHTML = "";
    companies.forEach((company) => {
        let section = document.createElement("section");
        let businessName = document.createElement("h2");
        let phone = document.createElement("span");
        let image = document.createElement("img");
        let category = document.createElement("p");
        let membership = document.createElement("p");
        let email = document.createElement("p");
        let businessUrl = document.createElement("a");

        businessName.textContent = company.companyName;
        phone.innerHTML = `<span class="underline">PHONE: ${company.phoneNumber}</span>`;
        category.innerHTML = `<span>CATEGORY: </span> ${company.category}`;
        membership.innerHTML = `<span>MEMBERSHIP LEVEL: </span> ${company.membershipLevel}`;
        email.innerHTML = `<span>EMAIL: </span> ${company.email}`;

        businessUrl.href = company.websiteUrl;
        businessUrl.textContent = "Visit Website";
        businessUrl.target = "_blank";
        businessUrl.rel = "noopener noreferrer";



        image.setAttribute("src", company.imageFile);
        image.setAttribute("alt", `${company.companyName} image`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "290");
        image.setAttribute("height", "200");



        section.appendChild(businessName);
        section.appendChild(image);
        section.appendChild(phone);
        section.appendChild(category);
        section.appendChild(membership);
        section.appendChild(email);
        section.appendChild(businessUrl);
        cards.appendChild(section);

    });

};


// Grid/List Toggles
if (gridbutton && listbutton && display) {
    gridbutton.addEventListener("click", function () {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", function () {
        display.classList.add("list");
        display.classList.remove("grid");
    });
}



