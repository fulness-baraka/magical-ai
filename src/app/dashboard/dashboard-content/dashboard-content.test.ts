import { describe, it, expect } from 'vitest';
import DashboardContent from './dashboard-content.js';

describe('DashboardContent', () => {
  it('<app-dashboard-content> is an instance of DashboardContent', async () => {
    const element = document.createElement('app-dashboard-content');
    expect(element).to.be.instanceOf(DashboardContent);
  });
});
