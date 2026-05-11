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


const courses = [
    {
        subject: '✔ CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: '✔ WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: '✔ CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: '✔ WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//getting the element with the class display
let creditOutput = document.querySelector(".display");

//sum all credits in the object array and displaying it on the screen 
const nowCredits = courses.reduce((sum, course) => {
    return sum + course.credits;
}, 0);

//Display result
creditOutput.textContent = `The total credit for the courses below is ${nowCredits}`;





//calling createCourses function
createCourses(courses);

//Event listener to show all courses
const allcourses = document.querySelector("#all");
allcourses.addEventListener("click", () => {

    //display all courses
    createCourses(courses);

    //sum all credits
    const totalCredits = courses.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    //Display result
    creditOutput.textContent = `The total credit for the courses below is ${totalCredits}`;
});


//Event listener to display wdd courses using filter method
const wddcourses = document.querySelector("#wdd");
wddcourses.addEventListener("click", () => {
    const filteredCourses = (courses.filter(mycourse => !mycourse.technology.includes("C#") && !mycourse.technology.includes("Python")));

    //displaying the filtered courses
    createCourses(filteredCourses);

    //sum only six selected credits
    const totalCredits = filteredCourses.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    //Display result
    creditOutput.textContent = `The total credit for the courses below is ${totalCredits}`;
});


//Event listener to display cse courses
const csecourses = document.querySelector("#cse");
csecourses.addEventListener("click", () => {
    const csecourses = (courses.filter(mycourse => !mycourse.technology.includes("HTML")));

    //displaying the filtered courses
    createCourses(csecourses);

    //sum only six selected credits
    const totalCredits = csecourses.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    //Display result
    creditOutput.textContent = `The total credit for the courses below is ${totalCredits}`;

})





//creating function to create course cards 
function createCourses(courses) {

    // Clear the courses div before creating new cards to avoid duplicates when filtering
    document.querySelector(".byucourses").innerHTML = "";
    courses.forEach(mycourse => {

        //creating HTML elements
        let coursenow = document.createElement("div");
        let coursename = document.createElement("p");

        //putting the content of the object(courses) in the created HTML elements
        coursename.innerHTML = `<span></span> ${mycourse.subject} ${mycourse.number}`;

        //appending the children HTML elements to the div elements
        coursenow.appendChild(coursename);

        //change background color
        if (mycourse.subject.includes("✔")) {
            coursenow.style.backgroundColor = "rgb(79, 79, 209)";
        } else {
            coursenow.style.backgroundColor = "darkblue";
        }
        //appending the div element to the class element byucourses
        document.querySelector(".byucourses").appendChild(coursenow);
    });

}
