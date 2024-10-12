import { cleanNumbers } from "./util/numbers.js";

export function calculateResult(numberValues) {
  try {
    const numbers = cleanNumbers(numberValues);
    return add(numbers);
  } catch (error) {
    return error.message;
  }
}

export function add(numbers) {
  let sum = 0;
  // throw new Error('Something went wrong');
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
