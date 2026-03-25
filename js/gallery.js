function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".gallery-toggle");

    toggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            const content = toggle.nextElementSibling;
            const symbol = toggle.querySelector(".toggle-symbol");

            const isOpen = content.classList.contains("open");

            if (isOpen) {
                content.classList.remove("open");
                toggle.classList.remove("expanded");
                symbol.textContent = "+";
            } else {
                content.classList.add("open");
                toggle.classList.add("expanded");
                symbol.textContent = "-";
            }
        });
    });
});