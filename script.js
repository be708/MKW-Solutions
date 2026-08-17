// ========================================
// MKW SOLUTIONS & SERVICES HUB
// Website JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // Current year automatically
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // WhatsApp buttons
    const whatsappButtons = document.querySelectorAll(".whatsapp-button");

    whatsappButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const phoneNumber = "67579536703";
            const message =
                "Gude MKW Solutions & Services Hub. Mi laik kisim moa save long ol services bilong yupela.";

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");
        });
    });


    // Simple welcome message in browser console
    console.log("MKW Solutions & Services Hub website loaded successfully.");

});
