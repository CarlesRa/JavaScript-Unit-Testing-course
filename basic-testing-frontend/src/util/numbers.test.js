import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number to number of type number', () => {
  const input = '2';

  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non-transformable values', () => {
  const invalidValue = 'invalid';

  const result = transformToNumber(invalidValue);

  expect(result).toBeNaN();
});

it('should yield NaN if no value is passed into the function', () => {
  const result = transformToNumber();

  expect(result).toBeNaN();
});