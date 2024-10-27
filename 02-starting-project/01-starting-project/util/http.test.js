import { it, vi, expect } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testData = { key: 'test' };
const testResponseData = { testKey: 'testData' }

const testFetchFn = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string.');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      }
    };
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetchFn);

it('should return any available response data', () => {

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
  let errorMessage;
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }
  expect(errorMessage).not.toBe('Not a string');
});

it('should throw an HttpError in case of non-ok responses', () => {
  testFetchFn.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        }
      };
      resolve(testResponse);
    });
  });

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});