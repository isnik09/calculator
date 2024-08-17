const output = document.querySelector(".output");
const buttons = document.querySelectorAll(".btn");
const resetButton = document.querySelector(".reset");

function updateOutput(value) {
  output.textContent += value;
}

function clearOutput() {
  output.textContent = "";
  output.textContent = "0";
}

function deleteLastChar() {
  output.textContent = output.textContent.slice(0, -1);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "C":
        clearOutput();
        break;
      case "=":
        try {
          const result = eval(output.textContent);
          if (result === Infinity || result === -Infinity) {
            alert("Infinity");
            output.textContent = "0";
          } else {
            output.textContent = result;
          }
        } catch (error) {
          alert("Error");
          clearOutput();
          output.textContent = "0";
        }
        break;
      case "del":
        deleteLastChar();
        break;
      default:
        if (output.textContent === "0") {
          output.textContent = "";
        }
        updateOutput(value);
    }
  });
});

resetButton.addEventListener("click", clearOutput);

output.textContent = "0";
