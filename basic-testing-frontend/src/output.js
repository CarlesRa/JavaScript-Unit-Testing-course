export function generateResultText(calculationResult) {
  if (calculationResult === 'invalid') {
    return 'Invalid input. You must enter valid numbers.';
  } else if (calculationResult !== 'no-calc') {
    return 'Result: ' + calculationResult;
  }
  return '';
}

export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}