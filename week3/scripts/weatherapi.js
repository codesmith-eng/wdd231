// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//api url for a place called Trier in Germany
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperia&appid=e3334e9fead2e7c7f41445efc5a59596';

//async function that fetch the weather data using fetch api
async function apiFetch() {
    //use try error code block handling all the time to see any errors in the console
    try {
        const response = await fetch(url);  //using fetch() and await
        if (response.ok) {
            const data = await response.json() //converting the fetched data to js
            displayResults(data);  //callling displayResult function and passing the fetched data into it
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//calling apiFetch function
apiFetch();


//function for outputing the fetched weather data to the html using 
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`; //&deg;F is a symbol for degree fahreheit
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}