import { describe, it, expect } from 'vitest';
import NewProjectAI from './new-project-ai.js';

describe('NewProjectAI', () => {
  it('<app-new-project-ai> is an instance of NewProjectAI', async () => {
    const element = document.createElement('app-new-project-ai');
    expect(element).to.be.instanceOf(NewProjectAI);
  });
});
