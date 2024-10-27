import { it, expect, describe } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validateNotEmpty()', () => {

  it('should throw an error if an empty string is provided', () => {
    const testInput = '';

    const testFn = () => validateNotEmpty(testInput);

    expect(testFn).toThrow();
  });

  //MAX TEST
  it('should throw an error if a blank string is provided', () => {
    const testInput = '   ';

    const testFn = () => validateNotEmpty(testInput);

    expect(testFn).toThrow();
  });

  it('should throw an error with the provided error message', () => {
    const testInput = '   ';
    const testErrorMessage = 'Test';

    const testFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(testFn).toThrow(testErrorMessage);
  })

  it('should return undefined if arguments are passed correctly', () => {
    const testText = 'test';
    const testErrorMessage = 'Error message for test';
    expect(validateNotEmpty(testText, testErrorMessage)).toBeUndefined();
  })
})