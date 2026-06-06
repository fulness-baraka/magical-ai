import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcSelectComponent, IgcSliderComponent, IgcTabsComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcTabsComponent, IgcSelectComponent, IgcButtonComponent, IgcIconComponent, IgcSliderComponent);

@customElement('app-project-editor')
export default class ProjectEditor extends LitElement {
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
    .row-layout {
      display: flex;
    }
    .tabs-item-content-q-5-4b-5-9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .editor-tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .colorization-tab {
      min-width: 100%;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .colorization-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .timeline-editor {
      border-color: var(--ig-gray-300);
      border-width: 1px;
      border-style: solid;
      border-radius: 8px;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .color-preset-select {
      height: max-content;
      min-width: min-content;
    }
    .apply-color-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .camera-zoom-slider {
      min-width: 50px;
    }
    .preview-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
    }
  `;

  @state()
  private value: number = 50;

  @state()
  private value1: number = 70;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <h4 class="content">
        Project Editor
      </h4>
      <p class="typography__body-1 content">
        Refine your anime with AI tools for color, animation, voice, and effects.
      </p>
      <igc-tabs class="editor-tabs">
        <igc-tab ?selected=${true} class="colorization-tab">
          <span slot="label">Colorization</span>
          <div class="row-layout tabs-item-content-q-5-4b-5-9">
            <div class="column-layout colorization-content">
              <h6 class="content">
                AI Colorization Engine
              </h6>
              <p class="typography__body-2 content">
                Convert black-and-white manga into colored anime-style images.
              </p>
              <igc-select ?outlined=${true} label="Style Presets" placeholder="Select a style" class="color-preset-select">
                <igc-select-item value="cinematic">
                  Cinematic
                </igc-select-item>
                <igc-select-item value="soft-anime">
                  Soft Anime
                </igc-select-item>
                <igc-select-item value="dark-action">
                  Dark Action
                </igc-select-item>
                <igc-select-item value="vibrant">
                  Vibrant
                </igc-select-item>
              </igc-select>
              <igc-button type="button" class="apply-color-button">
                <span class="material-icons">
                  palette
                </span>
                <span>Apply Colorization</span>
              </igc-button>
            </div>
          </div>
        </igc-tab>
        <igc-tab class="colorization-tab">
          <span slot="label">Animation</span>
          <div class="row-layout tabs-item-content-q-5-4b-5-9">
            <div class="column-layout colorization-content">
              <h6 class="content">
                Animation System
              </h6>
              <p class="typography__body-2 content">
                Bring your static manga panels to life with motion.
              </p>
              <igc-slider .value=${this.value} min=${0} max=${100} step=${10} ?discrete-track=${true} @igcChange=${(e: CustomEvent<number>) => this.value = e.detail} class="camera-zoom-slider"></igc-slider>
              <igc-button type="button" class="apply-color-button">
                <span class="material-icons">
                  movie
                </span>
                <span>Generate Animations</span>
              </igc-button>
            </div>
          </div>
        </igc-tab>
        <igc-tab class="colorization-tab">
          <span slot="label">Voice</span>
          <div class="row-layout tabs-item-content-q-5-4b-5-9">
            <div class="column-layout colorization-content">
              <h6 class="content">
                AI Voice System
              </h6>
              <p class="typography__body-2 content">
                Convert speech bubbles into natural dialogue.
              </p>
              <igc-select ?outlined=${true} label="Character Voice" placeholder="Select voice" class="color-preset-select">
                <igc-select-item value="male-1">
                  Male - Deep
                </igc-select-item>
                <igc-select-item value="female-1">
                  Female - Energetic
                </igc-select-item>
                <igc-select-item value="child-1">
                  Child - Playful
                </igc-select-item>
              </igc-select>
              <igc-slider .value=${this.value1} min=${0} max=${100} step=${10} ?discrete-track=${true} @igcChange=${(e: CustomEvent<number>) => this.value1 = e.detail} class="camera-zoom-slider"></igc-slider>
              <igc-button type="button" class="apply-color-button">
                <span class="material-icons">
                  mic
                </span>
                <span>Generate Voices</span>
              </igc-button>
            </div>
          </div>
        </igc-tab>
        <igc-tab class="colorization-tab">
          <span slot="label">Scene Editor</span>
          <div class="row-layout tabs-item-content-q-5-4b-5-9">
            <div class="column-layout colorization-content">
              <h6 class="content">
                AI Scene Editor
              </h6>
              <p class="typography__body-2 content">
                Replace backgrounds, edit characters, and add visual effects.
              </p>
              <igc-button type="button" class="apply-color-button">
                <span class="material-icons">
                  landscape
                </span>
                <span>Background Replacement</span>
              </igc-button>
              <igc-button type="button" class="apply-color-button">
                <span class="material-icons">
                  auto_fix_high
                </span>
                <span>Add Visual Effects</span>
              </igc-button>
            </div>
          </div>
        </igc-tab>
      </igc-tabs>
      <div class="row-layout timeline-editor">
        <p class="typography__body-2 content">
          Timeline Editor (Coming Soon)
        </p>
      </div>
      <igc-button type="button" class="preview-button">
        <span class="material-icons">
          visibility
        </span>
        <span>Preview Project</span>
      </igc-button>
      <igc-button type="button" class="preview-button">
        <span class="material-icons">
          save
        </span>
        <span>Save &amp; Proceed to Export</span>
      </igc-button>
    `;
  }
}
