document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#menu-list li");
    const itemDetails = document.getElementById("item-details");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const description = item.getAttribute("data-description");
            itemDetails.style.display = "block";
            itemDetails.innerHTML = `<strong>${item.textContent}</strong><p>${description}</p>`;
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form submission
            const response = document.getElementById("form-response");
            response.style.display = "block";
            response.innerHTML = "<p>Thank you for your message! We'll get back to you soon.</p>";
            contactForm.reset(); // Reset form fields
        });
    }
});
