import { describe, it, expect } from 'vitest';
import RegisterPage from './register-page.js';

describe('RegisterPage', () => {
  it('<app-register-page> is an instance of RegisterPage', async () => {
    const element = document.createElement('app-register-page');
    expect(element).to.be.instanceOf(RegisterPage);
  });
});
