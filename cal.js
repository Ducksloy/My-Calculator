// Append a value to the display
function appendValue(value) {
  const resultField = document.getElementById('result');
  resultField.value += value;
}

// Clear the entire display
function clearResult() {
  const resultField = document.getElementById('result');
  resultField.value = '';
}

// Remove the last character from the display
function backspace() {
  const resultField = document.getElementById('result');
  resultField.value = resultField.value.slice(0, -1);
}

// Calculate the result of the entered expression
function calculate() {
  const resultField = document.getElementById('result');
  try {
    // Evaluate the expression
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = 'Error'; // Display error for invalid input
  }
}
