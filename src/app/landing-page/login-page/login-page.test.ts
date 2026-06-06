import { describe, it, expect } from 'vitest';
import LoginPage from './login-page.js';

describe('LoginPage', () => {
  it('<app-login-page> is an instance of LoginPage', async () => {
    const element = document.createElement('app-login-page');
    expect(element).to.be.instanceOf(LoginPage);
  });
});
