 
function appendValue(value) {
  const resultField = document.getElementById('result');
  resultField.value += value;
}

 
function clearResult() {
  const resultField = document.getElementById('result');
  resultField.value = '';
}

 
function backspace() {
  const resultField = document.getElementById('result');
  resultField.value = resultField.value.slice(0, -1);
}

 
function calculate() {
  const resultField = document.getElementById('result');
  try {
 
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = 'Error'; // Display error for invalid input
  }
}
