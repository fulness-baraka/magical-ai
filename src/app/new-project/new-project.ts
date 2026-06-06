import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcInputComponent, IgcIconComponent, IgcButtonComponent, IgcTextareaComponent);

@customElement('app-new-project')
export default class NewProject extends LitElement {
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
    .upload-section-title {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .icon-tmyqjh {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .file-upload-section {
      border-color: var(--ig-gray-300);
      border-width: 1px;
      border-style: dashed;
      border-radius: 8px;
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
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .browse-files-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .start-conversion-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
    }
  `;

  @state()
  private value?: string;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <h4 class="content">
        Start a New Manga-to-Anime Project
      </h4>
      <p class="typography__body-1 content">
        Upload your manga files or paste a URL to begin the AI conversion process.
      </p>
      <div class="column-layout file-upload-section">
        <h6 class="upload-section-title">
          Drag &amp; Drop Files Here or Click to Upload
        </h6>
        <igc-input value=${ifDefined(this.value)} label="Upload Manga Files" placeholder="PNG, JPG, PDF" ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="user-input">
          <span slot="prefix">
            <span class="material-icons icon-tmyqjh">
              cloud_upload
            </span>
          </span>
        </igc-input>
        <igc-button type="button" class="browse-files-button">
          <span class="material-icons">
            folder_open
          </span>
          <span>Browse Files</span>
        </igc-button>
      </div>
      <igc-textarea label="Paste Manga URL" placeholder="e.g., https://example.com/my-manga.pdf" ?outlined=${true} class="user-input">
        <span slot="helper-text">Enter a URL to automatically fetch manga content</span>
      </igc-textarea>
      <igc-button type="button" @click=${() => Router.go(`/export/new-project-ai`)} class="start-conversion-button">
        <span class="material-icons">
          play_arrow
        </span>
        <span>Start AI Conversion</span>
      </igc-button>
    `;
  }
}
