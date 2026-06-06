import { describe, it, expect } from 'vitest';
import LandingPage from './landing-page.js';

describe('LandingPage', () => {
  it('<app-landing-page> is an instance of LandingPage', async () => {
    const element = document.createElement('app-landing-page');
    expect(element).to.be.instanceOf(LandingPage);
  });
});
