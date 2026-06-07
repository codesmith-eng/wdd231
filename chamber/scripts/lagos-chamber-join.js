// ==========================================
// 1. DOM ELEMENTS & INITIALIZATION
// ==========================================
const navigation = document.querySelector(".hamb");
const pressbtn = document.querySelector("#menu");
const cards = document.querySelector(".grid");



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


//grabbing the html button to display the modals
const openButton1 = document.querySelector("#openbutton1");
const openButton2 = document.querySelector("#openbutton2");
const openButton3 = document.querySelector("#openbutton3");
const openButton4 = document.querySelector("#openbutton4");

//grabbing the html modal
const dialogBox = document.querySelector("#dialogBox");

//grabbing the content of the dialog box
const dialogHeading = document.querySelector("#dialogBox h2");
const paragraph = document.querySelector(".one");
const dialogSpan = document.querySelector(".two");
const dialogDiv = document.querySelector(".three");
const dialogP = document.querySelector(".four");

// grabbing the close button 
const closeButton = document.querySelector("#closeButton");


//adding content to the dialog box when openbutton1 is pressed
if (openButton1) {
    openButton1.addEventListener("click", () => {
        dialogHeading.innerHTML = "NP MEMBERSHIP"
        paragraph.innerHTML = "No membership fee"
        dialogSpan.innerHTML = "Community networking"
        dialogDiv.innerHTML = "Access to chamber events"
        dialogBox.showModal(); //using showModal method to display the dialog box
    });
}

if (openButton2) {
    //adding content to the dialog box when openbutton2 is pressed
    openButton2.addEventListener("click", () => {
        dialogHeading.innerHTML = "BRONZE MEMBERSHIP"
        paragraph.innerHTML = "Basic advertising"
        dialogSpan.innerHTML = "Training opportunities"
        dialogDiv.innerHTML = "Event discounts"
        dialogBox.showModal(); //using showModal method to display the dialog box
    });
}

if (openButton3) {
    //adding content to the dialog box when openbutton3 is pressed
    openButton3.addEventListener("click", () => {
        dialogHeading.innerHTML = "SILVER MEMBERSHIP"
        paragraph.innerHTML = "All Bronze Benefits"
        dialogSpan.innerHTML = "Featured directory listing"
        dialogDiv.innerHTML = "Additional event discounts"
        dialogBox.showModal(); //using showModal method to display the dialog box
    });
}

if (openButton4) {
    //adding content to the dialog box when openbutton3 is pressed
    openButton4.addEventListener("click", () => {
        dialogHeading.innerHTML = "GOLD MEMBERSHIP"
        paragraph.innerHTML = "All Silver Benefits"
        dialogSpan.innerHTML = "VIP event invitations"
        dialogDiv.innerHTML = "Homepage spotlight advertising"
        dialogP.innerHTML = "Premium business promotion"
        dialogBox.showModal(); //using showModal method to display the dialog box
    });
}

//close the dialog box when closebutton is pressed
//this close button will work for all dialog boxes
if (closeButton) {
    closeButton.addEventListener("click", () => {
        dialogBox.close(); //using the close method to close the dialog box
    });
}


//using urlsearchParams and window.location.search to get the input of the form 
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

const inputDetails = document.querySelector('#result');

const timeStamp = document.querySelector('#timestamp');

//passing the current time the form loads to the timestamp
if (timeStamp) {
    timeStamp.value = new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString()
}

if (inputDetails) {
    inputDetails.innerHTML = `
<p> Name: ${myInfo.get('firstname')} ${myInfo.get('lastname')}</p>
<p>Organizational Title: ${myInfo.get('orgtitle')}</p>
<p>Email Address: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Organizational Name: ${myInfo.get('organization')}</p>
<p>Membership Level: ${myInfo.get('membership')}</p>
<p>Business Description: ${myInfo.get('description')}</p>
<p>Submitted at: ${myInfo.get('timestamp')}</p>`
}