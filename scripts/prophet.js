//the url of the json file is passed into a variable named url
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector("#cards");

//getProphetData API function 
//this function fetch data from a url  and converts to javascript object using .json();
async function getProphetData() {
    const response = await fetch(url);  //using fetch api to fetch data from the url
    const data = await response.json(); //converting the fetch data to javascript object using .json()
    // console.table(data.prophets);
    //in the data.prophets, the data is like the large box taken from another website and the prophets is the name of the array
    displayProphets(data.prophets); //calling displayProphets and passing the parameter prophets to it
    //the data.prophets says take this large box of information (data) and go to the array name prophets
}

//function calls
getProphetData();




//displayProphets() that loop through data fetch from getProphet()
//The name of the array which is "prophets" is passed as parameter to the displayProphets()
//This function is called in getProphetData() and the data fetched is passed as parameter to the displayProphets()
const displayProphets = (prophets) => {

    // Clear the cards element before creating new cards to avoid duplicates when filtering
    cards.innerHTML = "";
    prophets.forEach((prophet) => {

        //creating HTML elements
        let section = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement("p");
        let placeOfBirth = document.createElement("p");
        let portrait = document.createElement("img");

        //putting data from the data fetch to the html
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthDate.innerHTML = `<span>Date of Birth: </span> ${prophet.birthdate}`;
        placeOfBirth.innerHTML = `<span>Place of Birth: </span> ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "180");
        portrait.setAttribute("height", "200");

        //appending the html to the section element
        section.appendChild(fullName);
        section.appendChild(birthDate);
        section.appendChild(placeOfBirth);
        section.appendChild(portrait);

        //appending the section element to the element with the id "cards" in the html
        cards.appendChild(section);
    });
}
