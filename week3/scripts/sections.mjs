function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");
    sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
};

//This line of code export this js file to other files for use
//This is not a default export so its having a curly bracket after it 
export { setSectionSelection };