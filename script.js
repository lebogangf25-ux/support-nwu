// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// LIVE SEARCH

const searchInput = document.getElementById("searchInput");

const serviceCards = document.querySelectorAll(".service-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    serviceCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

});

// FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }

        else{
            answer.style.display = "block";
        }

    });

});

// FORM VALIDATION

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){

        formMessage.textContent = "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }

    if(!email.includes("@")){

        formMessage.textContent = "Please enter a valid email.";

        formMessage.style.color = "red";

        return;
    }

    if(message.length < 10){

        formMessage.textContent =
        "Message must be at least 10 characters.";

        formMessage.style.color = "red";

        return;
    }

    formMessage.textContent =
    "Message sent successfully!";

    formMessage.style.color = "green";

    contactForm.reset();

});

// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});
// FILTER SUPPORT CARDS

function filterSupport(category){

    const cards = document.querySelectorAll(".support-card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(card.innerText.toLowerCase().includes(category)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

}window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".support-card");

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
const elements = document.querySelectorAll(".service-card, .guide-card, .wellness-box");

window.addEventListener("scroll", () => {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

});