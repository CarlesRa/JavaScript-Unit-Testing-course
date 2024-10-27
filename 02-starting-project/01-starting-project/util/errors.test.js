import { it, expect, describe } from 'vitest';
import { HttpError, ValidationError } from './errors';

const testStatusCode = 500;
const testMessage = 'Unexpected error getting data';
const testData = { key: 'test' };

describe('class HttpError', () => {
  it('shold create an HttpError object with all arguments provided', () => {
    const error = new HttpError(testStatusCode, testMessage, testData);

    expect(error).toEqual(expect.objectContaining({
      statusCode: testStatusCode,
      message: testMessage,
      data: testData
    }));

    // MAX TESTS
    expect(error.statusCode).toBe(testStatusCode);
    expect(error.message).toBe(testMessage);
    expect(error.data).toBe(testData);
  });

  // MAX TESTS
  it('should contain undefined as data if no data is provided', () => {
    const error = new HttpError(testStatusCode, testMessage);

    expect(error.data).toBeUndefined();
  })
});

describe('class ValidationError', () => {
  it('should create a Validation object with all arguments provided', () => {
    const validation = new ValidationError(testMessage);

    expect(validation).toEqual(expect.objectContaining({
      message: testMessage
    }));

    // MAX TESTS
    expect(validation.message).toBe(testMessage);
  });
});
