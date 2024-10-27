import { describe, it, expect, vi, beforeEach } from 'vitest';
import { showError } from './dom';
import { Window } from 'happy-dom';

import fs from 'fs';
import path from 'path';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
})


describe('showError()', () => {
  it('should add an error paragraph to the id="errors" element', () => {
    showError('Test');

    const errorsElement = document.getElementById('errors');
    const errorParagraph = errorsElement.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it('should not contain an error paragraph initially', () => {
    const errorsElement = document.getElementById('errors');
    const errorParagraph = errorsElement.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it('should output the provided message in the error paragraph', () => {
    const testErrorMessage = 'Test';

    showError(testErrorMessage);

    const errorsElement = document.getElementById('errors');
    const errorParagraph = errorsElement.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
  });
});