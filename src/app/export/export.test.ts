import { describe, it, expect } from 'vitest';
import Export from './export.js';

describe('Export', () => {
  it('<app-export> is an instance of Export', async () => {
    const element = document.createElement('app-export');
    expect(element).to.be.instanceOf(Export);
  });
});
