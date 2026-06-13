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


//gettig the element with the "lastModifed" and using innerHTML syntax to change the date and time it was modified
document.getElementById("lastModified").innerHTML = document.lastModified;

//using the date time function to get the current year and store it in a variable called currentYear
const currentYear = new Date().getFullYear();


//This code get the element with the id "currentyear" and and replace with the current year
document.getElementById("currentyear").textContent = currentYear;

//function for looping through the objects Ourservices
function populateServices(selectElement, servicesArray) {
    // Loop through each service object in the services array
    servicesArray.forEach(service => {
        // Create a new <option> element for the dropdown
        const option = document.createElement("option");

        // Set the value attribute of the option to the service id
        option.value = service.id;
        // Set the visible text of the option to the service name
        option.textContent = service.name;
        // Add the option to the select dropdown
        selectElement.appendChild(option);
    });
}

//importing ourServices json from data in ourservices folder 
import { ourServices } from "../data/ourservices.mjs";

//get the element with the id "service" and store it in a variable called select
const selectElement = document.getElementById("support");


//check if the select element exists to protect it from interacting with other sections of code which may cause error
if (selectElement) {
    populateServices(selectElement, ourServices);
}


//get the element with the class "click" and "today" and store it in a variable called submitClick and timeStamp
const submitClick = document.querySelector(".clickbutton");
const timeStamp = document.querySelector(".todaydate");
//check if the submitClick variable exists to protect it from interacting with other sections of code which may cause error
if (submitClick) {
    //creating a local storage variable to count the number of visits to the site, if there is no value in local storage, 
    // it will default to 0
    let siteVisits = Number(window.localStorage.getItem("homeVisit", "hometime")) || 0;

    //if the siteVisits variable is not equal to 0, it will display the number of visits, otherwise it will display an empty string
    if (siteVisits !== 0) {
        submitClick.textContent = siteVisits;
    } else {
        submitClick.textContent = ` `;
    }

    //increment the siteVisits variable by 1
    siteVisits++;

    //store the new value of siteVisits in local storage with the key "countVisit"
    localStorage.setItem("homeVisit", siteVisits);

    //store the the date of the visit to local storage
    localStorage.setItem("hometime", Date.now());
}

//get the element with the class "appointdate" and "appointdate" and store it in a variable called Appointtime and Appointbutton
const Appointtime = document.querySelector(".appointdate");
const Appointbutton = document.querySelector(".appointclick");

//check if the Appointtime variable exists to protect it from interacting with other sections of code which may cause error
if (Appointtime) {
    //creating a local storage variable to count the number of visits to the site, if there is no value in local storage, 
    // it will default to 0
    let AppointVisits = Number(window.localStorage.getItem("confirmappoint", "confirmdate")) || 0;

    //if the AppointVisits variable is not equal to 0, it will display the number of visits, otherwise it will display an empty string
    if (AppointVisits !== 0) {
        Appointtime.textContent = AppointVisits;
    } else {
        Appointtime.textContent = ` `;
    }

    //increment the AppointVisits variable by 1
    AppointVisits++;

    //store the new value of siteVisits in local storage with the key "AppointVisits"
    localStorage.setItem("confirmappoint", AppointVisits);

    //storing the date of the visit to the local storage
    localStorage.setItem("confirmdate", Date.now());
}



//getting the images 
const Usone = document.querySelector(".expand-ten img");
const Ustwo = document.querySelector(".expand-eleven img");
const Canone = document.querySelector(".expand-six img");
const Cantwo = document.querySelector(".expand-three img");
const Eurone = document.querySelector(".expand-four img");
const Eurtwo = document.querySelector(".expand-five img");
const Asiaone = document.querySelector(".expand-two img");
const Asiatwo = document.querySelector(".expand-seven img");
const Afrione = document.querySelector(".expand-eight img");
const Afritwo = document.querySelector(".expand-ni img");
const Afrithree = document.querySelector(".expand-one img");

//putting the images in array
const Pictures = [Usone, Ustwo, Canone, Cantwo, Eurone, Eurtwo, Asiaone, Asiatwo, Afrione, Afritwo, Afrithree];

//getting the nav buttons 
const All = document.querySelector("#all");
const Usa = document.querySelector("#usa");
const Canada = document.querySelector("#canada");
const Europe = document.querySelector("#europe");
const Asia = document.querySelector("#asia");
const Africa = document.querySelector("#africa");

//creating a filtering function to filter the images
function showFiltered(filterFunction) {
    const filtered = Pictures.filter(filterFunction);

    Pictures.forEach(img => {
        img.parentElement.style.display = "none";
    });

    filtered.forEach(img => {
        img.parentElement.style.display = "block";
    });
}


//connecting buttons to images to filter them
//Displaying all pictures
if (All) {
    All.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();

        Pictures.forEach(img => {
            img.parentElement.style.display = "block";
        });
    });
}

//button for filtering usa pictures
if (Usa) {
    Usa.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Usone || img === Ustwo);
    });
}


//button for filtering canada pictures
if (Canada) {
    Canada.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Canone || img === Cantwo);
    });
}

//button for filtering europe pictures
if (Europe) {
    Europe.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Eurone || img === Eurtwo);
    });
}

//button for filtering Asia pictures
if (Asia) {
    Asia.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Asiaone || img === Asiatwo);
    });
}


//button for filtering Africa pictures
if (Africa) {
    Africa.addEventListener("click", (e) => {
        //The e.preventDefault() Prevent the href="#" from taking the page to top of the page
        e.preventDefault();
        showFiltered(img => img === Afrione || img === Afritwo || img === Afrithree);
    });
}


//using urlsearchParams and window.location.search to get the input of the form 
const myInfo = new URLSearchParams(window.location.search);
if (myInfo) {
    console.log(myInfo);
}

const inputDetails = document.querySelector('#thebooking');

const timeNow = document.querySelector('#timestamp');

//passing the current time the form loads to the timestamp
if (timeNow) {
    timeNow.value = new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString()
}

if (inputDetails) {
    inputDetails.innerHTML = `
<p>Name: <strong>${myInfo.get('firstname')} ${myInfo.get('lastname')}</strong></p>
<p>Email Address: <strong>${myInfo.get('email')}</strong></p>
<p>Phone Number: <strong>${myInfo.get('phone')}</strong></p>
<p>Appointment Date: <strong>${myInfo.get('sessiondate')}</strong></p>
<p>Reason For Appointment: <strong>${myInfo.get('support')}</strong></p>
<p>Your Feedback Message: <strong>${myInfo.get('feedback')}</strong></p>
<p>Submitted at: <strong>${myInfo.get('timestamp')}</strong></p>`
}

//grabbing the form html of the index page
const sub = document.querySelector("#theletter");

//using urlsearchparams to get the email of the user in the index subscription form 
if (sub) {
    sub.innerHTML = `
    <p><strong>${myInfo.get('email')}</strong>`
}

//The file path to the json folder
const serviceUrl = './data/services.json';

const theServices = document.querySelector(".grid-services");


// 1. Fetch data from your JSON source using async/await
async function getServices() {
    try {
        const response = await fetch(serviceUrl);
        const data = await response.json();

        // Pass the array of all companies to our modified display function
        displayServices(data.services);
    } catch (error) {
        console.error("Error fetching services:", error);
    }
}


getServices();


//passing the parameter "services" to the function displayServices
function displayServices(services) {

    // Clear theServices element before creating new cards to avoid duplicates when filtering
    if (!theServices) return;  //This line of code is used to prevent this function from running on pages it is not needed
    theServices.innerHTML = "";

    //service is the iterating variable each time through
    services.forEach((service) => {
        //creating HTML elements
        let section = document.createElement("section");
        let name = document.createElement("h2");
        let category = document.createElement("span");
        let description = document.createElement("p");
        let image = document.createElement("img");

        //putting the content of the json into the html's
        name.innerHTML = `${service.name}`;
        category.innerHTML = `<span>Category: </span>${service.category}`;
        description.innerHTML = `${service.description}`;

        image.setAttribute("src", service.image);
        image.setAttribute("alt", service.category);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");

        //appending the html to the section element
        section.appendChild(name);
        section.appendChild(category);
        section.appendChild(description);
        section.appendChild(image);

        //appending everything to the grid-services html in service html page
        theServices.appendChild(section);
    })
}


const buttonOne = document.querySelector('#mod-one');
const buttonTwo = document.querySelector('#mod-two');
const buttonThree = document.querySelector('#mod-three');

const dialogBox = document.querySelector('#modal');
const dialogP = document.querySelector('#modal p');

const close = document.querySelector('#closeButton');

//adding content to the buttonOne
buttonOne.addEventListener("click", () => {
    dialogP.innerHTML = "Our mission is to create transformational positive change through our experiences which are aimed at capturing the soul of a city, a town or country in a way that allows our guests see the world differently"
    dialogBox.showModal(); // display the content of buttonOne one when it is clicked
})

//adding content to the buttonTwo
buttonTwo.addEventListener("click", () => {
    dialogP.innerHTML = "To create a world with limitless destinations that encourages societal, cultural and economic benefits through tourism"
    dialogBox.showModal(); // display the content of buttonTwo one when it is clicked
})

//adding content to the buttonThree
buttonThree.addEventListener("click", () => {
    dialogP.innerHTML = "Authenticity, Passion, People, Loyalty, Evolve"
    dialogBox.showModal(); // display the content of buttonThree one when it is clicked
})

//close the modal when this button is click 
close.addEventListener("click", () => {
    dialogBox.close(); //using close method to close the modal
})
