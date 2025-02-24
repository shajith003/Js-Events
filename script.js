document.addEventListener("DOMContentLoaded", () => {
    const logContainer = document.getElementById("eventLogs");
    const clickBtn = document.getElementById("clickBtn");
    const textInput = document.getElementById("textInput");
    const eventForm = document.getElementById("eventForm");
    const image = document.getElementById("image");
    const clipboardArea = document.getElementById("clipboardArea");
    const toggleBtn = document.getElementById("toggleEvents");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Apply saved theme from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "🌙 Dark Mode";
    }

    function logEvent(event) {
        const logEntry = document.createElement("p");
        logEntry.textContent = `Event: ${event.type} on ${event.target.tagName}`;
        logContainer.prepend(logEntry);
    }

    function addEventListeners() {
        clickBtn.addEventListener("click", logEvent);
        clickBtn.addEventListener("dblclick", logEvent);
        textInput.addEventListener("keydown", logEvent);
        textInput.addEventListener("keyup", logEvent);
        textInput.addEventListener("keypress", logEvent);
        textInput.addEventListener("focus", logEvent);
        textInput.addEventListener("blur", logEvent);
        eventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            logEvent(e);
        });
        image.addEventListener("dragstart", logEvent);
        image.addEventListener("dragover", logEvent);
        image.addEventListener("drop", logEvent);
        clipboardArea.addEventListener("copy", logEvent);
        clipboardArea.addEventListener("cut", logEvent);
        clipboardArea.addEventListener("paste", logEvent);
        window.addEventListener("resize", logEvent);
        window.addEventListener("scroll", logEvent);
    }

    function removeEventListeners() {
        clickBtn.removeEventListener("click", logEvent);
        clickBtn.removeEventListener("dblclick", logEvent);
        textInput.removeEventListener("keydown", logEvent);
        textInput.removeEventListener("keyup", logEvent);
        textInput.removeEventListener("keypress", logEvent);
        textInput.removeEventListener("focus", logEvent);
        textInput.removeEventListener("blur", logEvent);
        eventForm.removeEventListener("submit", logEvent);
        image.removeEventListener("dragstart", logEvent);
        image.removeEventListener("dragover", logEvent);
        image.removeEventListener("drop", logEvent);
        clipboardArea.removeEventListener("copy", logEvent);
        clipboardArea.removeEventListener("cut", logEvent);
        clipboardArea.removeEventListener("paste", logEvent);
        window.removeEventListener("resize", logEvent);
        window.removeEventListener("scroll", logEvent);
    }

    let eventsEnabled = true;
    toggleBtn.addEventListener("click", () => {
        if (eventsEnabled) {
            removeEventListeners();
            toggleBtn.textContent = "Enable Event Listeners";
        } else {
            addEventListeners();
            toggleBtn.textContent = "Disable Event Listeners";
        }
        eventsEnabled = !eventsEnabled;
    });

    // Dark Mode Toggle with Local Storage
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    addEventListeners();
});
