function acceptCookies() {
    document.cookie = "cookiesAccepted=true; path=/; max-age=31536000";
    document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
    document.cookie = "cookiesAccepted=false; path=/; max-age=31536000";
    document.getElementById("cookieConsent").style.display = "none";
}

window.onload = function() {
    if (document.cookie.includes("cookiesAccepted=true")) {
        document.getElementById("cookieConsent").style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle the visibility of the nav menu
        navLinks.classList.toggle('active');

        // Check if the hamburger contains the hamburger character (&#9776;)
        if (hamburger.innerHTML === "&#9776;") {
            hamburger.innerHTML = "✖";  // Change to "X"
        } 
        else {
            hamburger.innerHTML = "&#9776;";  // Change back to hamburger
        }
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header'); // Targeting your specific header class

    // Check if the page is scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
function updateTimer() {
    const now = new Date();
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
    nextSunday.setHours(10, 30, 0, 0); // Set Sunday service time to 10:30 AM

    const timeDiff = nextSunday - now;

    if (timeDiff > 0) {
        // Calculate the remaining time
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Update each part of the timer
        document.getElementById("days").innerHTML = `${days}d`;
        document.getElementById("hours").innerHTML = `${hours}h`;
        document.getElementById("minutes").innerHTML = `${minutes}m`;
        document.getElementById("seconds").innerHTML = `${seconds}s`;
    } else {
        // Timer has finished, display the "Service started" message
        document.getElementById("countdown").innerHTML = "Service started!";

        // Set a timer to restart after 2 hours (7200000 ms)
        setTimeout(() => {
            // Reset the timer to the next Sunday
            resetTimerForNextSunday();
        }, 6200000); 
    }
}

// Function to reset the timer to the next Sunday
function resetTimerForNextSunday() {
    const now = new Date();
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
    nextSunday.setHours(10, 30, 0, 0);

    const timeDiff = nextSunday - now;

    if (timeDiff > 0) {
        document.getElementById("countdown").innerHTML = ""; // Clear the message

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Update the timer display
        document.getElementById("days").innerHTML = `${days}d`;
        document.getElementById("hours").innerHTML = `${hours}h`;
        document.getElementById("minutes").innerHTML = `${minutes}m`;
        document.getElementById("seconds").innerHTML = `${seconds}s`;
    }
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

setInterval(updateTimer, 1000);
fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));


document.addEventListener("DOMContentLoaded", () => {
    const imageSource = "src/march - theme (Presentation).png"; // Path to the image

    // Get the image element by its ID
    const imageElement = document.getElementById("themepic");
    if (imageElement) {
        imageElement.src = imageSource; // Set the source of the image
    }
});
const currentYear = new Date().getFullYear();

    document.getElementById("cyear").textContent = currentYear;

    var slides = document.querySelectorAll('.slider-container');
    var dots = document.querySelectorAll('.dot');
    var currentSlide = 0;
    const interval = 9000;
    var timer;
    
    function changeSlide(n) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            dots[i].classList.remove('active');
        }
    
        currentSlide = (n !== undefined) ? n : (currentSlide + 1) % slides.length;
    
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Auto slide
    function startSlider() {
        timer = setInterval(() => changeSlide(), interval);
    }
    
    // Manual slide control
    function manualSlide(n) {
        clearInterval(timer);
        changeSlide(n);
        startSlider();
    }
    
    // Initialize the slider
    document.addEventListener('DOMContentLoaded', function () {
        slides[0].classList.add('active');
        dots[0].classList.add('active');
        startSlider();
    });
    