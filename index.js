const textInput = document.getElementById("textInput");

textInput.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("textInput");
  const outputDiv = document.getElementById("output");
  const convertButton = document.getElementById("convertButton");
  

  convertButton.addEventListener("click", () => {
    const userInput = inputField.value;
    outputDiv.textContent = userInput;
  });
});
