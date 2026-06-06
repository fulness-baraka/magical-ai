import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcNavbarComponent, IgcIconComponent, IgcButtonComponent, IgcIconButtonComponent);

@customElement('app-landing-page')
export default class LandingPage extends LitElement {
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
    .landing-page-nav {
      color: var(--ig-surface-500-contrast);
      background-color: transparent;
      z-index: 1;
      position: sticky;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }
    .landing-page-view-container {
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
    .app-logo-section {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .app-icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .app-title {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-surface-500-contrast);
    }
    .how-it-works-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .search-button::part(base) {
      color: var(--ig-surface-500-contrast);
    }
    .signup-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <igc-navbar class="landing-page-nav">
        <div class="row-layout group">
          <div class="row-layout app-logo-section">
            <span class="material-icons app-icon">
              burst_mode
            </span>
            <h6 class="app-title">
              Manga-to-Anime AI Studio
            </h6>
          </div>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            How it Works
          </igc-button>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            Features
          </igc-button>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            Pricing
          </igc-button>
          <igc-button variant="flat" type="button" class="how-it-works-button">
            FAQ
          </igc-button>
        </div>
        <igc-icon-button variant="flat" slot="end" class="search-button">
          <span class="material-icons icon">
            search
          </span>
        </igc-icon-button>
        <igc-button type="button" slot="end" class="signup-button">
          Sign Up
        </igc-button>
        <igc-button variant="flat" type="button" slot="end" class="signup-button">
          Login
        </igc-button>
      </igc-navbar>
      <slot class="landing-page-view-container"></slot>
    `;
  }
}
