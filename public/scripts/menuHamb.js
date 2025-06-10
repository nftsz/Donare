document.getElementById("hamburger").addEventListener("click", function () {
    const navLinks = document.getElementById("nav_links");
    const hamburgerIcon = document.querySelector(".hamburger i");
    
    navLinks.classList.toggle("active");
    
    if (navLinks.classList.contains("active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
    } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
    }
});

