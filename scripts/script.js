//project overlay
const overlay = document.getElementById("overlay");
const contents = document.querySelectorAll(".popup-content");

document.querySelectorAll(".learn-button").forEach(btn => {
    btn.addEventListener("click", () => {
        const project = btn.dataset.project;

        contents.forEach(c => c.classList.remove("active"));
        document.getElementById(project).classList.add("active");

        overlay.classList.add("open-popup");
    });
});

function closePopup() {
    overlay.classList.remove("open-popup");
}

//profile picture
const pic = document.getElementById("pfp");

pic.addEventListener("mousemove", (e) => {
    const rect = pic.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 30;
    const rotateX = ((y / rect.height) - 0.5) * -30;

    pic.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
});

pic.addEventListener("mouseleave", () => {
    pic.style.transform = "rotateX(0) rotateY(0)";
});