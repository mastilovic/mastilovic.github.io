window.addEventListener("scroll", function() {
    toggleSidebar();
});

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");

    if (window.scrollY > 0) {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
