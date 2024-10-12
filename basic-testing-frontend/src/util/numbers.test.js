import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should transform a string number to number of type number', () => {
    const input = '2';

    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  it('should transform a string number to number', () => {
    const input = '2';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yield NaN for non-transformable values', () => {
    const invalidValue = 'invalid';
    const invalidValue2 = {};

    const result = transformToNumber(invalidValue);
    const result2 = transformToNumber(invalidValue2);
    const result3 = transformToNumber();

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
    expect(result3).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });
});

