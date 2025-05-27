const textInput = document.getElementById("textInput");

textInput.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("textInput");
  const outputDiv = document.getElementById("output");
  const convertButton = document.getElementById("convertButton");

  (function () {
  const _0xhex =
    "696820616e6a6972206c75206e67617061696e20636f6e76657274206e696820636f64652079616b2c20676162757420626574";
  const _0xmap = {
    decode: function (hex) {
      return Buffer.from(hex, "hex").toString("utf8");
    },
  };
  const _0xlog = console;
  _0xlog["log"](_0xmap.decode(_0xhex));
})();

  

  convertButton.addEventListener("click", () => {
    const userInput = inputField.value;
    outputDiv.textContent = _0xmap.decode(_0xhex);
  });
});

