const body = document.querySelector('body');
const courses = document.getElementById('Course');
const teachers = document.getElementById("Teachers");
const reviews = document.getElementById("Reviews");
const contacts = document.getElementById("Contacts");
const logo = document.getElementById("Logo");
const menu = document.getElementById("MenuButton");
const windowOfMenu = document.getElementById("WindowMenu"); 
const windowCloseButton = document.getElementById("WindowClose");
const windowCourses = document.getElementById('windowCourses');
const windowTeachers = document.getElementById("windowTeachers");
const windowReviews = document.getElementById("windowReviews");
const windowContacts = document.getElementById("windowContacts");
const windowMainPage = document.getElementById("windowMainMenu");
const form = document.getElementById('formTrial');

courses.addEventListener("click", goToCourse);
teachers.addEventListener("click", goToTeachers);
reviews.addEventListener("click", goToReviews);
contacts.addEventListener("click", goToContacts);
logo.addEventListener("click", goToLogo);

menu.addEventListener("click", goToMenu);
windowCloseButton.addEventListener("click", closeWindowMenu);
windowCourses.addEventListener("click", goToCourseFromMenu = () => {
    windowOfMenu.close()
    goToCourse()
});
windowTeachers.addEventListener("click", goToCourseFromMenu = () => {
    windowOfMenu.close()
    goToTeachers()
});
windowReviews.addEventListener("click", goToCourseFromMenu = () => {
    windowOfMenu.close()
    goToReviews()
});
windowContacts.addEventListener("click", goToCourseFromMenu = () => {
    windowOfMenu.close()
    goToContacts()
});
windowMainPage.addEventListener("click", goToCourseFromMenu = () => {
    windowOfMenu.close()
    goToLogo()
});

function goToCourse() {
    window.location.href = "Course.html"
};

function goToTeachers() {
    window.location.href = "Teachers.html"
};

function goToReviews() {
    window.location.href = "Reviews.html"
};

function goToContacts() {
    window.location.href = "Request.html"  
};

function goToLogo() {
    window.location.href = "index.html"
};

function goToMenu() {
    windowOfMenu.style.animationName = "menuWindowMoveIn";
    windowOfMenu.style.overflow = "visible";
    windowOfMenu.showModal()
    body.style.position = 'fixed'
};

function closeWindowMenu() {
    windowOfMenu.style.animationName = "menuWindowMoveOut";
    setTimeout (function() {
        windowOfMenu.style.overflow = "hidden"
        windowOfMenu.close()
        body.style.position = 'static'
    }, 500) 
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Вы успешно записались на пробный урок!');
  });