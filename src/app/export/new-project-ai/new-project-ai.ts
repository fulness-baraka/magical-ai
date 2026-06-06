import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCheckboxChangeEventArgs, IgcCheckboxComponent, IgcIconComponent, IgcInputComponent, IgcSelectComponent, IgcSliderComponent, IgcTabsComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcTabsComponent, IgcInputComponent, IgcIconComponent, IgcButtonComponent, IgcTextareaComponent, IgcSelectComponent, IgcSliderComponent, IgcCheckboxComponent);

@customElement('app-new-project-ai')
export default class NewProjectAI extends LitElement {
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
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .new-project-aicontent {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .aiconversion-tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .manga-upload-tab {
      min-width: 100%;
    }
    .manga-upload-layout {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .icon-d-2rjp {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .preview-image {
      object-fit: cover;
      border-radius: 8px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .manga-upload-tab-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .browse-files-button-ai {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .start-aiconversion-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
    }
    .depth-of-field-slider {
      min-width: 50px;
    }
    .atmospheric-effects-checkbox {
      width: max-content;
      height: max-content;
    }
  `;

  @state()
  private value?: string;

  @state()
  private value1: number = 50;

  @state()
  private checked: boolean = false;

  @state()
  private checked1: boolean = false;

  @state()
  private value2: number = 50;

  @state()
  private checked2: boolean = false;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="column-layout new-project-aicontent">
        <h4 class="content">
          Manga to Anime AI Conversion
        </h4>
        <p class="typography__body-1 content">
          Utilize advanced AI to seamlessly convert your manga into a dynamic anime experience.
        </p>
        <igc-tabs class="aiconversion-tabs">
          <igc-tab ?selected=${true} class="manga-upload-tab">
            <span slot="label">Manga Upload</span>
            <div class="row-layout manga-upload-tab-content">
              <div class="column-layout manga-upload-layout">
                <h6 class="content">
                  Upload Your Manga
                </h6>
                <p class="typography__body-2 content">
                  Drag and drop your manga files here, or click the button to browse. Supported formats: PNG, JPG, PDF.
                </p>
                <igc-input value=${ifDefined(this.value)} label="Upload Manga Files" placeholder="Choose files..." ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="user-input">
                  <span slot="prefix">
                    <span class="material-icons icon-d-2rjp">
                      cloud_upload
                    </span>
                  </span>
                </igc-input>
                <igc-button type="button" class="browse-files-button-ai">
                  <span class="material-icons">
                    folder_open
                  </span>
                  <span>Browse Files</span>
                </igc-button>
                <igc-textarea label="Paste Manga URL" placeholder="e.g., https://example.com/my-manga.pdf" ?outlined=${true} class="user-input">
                  <span slot="helper-text">Enter a URL to automatically fetch manga content</span>
                </igc-textarea>
                <igc-button type="button" class="start-aiconversion-button">
                  <span class="material-icons">
                    play_arrow
                  </span>
                  <span>Start AI Conversion</span>
                </igc-button>
              </div>
            </div>
          </igc-tab>
          <igc-tab class="manga-upload-tab">
            <span slot="label">AI Settings</span>
            <div class="row-layout manga-upload-tab-content">
              <div class="column-layout manga-upload-layout">
                <h6 class="content">
                  Customize AI Conversion
                </h6>
                <p class="typography__body-2 content">
                  Adjust parameters to fine-tune your anime conversion.
                </p>
                <igc-select ?outlined=${true} label="Background Style" placeholder="Select a style" class="user-input">
                  <igc-select-item value="vibe-killing">
                    Vibe Killing
                  </igc-select-item>
                  <igc-select-item value="cinematic">
                    Cinematic
                  </igc-select-item>
                  <igc-select-item value="golden-hour">
                    Golden Hour
                  </igc-select-item>
                  <igc-select-item value="neon-glow">
                    Neon Glow
                  </igc-select-item>
                  <igc-select-item value="soft-moonlight">
                    Soft Moonlight
                  </igc-select-item>
                  <igc-select-item value="dynamic-lighting">
                    Dynamic Lighting
                  </igc-select-item>
                  <igc-select-item value="soft-lighting">
                    Soft Lighting
                  </igc-select-item>
                  <igc-select-item value="foggy">
                    Foggy
                  </igc-select-item>
                  <igc-select-item value="cyberpunk">
                    Cyberpunk
                  </igc-select-item>
                  <igc-select-item value="busy-urban">
                    Busy Urban
                  </igc-select-item>
                </igc-select>
                <igc-slider .value=${this.value1} min=${0} max=${100} step=${10} ?discrete-track=${true} @igcChange=${(e: CustomEvent<number>) => this.value1 = e.detail} class="depth-of-field-slider"></igc-slider>
                <igc-checkbox .labelPosition=${"after"} ?checked=${this.checked} @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.checked = !!e.detail.checked} class="atmospheric-effects-checkbox">
                  Enable Atmospheric Effects
                </igc-checkbox>
                <igc-select ?outlined=${true} label="Atmospheric Effect" placeholder="Select an effect" class="user-input">
                  <igc-select-item value="fog">
                    Fog
                  </igc-select-item>
                  <igc-select-item value="particles">
                    Particles
                  </igc-select-item>
                  <igc-select-item value="rain">
                    Rain
                  </igc-select-item>
                  <igc-select-item value="wind">
                    Wind
                  </igc-select-item>
                  <igc-select-item value="dust">
                    Dust
                  </igc-select-item>
                  <igc-select-item value="light-rays">
                    Light Rays
                  </igc-select-item>
                </igc-select>
                <igc-checkbox .labelPosition=${"after"} ?checked=${this.checked1} @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.checked1 = !!e.detail.checked} class="atmospheric-effects-checkbox">
                  Enable Parallax Depth Layers
                </igc-checkbox>
                <igc-select ?outlined=${true} label="Choose AI Model" placeholder="Select a model" class="user-input">
                  <igc-select-item value="model-a">
                    Anime Style A (Default)
                  </igc-select-item>
                  <igc-select-item value="model-b">
                    Ghibli-esque
                  </igc-select-item>
                  <igc-select-item value="model-c">
                    Modern Shonen
                  </igc-select-item>
                </igc-select>
                <igc-slider .value=${this.value2} min=${0} max=${100} step=${10} ?discrete-track=${true} @igcChange=${(e: CustomEvent<number>) => this.value2 = e.detail} class="depth-of-field-slider"></igc-slider>
                <igc-checkbox .labelPosition=${"after"} ?checked=${this.checked2} @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.checked2 = !!e.detail.checked} class="atmospheric-effects-checkbox">
                  Enable AI Voice Generation
                </igc-checkbox>
              </div>
            </div>
          </igc-tab>
          <igc-tab class="manga-upload-tab">
            <span slot="label">Preview &amp; Convert</span>
            <div class="row-layout manga-upload-tab-content">
              <div class="column-layout manga-upload-layout">
                <h6 class="content">
                  Preview and Finalize
                </h6>
                <p class="typography__body-2 content">
                  Review your animated manga and begin the final conversion.
                </p>
                <img src="/src/assets/generate-an-anime-style-previe-17d8bd261237.png" alt="" class="preview-image" />
                <igc-button type="button" class="start-aiconversion-button">
                  <span class="material-icons">
                    landscape
                  </span>
                  <span>Generate Background</span>
                </igc-button>
                <igc-button type="button" class="start-aiconversion-button">
                  <span class="material-icons">
                    movie
                  </span>
                  <span>Finalize Conversion</span>
                </igc-button>
              </div>
            </div>
          </igc-tab>
        </igc-tabs>
      </div>
    `;
  }
}
