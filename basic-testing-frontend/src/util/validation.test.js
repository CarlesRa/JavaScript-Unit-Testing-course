import { it, expect } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

it('should throw an error if empty string is passed', () => {
  const input = '';

  const resultFn = () => validateStringNotEmpty(input);

  expect(resultFn).toThrow('Invalid input - must not be empty.');
});

it('should throw an error if not string value is provided', () => {
  const input = {};
  const input2 = 24;
  const input3 = [];

  const resultFn = () => validateStringNotEmpty(input);
  const resultFn2 = () => validateStringNotEmpty(input2);
  const resultFn3 = () => validateStringNotEmpty(input3);

  const errorMessageExpected = 'value.trim is not a function';
  expect(resultFn).toThrow(errorMessageExpected);
  expect(resultFn2).toThrow(errorMessageExpected);
  expect(resultFn3).toThrow(errorMessageExpected);
});

it('should not throw an error if not empty string is provided', () => {
  const input = 'not empty string';
  const resultFn = () => validateStringNotEmpty(input);
  expect(resultFn).not.toThrow();
});

it('should throw an error if NaN is passed', () => {
  const input = 'not a number';

  const resultFn = () => validateNumber(input);

  expect(resultFn).toThrow('Invalid number input.');
});

// MAX TESTS

it('should throw an error if a non-numeric value is provided', () => {
  const input = '1';
  const validationFn = () => validateNumber(input);
  expect(validationFn).toThrow();
});

it('should not throw an error, if a number is provided', () => {
  const input = 1;
  const validationFn = () => validateNumber(input);
  expect(validationFn).not.toThrow();
})
