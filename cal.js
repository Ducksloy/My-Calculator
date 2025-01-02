// Append value to the input
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    const resultField = document.getElementById("result");
    try {
      resultField.value = eval(resultField.value);
    } catch {
      resultField.value = "Error";
    }
  }
  function backspace() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
  }
  