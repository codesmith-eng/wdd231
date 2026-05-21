//importing js files/modules
import byuiCourse from "./course.mjs";  //Default export and and not needing a curly brackets
import { setSectionSelection } from "./sections.mjs"; //The function is put in curly brackets cos its not the default export
import { setTitle, renderSections } from "./output.mjs";  //These function are put in curly brackets cos they're not the default export



document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);