//importing json file from places.mjs
import { places } from "../data/places.mjs";


const navigation = document.querySelector(".hamb");
const pressbtn = document.querySelector("#menu");
const cards = document.querySelector("#card-templates");

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

//function call
displayCompany();

//building cards
function displayCompany() {
    cards.innerHTML = "";
    places.forEach((company) => {
        let section = document.createElement("div");
        let img = document.createElement("img");
        let businessName = document.createElement("h2");
        let figure = document.createElement("figure");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let learnMore = document.createElement("button");


        businessName.textContent = company.name;
        address.textContent = company.address;
        description.textContent = company.description;
        learnMore.textContent = "Learn More";

        img.setAttribute("src", company.image);
        img.setAttribute("alt", `${company.name} image`);
        img.setAttribute("loading", "lazy");


        // Put the image inside the figure tag
        figure.appendChild(img);

        section.appendChild(figure);
        section.appendChild(businessName);
        section.appendChild(address);
        section.appendChild(description);
        section.appendChild(learnMore);

        //putting the looped file in the grabbed html
        cards.appendChild(section);

    });

};

//local storage

// Find the HTML element where we want to display the message
const visitsDisplay = document.querySelector(".page-visits");

// 1. Grab "right now" in milliseconds
const currentTime = Date.now();

// 2. Look at our Local Storage "sticky note" to see when they last visited
const lastVisit = localStorage.getItem("last-visit-time");

// 3. Check if they have NEVER visited before
if (!lastVisit) {
    // If the sticky note is empty, it's their first time!
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions`;
} else {
    // 4. If they HAVE visited before, let's do some math
    // Subtract the old timestamp from the new timestamp to get total milliseconds passed
    const msPassed = currentTime - Number(lastVisit);

    // Convert those milliseconds into whole days
    // (1000ms * 60 seconds * 60 minutes * 24 hours = 86,400,000 ms in one day)
    const msInADay = 1000 * 60 * 60 * 24;
    const daysBetween = Math.floor(msPassed / msInADay);

    // 5. Decide what message to show
    if (daysBetween < 1) {
        // It has been less than 24 hours
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        // It has been exactly 1 day (handles the "day" vs "days" rule)
        visitsDisplay.textContent = `You last visited 1 day ago.`;
    } else {
        // It has been 2 or more days
        visitsDisplay.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

// 6. Crucial Step: Overwrite the old sticky note with "right now" 
// so the computer remembers this visit the NEXT time they come back.
localStorage.setItem("last-visit-time", currentTime);

