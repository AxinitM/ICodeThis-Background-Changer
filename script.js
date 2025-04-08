const changeColorBtn = document.getElementById("change");
const colorText = document.getElementById("color");
const copyIcon = document.getElementById("copy");

// Generating a random RGB color

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

// Calculating the brightness of the color based on its RGB values
function calculateBrightness(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Changing the background color and adjusting text and icon color
function changeColor() {
  const { r, g, b } = getRandomRGB();
  const newColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;

  const brightness = calculateBrightness(r, g, b);

  // Change the text color depending on the brightness
  if (brightness > 128) {
    colorText.classList.add("dark-text");
    colorText.classList.remove("light-text");
    copyIcon.style.color = "#000";
  } else {
    colorText.classList.add("light-text");
    colorText.classList.remove("dark-text");
    copyIcon.style.color = "#fff";
  }
}

// Copying the current RGB color to the clipboard
function copyColor() {
  const color = colorText.textContent;
  navigator.clipboard.writeText(color).then(() => {
    alert(`Copied: ${color}`);
  });
}

// Adding event listeners to the buttons
changeColorBtn.addEventListener("click", changeColor);
copyIcon.addEventListener("click", copyColor);
