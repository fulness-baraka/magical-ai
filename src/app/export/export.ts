import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcButtonComponent, IgcIconComponent);

@customElement('app-export')
export default class Export extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .export-options {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .export-mp4-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .download-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <h4 class="content">
        Export Your Anime
      </h4>
      <p class="typography__body-1 content">
        Choose your desired output format and share your creation!
      </p>
      <div class="column-layout export-options">
        <h6 class="content">
          Output Format
        </h6>
        <igc-button variant="outlined" type="button" class="export-mp4-button">
          <span class="material-icons">
            videocam
          </span>
          <span>Export as MP4 Video</span>
        </igc-button>
        <igc-button variant="outlined" type="button" class="export-mp4-button">
          <span class="material-icons">
            gif
          </span>
          <span>Export as GIF Animation</span>
        </igc-button>
        <igc-button variant="outlined" type="button" class="export-mp4-button">
          <span class="material-icons">
            collections
          </span>
          <span>Export Image Sequence</span>
        </igc-button>
      </div>
      <div class="column-layout export-options">
        <h6 class="content">
          Share on Social Media
        </h6>
        <igc-button variant="outlined" type="button" class="export-mp4-button">
          <span class="material-icons">
            video_library
          </span>
          <span>YouTube Shorts</span>
        </igc-button>
        <igc-button variant="outlined" type="button" class="export-mp4-button">
          <span class="material-icons">
            fiber_manual_record
          </span>
          <span>TikTok</span>
        </igc-button>
        <igc-button variant="outlined" type="button" class="export-mp4-button">
          <span class="material-icons">
            camera_alt
          </span>
          <span>Instagram Reels</span>
        </igc-button>
      </div>
      <igc-button type="button" class="download-button">
        <span class="material-icons">
          download
        </span>
        <span>Download Final Anime</span>
      </igc-button>
    `;
  }
}
