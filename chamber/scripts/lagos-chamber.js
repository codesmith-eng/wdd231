// ==========================================
// 1. DOM ELEMENTS & INITIALIZATION
// ==========================================
const navigation = document.querySelector(".hamb");
const pressbtn = document.querySelector("#menu");
const cards = document.querySelector(".grid");

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#companies");

// Weather DOM Elements
const currentTemp = document.querySelector('.temp');
const weatherCloud = document.querySelector('.cloud');
const weatherHumidity = document.querySelector('.humidity');

const tempToday = document.querySelector('.today');
const tempTomorrow = document.querySelector('.tomorrow');
const temptNext = document.querySelector('.nexttomorrow');



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
// 3. COMPANY DIRECTORY LOGIC (SPOTLIGHT MODIFIED)
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

// 2. Filter, randomize, and display 2 or 3 spotlight members
function displayCompany(allCompanies) {
    // Safety check: make sure our target container exists on the page
    if (!cards) return;
    cards.innerHTML = "";

    // Step A: Filter out only Gold or Silver members
    let qualifiedCompanies = [];
    for (let i = 0; i < allCompanies.length; i++) {
        const currentCompany = allCompanies[i];
        const level = currentCompany.membershipLevel.toLowerCase();

        if (level.includes("gold") || level.includes("silver")) {
            qualifiedCompanies.push(currentCompany);
        }
    }

    // Step B: Randomize/Shuffle the qualified members array (Fisher-Yates style)
    for (let i = qualifiedCompanies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = qualifiedCompanies[i];
        qualifiedCompanies[i] = qualifiedCompanies[j];
        qualifiedCompanies[j] = temp;
    }

    // Step C: Limit/Slice the array to display exactly 3 members (change to 2 if preferred)
    const selectedSpotlights = qualifiedCompanies.slice(0, 3);

    // Step D: Loop through our randomly selected spotlights and create their HTML elements
    for (let i = 0; i < selectedSpotlights.length; i++) {
        const company = selectedSpotlights[i];

        // Create HTML structural building elements
        let section = document.createElement("section");
        let businessName = document.createElement("h2");
        let phone = document.createElement("span");
        let address = document.createElement("p");
        let image = document.createElement("img");
        let membership = document.createElement("p");
        let businessUrl = document.createElement("a");

        // Inject dataset values into the items
        businessName.textContent = company.companyName;
        phone.innerHTML = `<span>PHONE: </span> ${company.phoneNumber}`;
        address.innerHTML = `<span>ADDRESS: </span> ${company.companyAddress}`;
        membership.innerHTML = `<span>MEMBERSHIP LEVEL: </span> ${company.membershipLevel}`;

        // Configure layout attributes for the company logo/image
        image.setAttribute("src", company.imageFile);
        image.setAttribute("alt", `${company.companyName} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "290");
        image.setAttribute("height", "200");

        // Setup the interactive action anchor link
        businessUrl.href = company.websiteUrl;
        businessUrl.textContent = "Visit Website";
        businessUrl.target = "_blank";
        businessUrl.rel = "noopener noreferrer";

        // Assemble pieces into the card container block
        section.appendChild(businessName);
        section.appendChild(image);
        section.appendChild(phone);
        section.appendChild(address);
        section.appendChild(membership);
        section.appendChild(businessUrl);

        // Append finalized card layout to the grid container
        cards.appendChild(section);
    }
}

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



// ==========================================
// 5. WEATHER API LOGIC (CONSOLIDATED)
// ==========================================
async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
            displayThreeDayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Weather Fetch Error:", error);
    }
}
fetchWeather();

function displayCurrentWeather(data) {
    const current = data.list[0];

    if (currentTemp) currentTemp.innerHTML = `<span>Temperature: </span>${Math.round(current.main.temp)}&deg;C`;
    if (weatherCloud) weatherCloud.innerHTML = `<span>Weather Description: </span>${current.weather[0].description}`;
    if (weatherHumidity) weatherHumidity.innerHTML = `<span>Humidity: </span>${current.main.humidity}%`;
}

function displayThreeDayForecast(data) {
    const middayForecasts = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));

    if (tempToday && middayForecasts[0]) {
        tempToday.innerHTML = `<span>Today: </span>${Math.round(middayForecasts[0].main.temp)}&deg;C`;
    }
    if (tempTomorrow && middayForecasts[1]) {
        tempTomorrow.innerHTML = `<span>Tomorrow: </span>${Math.round(middayForecasts[1].main.temp)}&deg;C`;
    }
    if (temptNext && middayForecasts[2]) {
        temptNext.innerHTML = `<span>Next Day: </span>${Math.round(middayForecasts[2].main.temp)}&deg;C`;
    }
}