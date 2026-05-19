//Store the selected elements that we are going to use. 
// This is not required but a good practice with larger programs where the variable will be referenced more than once.
const navigation = document.querySelector(".hamb");
const pressbtn = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
pressbtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    pressbtn.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");
    pressbtn.setAttribute("aria-expanded", isOpen);
});

//This code gets the current date and time of editing the html page and displays it
document.getElementById("lastModified").innerHTML = document.lastModified;


//This line of code gets the current year in the system and and store it in the constant variable named "currentYear"
const currentYear = new Date().getFullYear();


//This code display the current year 
document.getElementById("currentyear").textContent = currentYear;


//the url of the json file is passed into a variable named url
const url = './data/members.json';

const cards = document.querySelector(".grid");


async function getCompany() {
    const response = await fetch(url);  //using fetch api to fetch data from the url
    const data = await response.json(); //converting the fetch data to javascript object using .json()
    displayCompany(data.companies);
}

//function calls
getCompany();



const displayCompany = (companies) => {

    // Clear cards before creating new ones
    cards.innerHTML = "";

    companies.forEach((company) => {

        // Create HTML elements
        let section = document.createElement("section");
        let businessName = document.createElement("h2");
        let phone = document.createElement("p");
        let image = document.createElement("img");
        let category = document.createElement("p");
        let email = document.createElement("p");
        let businessUrl = document.createElement("a");

        // Add data to elements
        businessName.textContent = company.companyName;
        phone.innerHTML = `<span class="underline">PHONE: </span> ${company.phoneNumber}`;
        category.innerHTML = `<span>CATEGORY: </span> ${company.category}`;
        email.innerHTML = `<span>EMAIL: </span> ${company.email}`;

        // Create the <a> element
        businessUrl.href = company.websiteUrl;
        businessUrl.textContent = "Visit Website";
        businessUrl.target = "_blank"; // Open in new tab
        businessUrl.rel = "noopener noreferrer";

        // Image attributes
        image.setAttribute("src", company.imageFile);
        image.setAttribute("alt", `${company.companyName} image`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "290");
        image.setAttribute("height", "200");

        // Append elements to section
        section.appendChild(businessName);
        section.appendChild(image);
        section.appendChild(phone);
        section.appendChild(category);
        section.appendChild(email);
        section.appendChild(businessUrl);


        // Append section to cards container
        cards.appendChild(section);
    });
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#companies");



gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
