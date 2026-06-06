import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCheckboxChangeEventArgs, IgcCheckboxComponent, IgcIconComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcCheckboxComponent);

@customElement('app-register-page')
export default class RegisterPage extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .registration-form {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 320px;
      min-height: 50px;
      max-width: 560px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .register-google-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .register-fullname {
      height: max-content;
      min-width: min-content;
    }
    .register-consent-checkbox {
      width: max-content;
      height: max-content;
    }
    .register-submit-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
    }
    .register-form-header {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .register-social-buttons {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-shrink: 0;
    }
    .register-or-separator {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-shrink: 0;
    }
    .register-left-line {
      border-color: var(--ig-gray-300);
      border-width: 2px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 0;
      position: relative;
      min-width: unset;
      max-width: unset;
      flex-grow: 1;
      flex-basis: 0;
    }
    .register-input-fields {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .register-consent {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      flex-shrink: 0;
    }
    .register-footer {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .register-or-text {
      text-align: center;
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .register-footer-link {
      color: var(--ig-primary-500);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  @state()
  private value?: string;

  @state()
  private value1?: string;

  @state()
  private value2?: string;

  @state()
  private value3?: string;

  @state()
  private checked: boolean = false;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <form class="column-layout registration-form">
        <div class="column-layout register-form-header">
          <h4 class="content">
            Create Your Account
          </h4>
          <h6 class="content">
            Join Manga-to-Anime AI Studio today!
          </h6>
        </div>
        <div class="row-layout register-social-buttons">
          <igc-button variant="outlined" type="button" class="register-google-button">
            <span class="material-icons">
              web_stories
            </span>
            <span>Google</span>
          </igc-button>
          <igc-button variant="outlined" type="button" class="register-google-button">
            <span class="imx-icon imx-apple-app-store"></span>
            <span>Apple</span>
          </igc-button>
          <igc-button variant="outlined" type="button" class="register-google-button">
            <span class="imx-icon imx-facebook-messenger"></span>
            <span>Facebook</span>
          </igc-button>
        </div>
        <div class="row-layout register-or-separator">
          <div class="row-layout register-left-line"></div>
          <p class="typography__overline register-or-text">
            OR CONTINUE WITH
          </p>
          <div class="row-layout register-left-line"></div>
        </div>
        <div class="column-layout register-input-fields">
          <igc-input value=${ifDefined(this.value)} label="Full Name" placeholder="John Doe" required=${true} ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="register-fullname">
            <p slot="value-missing">This field is required</p>
          </igc-input>
          <igc-input type="email" value=${ifDefined(this.value1)} label="Email" placeholder="john.doe@example.com" required=${true} ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value1 = e.detail} class="register-fullname">
            <p slot="value-missing">This field is required</p>
          </igc-input>
          <igc-input type="password" value=${ifDefined(this.value2)} label="Password" placeholder="Min. 8 characters" required=${true} ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value2 = e.detail} class="register-fullname">
            <p slot="value-missing">This field is required</p>
          </igc-input>
          <igc-input type="password" value=${ifDefined(this.value3)} label="Confirm Password" placeholder="Re-enter your password" required=${true} ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value3 = e.detail} class="register-fullname">
            <p slot="value-missing">This field is required</p>
          </igc-input>
          <div class="row-layout register-consent">
            <igc-checkbox .labelPosition=${"after"} required=${true} ?checked=${this.checked} @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.checked = !!e.detail.checked} class="register-consent-checkbox">
              I agree to the Terms of Service and Privacy Policy
            </igc-checkbox>
          </div>
          <igc-button type="submit" class="register-submit-button">
            Sign Up
          </igc-button>
        </div>
        <div @click=${() => Router.go(`/landing-page/login-page`)} class="row-layout register-footer">
          <p class="typography__body-2 content">
            Already have an account?
          </p>
          <a target="_blank" class="typography__body-2 register-footer-link">
            Login Here
          </a>
        </div>
      </form>
    `;
  }
}
