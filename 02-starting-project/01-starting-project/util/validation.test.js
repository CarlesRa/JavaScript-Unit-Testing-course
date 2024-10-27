import { it, expect, describe } from 'vitest';
import { validateNotEmpty } from './validation';
import { ValidationError } from './errors';

const testText = 'test';
const testErrorMessage = 'Error message for test';

describe('validateNotEmpty()', () => {

  it('should thow an error if no text is provided', () => {
    const testFn = () => {
      validateNotEmpty(null, testErrorMessage);
    }
    expect(testFn).toThrow();
  });

  it('should return undefined if arguments are passed correctly', () => {
    expect(validateNotEmpty(testText, testErrorMessage)).toBeUndefined();
  })
})