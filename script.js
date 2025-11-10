// Select the theme toggle button and body
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Event listener to toggle dark mode
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") 
    ? "🌙 Light Mode" 
    : "🌞 Dark Mode";
});
