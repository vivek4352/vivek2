// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// Dropdown Menu for Mobile
const dropdownParents = document.querySelectorAll('.nav-menu > li');
dropdownParents.forEach(parent => {
    if (parent.querySelector('.dropdown-menu')) {
        parent.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.querySelector('.dropdown-menu');
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
});

// Close dropdown when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!e.target.closest('.nav-menu li')) {
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    }
});

// Responsive adjustments
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('navMenu').style.display = 'flex';
        document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
            dropdown.style.display = '';
        });
    } else {
        document.getElementById('navMenu').style.display = 'none';
    }
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Auto-advance slides every 5 seconds
setInterval(function() {
    plusSlides(1);
}, 5000);
