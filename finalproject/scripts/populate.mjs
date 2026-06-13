//exporting populatingservices

//function for looping through the objects Ourservices
//passing the grabbed html "selectElement" and json file "ourServices" as parameter to the function
export function populateServices(selectElement, ourServices) {
    // Loop through each service object in the services array
    ourServices.forEach(service => {
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