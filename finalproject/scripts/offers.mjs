//The url of json and the html that we are referencing was passed as parameters into the function
//The reason serviceUrl and theServices was passed as parameter is because they are used in both functions
//the async function was the one exported because displayServices was part of its body
export async function getServices(serviceUrl, theServices) {
    try {
        const response = await fetch(serviceUrl);
        const data = await response.json();

        displayServices(data.services, theServices);
    } catch (error) {
        console.error("Error fetching services:", error);
    }
}

//the html and variable for iteration was passed as parameter to the function
function displayServices(services, theServices) {

    if (!theServices) return;

    theServices.innerHTML = "";

    services.forEach((service) => {
        let section = document.createElement("section");
        let name = document.createElement("h2");
        let category = document.createElement("span");
        let description = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = service.name;
        category.innerHTML = `<span>Category: </span>${service.category}`;
        description.textContent = service.description;

        image.src = service.image;
        image.alt = service.category;
        image.loading = "lazy";
        image.width = 100;
        image.height = 100;

        section.appendChild(name);
        section.appendChild(category);
        section.appendChild(description);
        section.appendChild(image);

        theServices.appendChild(section);
    });
}