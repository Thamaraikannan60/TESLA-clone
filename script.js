let isScrolling = false;

document.addEventListener("wheel", (event) => {
    if (isScrolling) return;
    isScrolling = true;

    setTimeout(() => {
        isScrolling = false;
    }, 500);

    let direction = event.deltaY > 0 ? 1 : -1;
    let nextScroll = direction * window.innerHeight;

    window.scrollBy({ top: nextScroll, behavior: "smooth" });

    updateModelName(); // Call function to update the model name
});

// Function to update the model name based on scroll position
function updateModelName() {
    let sections = document.querySelectorAll(".car-section"); // Ensure each section has this class
    let modelNameElement = document.querySelector(".model-name");

    sections.forEach((section) => {
        let rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            modelNameElement.textContent = section.dataset.model; // Assuming each section has a data-model attribute
        }
    });
}