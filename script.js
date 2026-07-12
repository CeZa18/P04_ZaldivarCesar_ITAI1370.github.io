
// Fetch and insert the navigation bar from nav.html
fetch("/nav.html")  // Fetch the navigation bar from nav.html from any subfolder on Local + GitHub Pages
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-placeholder").innerHTML = data;

        // Get the navbar element existing in the DOM after it's been inserted
        const navBar = document.getElementById("nav-placeholder");
        // Get the offset position of the navbar
        const stickyOffset = navBar.offsetTop;

        window.addEventListener("scroll", function() {
            if (window.pageYOffset >= stickyOffset) {
                navBar.classList.add("sticky");
            } else {
                navBar.classList.remove("sticky");
            }
        });

    })
    .catch(error => console.error("Error loading navigation:", error));



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