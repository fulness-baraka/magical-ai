import { describe, it, expect } from 'vitest';
import LandingPageContent from './landing-page-content.js';

describe('LandingPageContent', () => {
  it('<app-landing-page-content> is an instance of LandingPageContent', async () => {
    const element = document.createElement('app-landing-page-content');
    expect(element).to.be.instanceOf(LandingPageContent);
  });
});
