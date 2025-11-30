// ----- Dark Mode Toggle -----

const toggleBtn = document.getElementById("darkToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☼";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update button icon
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☼";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "☾";
        localStorage.setItem("theme", "light");
    }
});
