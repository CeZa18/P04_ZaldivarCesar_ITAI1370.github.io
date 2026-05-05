fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading navigation:", error));

// Get the navbar element
const navBar = document.getElementById("nav-placeholder");
// Get the offset position of the navbar
const stickyOffset = navBar.offsetTop;

function stickyNav() {
    // Check if the page has been scrolled past the navbar's offset
    if (window.pageYOffset >= stickyOffset) {
        navBar.classList.add("sticky-nav"); // add the sticky class to the navbar
    } else {
        navBar.classList.remove("sticky-nav"); // remove the sticky class from the navbar
    }
}

// listener for scroll event to trigger stickyNav function
window.addEventListener("scroll", stickyNav);

// Back to Top Button Functionality
let backToTopButton = document.getElementById("back-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    /* document.body.scrollTop = 0; ## Jumps to the top of the page for Safari */
    /* document.documentElement.scrollTop = 0; */
}