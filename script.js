document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

function showNotification(message, type = "info") {
  const container = document.getElementById("notification-container");
  const notif = document.createElement("div");
  notif.classList.add("notification");

  if (type === "success") notif.style.backgroundColor = "#2e7d32";
  if (type === "error") notif.style.backgroundColor = "#c62828";

  notif.textContent = message;
  container.appendChild(notif);

  // Remove after animation ends
  setTimeout(() => {
    notif.remove();
  }, 3500);
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    showNotification(
      "Thank you for your message! We will get back to you soon.",
      "success"
    );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  } else {
    showNotification("Please fill out all fields.", "error");
  }
}
