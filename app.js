// genaerate pin
function generatePin() {
  //   get 4 digit pin
  const randomNumber = Math.random() * 10000;
  const pin = (randomNumber + "").split(".")[0];
  //   control 4 digit pin
  if (pin.length === 4) {
    return pin;
  } else {
    return generatePin();
  }
}

// Display Pin
function displayPin() {
  const pinInput = document.getElementById("pinInput");
  pinInput.value = generatePin();
}

// calculator btn event handler
const numberContainer = document.getElementById("number-container");
numberContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;

  if (isNaN(digit)) {
    // handle back
    // handle clear
    if (digit === "Clear") {
      const typedPin = document.getElementById("typed-pin");
      typedPin.value = " ";
    }
    if (digit === "Back") {
      const typedPin = document.getElementById("typed-pin");
      typedPin.value = typedPin - 1;
    }
  } else {
    const typedPin = document.getElementById("typed-pin");
    typedPin.value = typedPin.value + digit;
  }
});

// check Pin
function checkPin() {
  const pin = document.getElementById("pinInput").value;
  const typedNumber = document.getElementById("number-container").value;

  if (pin === typedNumber) {
    const correct = document.getElementById("correct-msg");
    correct.style.display = "block";
  } else {
    const incorrect = document.getElementById("incorrect-msg");
    incorrect.style.display = "block";
  }
}
