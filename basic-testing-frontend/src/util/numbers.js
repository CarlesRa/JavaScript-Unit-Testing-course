import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function cleanNumbers(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}

export function transformToNumber(value) {
  return +value;
}

