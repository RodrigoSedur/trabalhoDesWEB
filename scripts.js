document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const signupButton = document.getElementById("signup-button");
    const subscribeButton = document.getElementById("subscribe-button");
    const backButton = document.getElementById("back-button");
    const errorMessage = document.getElementById("error-message");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "rodrigo" && password === "1234") {
                window.location.href = "home.html";
            } else {
                errorMessage.textContent = "Login ou senha inválidos. Login correto = 'rodrigo', Senha correta = '1234'";
            }
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", function() {
            document.getElementById("login-box").style.display = "none";
            document.getElementById("signup-box").style.display = "block";
        });
    }

    if (subscribeButton) {
        subscribeButton.addEventListener("click", function() {
            alert("Assinatura realizada com sucesso!");
            window.location.href = "home.html";
        });
    }

    if (backButton) {
        backButton.addEventListener("click", function() {
            document.getElementById("login-box").style.display = "block";
            document.getElementById("signup-box").style.display = "none";
        });
    }

    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(nextSlide, 3000);

        if (nextButton) {
            nextButton.addEventListener("click", nextSlide);
        }

        if (prevButton) {
            prevButton.addEventListener("click", prevSlide);
        }
    }
});

function openVideo(videoUrl) {
    window.location.href = videoUrl;
}
