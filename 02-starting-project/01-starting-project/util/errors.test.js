import { it, expect, describe, beforeAll } from 'vitest';
import { HttpError, ValidationError } from './errors';

const testStatusCode = '500';
const testMessage = 'Unexpected error getting data';
const data = 'data';

describe('HttpError class', () => {
  it('shold create an HttpError object with all arguments provided', () => {
    const error = new HttpError(testStatusCode, testMessage, data);

    expect(error).toEqual(expect.objectContaining({
      statusCode: testStatusCode,
      message: testMessage,
      data: data
    }));
  });
});

describe('ValidationError class', () => {
  it('should create a Validation object with all arguments provided', () => {
    const valiation = new ValidationError(testMessage);

    expect(valiation).toEqual(expect.objectContaining({
      message: testMessage
    }));
  });
});
