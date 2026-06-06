import { describe, it, expect } from 'vitest';
import NewProject from './new-project.js';

describe('NewProject', () => {
  it('<app-new-project> is an instance of NewProject', async () => {
    const element = document.createElement('app-new-project');
    expect(element).to.be.instanceOf(NewProject);
  });
});
