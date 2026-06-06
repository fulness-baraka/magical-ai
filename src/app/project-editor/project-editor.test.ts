import { describe, it, expect } from 'vitest';
import ProjectEditor from './project-editor.js';

describe('ProjectEditor', () => {
  it('<app-project-editor> is an instance of ProjectEditor', async () => {
    const element = document.createElement('app-project-editor');
    expect(element).to.be.instanceOf(ProjectEditor);
  });
});
