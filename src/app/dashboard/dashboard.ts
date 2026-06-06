import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcNavbarComponent, IgcIconComponent, IgcButtonComponent, IgcIconButtonComponent);

@customElement('app-dashboard')
export default class Dashboard extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
    }
    .dashboard-nav-bar {
      color: var(--ig-surface-500-contrast);
      background-color: transparent;
      z-index: 1;
      position: sticky;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
    .dashboard-view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .dashboard-app-title-section {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .dashboard-app-icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .dashboard-app-title {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-surface-500-contrast);
    }
    .dashboard-nav-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .dashboard-search-icon::part(base) {
      color: var(--ig-surface-500-contrast);
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <igc-navbar class="dashboard-nav-bar">
        <div class="row-layout group">
          <div class="row-layout dashboard-app-title-section">
            <span class="material-icons dashboard-app-icon">
              burst_mode
            </span>
            <h6 class="dashboard-app-title">
              Manga-to-Anime AI Studio
            </h6>
          </div>
          <igc-button variant="flat" type="button" class="dashboard-nav-button">
            Dashboard
          </igc-button>
          <igc-button variant="flat" type="button" class="dashboard-nav-button">
            New Project
          </igc-button>
          <igc-button variant="flat" type="button" class="dashboard-nav-button">
            Settings
          </igc-button>
        </div>
        <igc-icon-button variant="flat" slot="end" class="dashboard-search-icon">
          <span class="material-icons icon">
            search
          </span>
        </igc-icon-button>
        <igc-icon-button variant="flat" slot="end" class="dashboard-search-icon">
          <span class="material-icons icon">
            perm_identity
          </span>
        </igc-icon-button>
        <igc-icon-button variant="flat" slot="end" class="dashboard-search-icon">
          <span class="material-icons icon">
            notifications
          </span>
        </igc-icon-button>
      </igc-navbar>
      <slot class="dashboard-view-container"></slot>
    `;
  }
}
