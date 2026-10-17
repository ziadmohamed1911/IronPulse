/* ============== mobile menu ============== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const toggleIcon = document.querySelector("#toggle-icon");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggleIcon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("open"));
});

// close after tapping a link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

// close with Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
});

/* ============== contact form ============== */

// To receive real messages, create a free form at formspree.io (or a similar
// service) and paste its URL here, e.g. "https://formspree.io/f/xxxxxxxx".
// While this is empty, the form only simulates sending.
const FORM_ENDPOINT = "";

const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");
const submitBtn = document.querySelector("#submit-btn");

// validation rules, keyed by each input's name attribute
const rules = {
    fullName: (value) => value.trim().length >= 3 || "Please enter your full name.",
    phone: (value) => /^\+?[0-9\s-]{8,15}$/.test(value.trim()) || "Please enter a valid phone number.",
    plan: (value) => value !== "" || "Please choose a plan.",
};

function validateField(input) {
    const rule = rules[input.name];
    if (!rule) return true;

    const result = rule(input.value);
    const valid = result === true;
    const field = input.closest(".field");

    field.classList.toggle("invalid", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    field.querySelector(".field-error").textContent = valid ? "" : result;
    return valid;
}

function showStatus(text, isError = false) {
    statusMessage.textContent = text;
    statusMessage.classList.toggle("error", isError);
}

async function sendForm() {
    // no endpoint yet: simulate a short network delay
    if (!FORM_ENDPOINT) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        return;
    }

    const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
    });

    if (!response.ok) throw new Error("Request failed");
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    showStatus("");

    const inputs = [...form.querySelectorAll("input, select")];
    const results = inputs.map(validateField);

    if (results.includes(false)) {
        inputs[results.indexOf(false)].focus();
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
        await sendForm();
        form.reset();
        showStatus("Thanks! We’ll get back to you within 24 hours.");
    } catch (error) {
        showStatus("Something went wrong. Please try again or call us.", true);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    }
});

// clear an error as soon as the user fixes the field
form.addEventListener("input", (event) => {
    if (event.target.closest(".field.invalid")) validateField(event.target);
});

form.addEventListener("change", (event) => {
    if (event.target.closest(".field.invalid")) validateField(event.target);
});