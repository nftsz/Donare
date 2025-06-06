// FAQ Accordion
document.querySelectorAll(".faq_question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        question.classList.toggle("active");
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
        icon.classList.toggle("fa-chevron-up");
        icon.classList.toggle("fa-chevron-down");
    });
});