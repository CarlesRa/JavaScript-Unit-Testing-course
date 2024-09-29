import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

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
