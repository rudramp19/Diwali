function celebrateDiwali() {
  const message = document.getElementById("diwali-message");
  message.style.opacity = 1; // Show the Diwali message

  // Generate crackers
  for (let i = 0; i < 30; i++) {
    const cracker = document.createElement("div");
    cracker.classList.add("cracker");
    document.body.appendChild(cracker);

    // Random position and delay
    cracker.style.left = Math.random() * 100 + "vw";
    cracker.style.top = Math.random() * 100 + "vh";
    cracker.style.animationDelay = Math.random() + "s";

    // Remove crackers after animation
    setTimeout(() => cracker.remove(), 1000);
  }

  // Hide message after animation
  setTimeout(() => {
    message.style.opacity = 0;
  }, 2000);
}
