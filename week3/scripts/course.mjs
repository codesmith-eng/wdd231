const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        {
            sectionNumber: 1,
            enrolled: 88,
            instructor: "Brother Bingham",
        },
        {

            sectionNumber: 2,
            enrolled: 81,
            instructor: "Sister Shultz",
        },
        {
            sectionNumber: 3,
            enrolled: 95,
            instructor: "Sister Smith",
        },
    ],

    changeEnrollment: function (sectionNumber, add = true) {
        // Find the section with the given section number
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNumber == sectionNumber
        );
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
        }
    },
};

//This line of code export this object to another file for use
//This is the default export file thats why its not having a curly brackets after it 
export default byuiCourse;