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
        const targetId = toggle.getAttribute("data-target");
        const content = document.getElementById(targetId);
        const symbol = toggle.querySelector(".toggle-symbol");

        if (content.classList.contains("open")) {
            symbol.textContent = "-";
        } else {
            symbol.textContent = "+";
        }

        toggle.addEventListener("click", function () {
            content.classList.toggle("open");

            if (content.classList.contains("open")) {
                symbol.textContent = "-";
            } else {
                symbol.textContent = "+";
            }
        });
    });
});