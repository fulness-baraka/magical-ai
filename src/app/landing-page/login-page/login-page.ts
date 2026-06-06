import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCheckboxChangeEventArgs, IgcCheckboxComponent, IgcIconComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcCheckboxComponent);

@customElement('app-login-page')
export default class LoginPage extends LitElement {
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
    .login-form {
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
    .login-google-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .login-email {
      height: max-content;
      min-width: min-content;
    }
    .login-remember-me {
      width: max-content;
      height: max-content;
    }
    .login-submit-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
    }
    .login-form-header {
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
    .login-social-buttons {
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
    .login-or-separator {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-shrink: 0;
    }
    .login-left-line {
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
    .login-input-fields {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .login-remember-forgot {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .login-footer {
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
    .login-or-text {
      text-align: center;
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .login-forgot-password {
      color: var(--ig-primary-500);
      cursor: pointer;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .login-footer-link {
      color: var(--ig-info-500);
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
  private checked: boolean = false;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <form class="column-layout login-form">
        <div class="column-layout login-form-header">
          <h4 class="content">
            Welcome Back!
          </h4>
          <h6 class="content">
            Log in to continue your anime creation journey.
          </h6>
        </div>
        <div class="row-layout login-social-buttons">
          <igc-button variant="outlined" type="button" class="login-google-button">
            <span class="material-icons">
              web_stories
            </span>
            <span>Google</span>
          </igc-button>
          <igc-button variant="outlined" type="button" class="login-google-button">
            <span class="imx-icon imx-apple-app-store"></span>
            <span>Apple</span>
          </igc-button>
          <igc-button variant="outlined" type="button" class="login-google-button">
            <span class="imx-icon imx-facebook-messenger"></span>
            <span>Facebook</span>
          </igc-button>
        </div>
        <div class="row-layout login-or-separator">
          <div class="row-layout login-left-line"></div>
          <p class="typography__overline login-or-text">
            OR CONTINUE WITH
          </p>
          <div class="row-layout login-left-line"></div>
        </div>
        <div @click=${() => Router.go(`/dashboard`)} class="column-layout login-input-fields">
          <igc-input type="email" value=${ifDefined(this.value)} label="Email" placeholder="john.doe@example.com" required=${true} ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="login-email">
            <p slot="value-missing">This field is required</p>
          </igc-input>
          <igc-input type="password" value=${ifDefined(this.value1)} label="Password" placeholder="Min. 8 characters" required=${true} ?outlined=${true} @igcChange=${(e: CustomEvent<string>) => this.value1 = e.detail} class="login-email">
            <p slot="value-missing">This field is required</p>
          </igc-input>
          <div class="row-layout login-remember-forgot">
            <igc-checkbox .labelPosition=${"after"} ?checked=${this.checked} @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.checked = !!e.detail.checked} class="login-remember-me">
              Remember me
            </igc-checkbox>
            <a href="#" target="_blank" class="typography__body-2 login-forgot-password">
              Forgot Password?
            </a>
          </div>
          <igc-button type="submit" class="login-submit-button">
            Sign In
          </igc-button>
        </div>
        <div @click=${() => Router.go(`/landing-page/register-page`)} class="row-layout login-footer">
          <p class="typography__body-2 content">
            Don't have an account?
          </p>
          <a target="_blank" class="typography__body-2 login-footer-link">
            Sign Up
          </a>
        </div>
      </form>
    `;
  }
}
