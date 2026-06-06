import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAccordionComponent, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcExpansionPanelComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcButtonComponent, IgcCardComponent, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcAccordionComponent, IgcExpansionPanelComponent);

@customElement('app-landing-page-content')
export default class LandingPageContent extends LitElement {
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
    .row-layout {
      display: flex;
    }
    .hero-section {
      background-color: transparent;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 0;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 400px;
      flex-shrink: 0;
    }
    .hero-content-wrapper {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      max-width: 1400px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .hero-text-content {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .hero-action-block {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .hero-action-buttons {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-shrink: 0;
    }
    .features-section {
      background-color: transparent;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 0;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .features-section-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      max-width: 1400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .features-header {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .feature-cards-container {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .feature-card-1 {
      --background: transparent;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .feature-card-1-content {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .row-reverse-layout {
      display: flex;
      flex-direction: row-reverse;
    }
    .secondary-cta-action-block {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .secondary-cta-action-buttons {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .pricing-card-1-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .faq-accordion {
      overflow-y: auto;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .footer-section {
      background-color: transparent;
      border-color: var(--ig-gray-200);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .footer-top-row {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .footer-content-wrapper {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      max-width: 1400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .footer-brand-info {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .footer-logo {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .footer-social-icons {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .contact-phone {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 16px;
      min-height: 16px;
      flex-shrink: 0;
    }
    .footer-bottom-row {
      border-color: var(--ig-gray-200);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 0;
      position: relative;
      padding: 16px 32px;
      min-width: 16px;
      min-height: 16px;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .hero-engage-statement {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .hero-image {
      object-fit: cover;
      border-radius: 8px;
      min-width: 200px;
      min-height: 0;
      max-height: 350px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .content_3 {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .feature-card-1-icon {
      --ig-size: var(--ig-size-medium);
    }
    .icon {
      color: var(--ig-secondary-100-contrast);
    }
    .content_2 {
      color: var(--ig-secondary-100-contrast);
      height: max-content;
    }
    .pricing-card-1-feature-1-icon {
      --ig-size: var(--ig-size-small);
    }
    .footer-site-icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-gray-600);
    }
    .footer-site-name {
      color: var(--ig-gray-900);
      height: max-content;
      min-width: min-content;
    }
    .footer-tagline {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
    }
    .link-features {
      color: var(--ig-gray-700);
      cursor: pointer;
      height: max-content;
      min-width: min-content;
    }
    .phone-icon {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: var(--ig-gray-600);
    }
    .feature-card-1-icon_1::part(base) {
      color: var(--ig-secondary-100-contrast);
      background-color: var(--ig-secondary-100);
    }
    .feature-card-1-icon_2::part(base) {
      color: var(--ig-secondary-100-contrast);
      background-color: var(--ig-secondary-100);
    }
    .feature-card-1-icon_3::part(base) {
      color: var(--ig-secondary-100-contrast);
      background-color: var(--ig-secondary-100);
    }
    .pricing-card-1-feature-1-icon_1::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_2::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_3::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_4::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_5::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_6::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_7::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_8::part(base) {
      background-color: transparent;
    }
    .pricing-card-1-feature-1-icon_9::part(base) {
      background-color: transparent;
    }
    .start-project-button {
      --ig-size: var(--ig-size-large);
      height: max-content;
      flex-shrink: 0;
    }
    .feature-card-1-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .start-project-button_1::part(base) {
      color: var(--ig-secondary-100);
      background-color: var(--ig-secondary-100-contrast);
    }
    .start-project-button_2::part(base) {
      color: var(--ig-secondary-100-contrast);
      border-color: var(--ig-secondary-100-contrast);
    }
    .pricing-card-1-features {
      height: max-content;
    }
  `;

  @state()
  private pricingCard1FeaturesSelectedItem?: string;

  @state()
  private pricingCard2FeaturesSelectedItem?: string;

  @state()
  private pricingCard3FeaturesSelectedItem?: string;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout hero-section">
        <div class="row-layout hero-content-wrapper">
          <div class="column-layout hero-text-content">
            <h2 class="content">
              Transform Your Manga into Vibrant Anime with AI
            </h2>
            <h6 class="content">
              Unleash the power of AI to bring your manga stories to life with full animation, color, voice, and effects.
            </h6>
            <div class="column-layout hero-action-block">
              <div @click=${() => Router.go(`/new-project`)} class="row-layout hero-action-buttons">
                <igc-button type="button" class="start-project-button">
                  Start a Free Project
                </igc-button>
                <igc-button variant="outlined" type="button" class="start-project-button">
                  Learn More
                </igc-button>
              </div>
              <p class="typography__body-2 hero-engage-statement">
                Join thousands of creators animating their stories today!
              </p>
            </div>
          </div>
          <img src="/src/assets/vibrant-anime-style-image-of-m-6f54b9e8b0a1.png" alt="" class="hero-image" />
        </div>
      </div>
      <div class="row-layout features-section">
        <div class="column-layout features-section-content">
          <div class="column-layout features-header">
            <h4 class="content_3">
              Unleash Your Manga's Full Potential
            </h4>
            <h6 class="content_3">
              Powerful AI tools to bring your stories to life.
            </h6>
          </div>
          <div class="row-layout feature-cards-container">
            <igc-card class="feature-card-1">
              <igc-card-content>
                <div class="column-layout feature-card-1-content">
                  <igc-avatar shape="circle" class="feature-card-1-icon feature-card-1-icon_1">
                    <span class="material-icons icon">
                      palette
                    </span>
                  </igc-avatar>
                  <h6 class="content">
                    AI Colorization
                  </h6>
                  <p class="typography__body-1 content">
                    Automatically convert black-and-white manga into vibrant, anime-style colored scenes.
                  </p>
                </div>
              </igc-card-content>
              <igc-card-actions>
                <igc-button variant="flat" type="button" slot="start" class="feature-card-1-button">
                  <span>Learn more</span>
                  <span class="material-icons">
                    arrow_right_alt
                  </span>
                </igc-button>
              </igc-card-actions>
            </igc-card>
            <igc-card class="feature-card-1">
              <igc-card-content>
                <div class="column-layout feature-card-1-content">
                  <igc-avatar shape="circle" class="feature-card-1-icon feature-card-1-icon_2">
                    <span class="material-icons icon">
                      movie_filter
                    </span>
                  </igc-avatar>
                  <h6 class="content">
                    Dynamic Animation
                  </h6>
                  <p class="typography__body-1 content">
                    Turn static panels into animated scenes with character expressions, camera movements, and smooth transitions.
                  </p>
                </div>
              </igc-card-content>
              <igc-card-actions>
                <igc-button variant="flat" type="button" slot="start" class="feature-card-1-button">
                  <span>Learn more</span>
                  <span class="material-icons">
                    arrow_right_alt
                  </span>
                </igc-button>
              </igc-card-actions>
            </igc-card>
            <igc-card class="feature-card-1">
              <igc-card-content>
                <div class="column-layout feature-card-1-content">
                  <igc-avatar shape="circle" class="feature-card-1-icon feature-card-1-icon_3">
                    <span class="material-icons icon">
                      mic_none
                    </span>
                  </igc-avatar>
                  <h6 class="content">
                    AI Voice Generation
                  </h6>
                  <p class="typography__body-1 content">
                    Automatically convert speech bubbles into natural, emotional dialogue with multiple character voices.
                  </p>
                </div>
              </igc-card-content>
              <igc-card-actions>
                <igc-button variant="flat" type="button" slot="start" class="feature-card-1-button">
                  <span>Learn more</span>
                  <span class="material-icons">
                    arrow_right_alt
                  </span>
                </igc-button>
              </igc-card-actions>
            </igc-card>
          </div>
        </div>
      </div>
      <div class="row-layout hero-section">
        <div class="row-reverse-layout hero-content-wrapper">
          <div class="column-layout hero-text-content">
            <h4 class="content_2">
              Ready to Bring Your Manga to Life?
            </h4>
            <h6 class="content_2">
              Sign up today and start creating stunning anime from your favorite manga!
            </h6>
            <div class="column-layout secondary-cta-action-block">
              <div @click=${() => Router.go(`/landing-page/register-page`)} class="row-layout secondary-cta-action-buttons">
                <igc-button type="button" class="start-project-button start-project-button_1">
                  Sign Up Now
                </igc-button>
                <igc-button variant="outlined" type="button" class="start-project-button start-project-button_2">
                  Watch Demo
                </igc-button>
              </div>
            </div>
          </div>
          <img src="/src/assets/anime-style-character-creating-18748a5a554a.png" alt="" class="hero-image" />
        </div>
      </div>
      <div class="row-layout features-section">
        <div class="column-layout features-section-content">
          <div class="column-layout features-header">
            <h4 class="content_3">
              Flexible Plans for Every Creator
            </h4>
            <h6 class="content_3">
              Choose the perfect plan to bring your manga visions to life.
            </h6>
          </div>
          <div class="row-layout feature-cards-container">
            <igc-card class="feature-card-1">
              <igc-card-content>
                <div class="column-layout pricing-card-1-content">
                  <div class="column-layout features-header">
                    <div class="column-layout hero-action-block">
                      <h5 class="content_3">
                        Starter
                      </h5>
                      <h2 class="content_3">
                        $0/month
                      </h2>
                    </div>
                  </div>
                  <p class="typography__body-1 content_3">
                    Perfect for testing the waters.
                  </p>
                  <igc-list class="pricing-card-1-features">
                    <igc-list-item ?selected=${this.pricingCard1FeaturesSelectedItem != null && this.pricingCard1FeaturesSelectedItem === '0'} @click=${() => this.pricingCard1FeaturesSelectedItem = '0'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_1">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">5 Free Projects</div>
                    </igc-list-item>
                    <igc-list-item ?selected=${this.pricingCard1FeaturesSelectedItem != null && this.pricingCard1FeaturesSelectedItem === '1'} @click=${() => this.pricingCard1FeaturesSelectedItem = '1'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_2">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Basic AI Tools</div>
                    </igc-list-item>
                    <igc-list-item ?selected=${this.pricingCard1FeaturesSelectedItem != null && this.pricingCard1FeaturesSelectedItem === '2'} @click=${() => this.pricingCard1FeaturesSelectedItem = '2'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_3">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Standard Export</div>
                    </igc-list-item>
                  </igc-list>
                  <igc-button type="button" class="feature-card-1-button">
                    Get Started
                  </igc-button>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="feature-card-1">
              <igc-card-content>
                <div class="column-layout pricing-card-1-content">
                  <div class="column-layout features-header">
                    <div class="column-layout hero-action-block">
                      <h5 class="content_3">
                        Pro
                      </h5>
                      <h2 class="content_3">
                        $29/month
                      </h2>
                    </div>
                  </div>
                  <p class="typography__body-1 content_3">
                    For serious creators.
                  </p>
                  <igc-list class="pricing-card-1-features">
                    <igc-list-item ?selected=${this.pricingCard2FeaturesSelectedItem != null && this.pricingCard2FeaturesSelectedItem === '0'} @click=${() => this.pricingCard2FeaturesSelectedItem = '0'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_4">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Unlimited Projects</div>
                    </igc-list-item>
                    <igc-list-item ?selected=${this.pricingCard2FeaturesSelectedItem != null && this.pricingCard2FeaturesSelectedItem === '1'} @click=${() => this.pricingCard2FeaturesSelectedItem = '1'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_5">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Advanced AI Tools</div>
                    </igc-list-item>
                    <igc-list-item ?selected=${this.pricingCard2FeaturesSelectedItem != null && this.pricingCard2FeaturesSelectedItem === '2'} @click=${() => this.pricingCard2FeaturesSelectedItem = '2'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_6">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">HD Export &amp; Social Presets</div>
                    </igc-list-item>
                  </igc-list>
                  <igc-button type="button" class="feature-card-1-button">
                    Choose Pro
                  </igc-button>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="feature-card-1">
              <igc-card-content>
                <div class="column-layout pricing-card-1-content">
                  <div class="column-layout features-header">
                    <div class="column-layout hero-action-block">
                      <h5 class="content_3">
                        Enterprise
                      </h5>
                      <h2 class="content_3">
                        Custom
                      </h2>
                    </div>
                  </div>
                  <p class="typography__body-1 content_3">
                    Tailored for large studios.
                  </p>
                  <igc-list class="pricing-card-1-features">
                    <igc-list-item ?selected=${this.pricingCard3FeaturesSelectedItem != null && this.pricingCard3FeaturesSelectedItem === '0'} @click=${() => this.pricingCard3FeaturesSelectedItem = '0'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_7">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Dedicated Support</div>
                    </igc-list-item>
                    <igc-list-item ?selected=${this.pricingCard3FeaturesSelectedItem != null && this.pricingCard3FeaturesSelectedItem === '1'} @click=${() => this.pricingCard3FeaturesSelectedItem = '1'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_8">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Custom AI Models</div>
                    </igc-list-item>
                    <igc-list-item ?selected=${this.pricingCard3FeaturesSelectedItem != null && this.pricingCard3FeaturesSelectedItem === '2'} @click=${() => this.pricingCard3FeaturesSelectedItem = '2'}>
                      <igc-avatar slot="start" shape="circle" class="pricing-card-1-feature-1-icon pricing-card-1-feature-1-icon_9">
                        <span class="material-icons">
                          check
                        </span>
                      </igc-avatar>
                      <div slot="title">Team Collaboration</div>
                    </igc-list-item>
                  </igc-list>
                  <igc-button type="button" class="feature-card-1-button">
                    Contact Us
                  </igc-button>
                </div>
              </igc-card-content>
            </igc-card>
          </div>
        </div>
      </div>
      <div class="row-layout features-section">
        <div class="column-layout features-section-content">
          <div class="column-layout features-header">
            <h4 class="content_3">
              Frequently Asked Questions
            </h4>
            <h6 class="content_3">
              Everything you need to know about Manga-to-Anime AI Studio.
            </h6>
          </div>
          <igc-accordion ?single-expand=${true} class="faq-accordion">
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content">
                We support PNG, JPG, and PDF files for manga uploads. You can also paste a manga URL to automatically fetch content.
              </p>
              <span slot="title">What file types are supported for manga upload?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content">
                Our AI analyzes your black-and-white manga and intelligently predicts appropriate colors for characters, backgrounds, and environments, converting them into anime-style images.
              </p>
              <span slot="title">How does the AI colorization work?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content">
                Yes, our AI Voice System offers multiple character voices and emotion controls (happy, angry, sad, etc.) for personalized dialogue.
              </p>
              <span slot="title">Can I customize character voices and emotions?</span>
            </igc-expansion-panel>
            <igc-expansion-panel indicator-position="end">
              <p class="typography__body-2 content">
                You can export your anime as MP4 videos, GIF animations, or image sequences. We also support direct export to social media formats like YouTube Shorts, TikTok, and Instagram Reels.
              </p>
              <span slot="title">What are the export options for the final anime video?</span>
            </igc-expansion-panel>
          </igc-accordion>
        </div>
      </div>
      <div class="column-layout footer-section">
        <div class="row-layout footer-top-row">
          <div class="row-layout footer-content-wrapper">
            <div class="column-layout footer-brand-info">
              <div class="row-layout footer-logo">
                <span class="material-icons footer-site-icon">
                  burst_mode
                </span>
                <p class="typography__subtitle-2 footer-site-name">
                  Manga-to-Anime AI Studio
                </p>
              </div>
              <p class="typography__body-2 footer-tagline">
                Manga-to-Anime AI Studio - Your creative animation partner.
              </p>
              <div class="row-layout footer-social-icons">
                <span class="imx-icon imx-facebook-messenger footer-site-icon"></span>
                <span class="imx-icon imx-discord footer-site-icon"></span>
                <span class="material-icons footer-site-icon">
                  language
                </span>
              </div>
            </div>
            <div class="column-layout footer-brand-info">
              <p class="typography__subtitle-2 content">
                Product
              </p>
              <a href="#" class="typography__body-2 link-features">
                Features
              </a>
              <a href="#" class="typography__body-2 link-features">
                Pricing
              </a>
              <a href="#" class="typography__body-2 link-features">
                How it Works
              </a>
              <a href="#" class="typography__body-2 link-features">
                Integrations
              </a>
            </div>
            <div class="column-layout footer-brand-info">
              <p class="typography__subtitle-2 content">
                Company
              </p>
              <a href="#" class="typography__body-2 link-features">
                About Us
              </a>
              <a href="#" class="typography__body-2 link-features">
                Careers
              </a>
              <a href="#" class="typography__body-2 link-features">
                Blog
              </a>
              <a href="#" class="typography__body-2 link-features">
                Contact
              </a>
            </div>
            <div class="column-layout footer-brand-info">
              <p class="typography__subtitle-2 content">
                Get in Touch
              </p>
              <div class="row-layout contact-phone">
                <span class="material-icons phone-icon">
                  phone
                </span>
                <p class="typography__body-2 footer-tagline">
                  +1 (123) 456-7890
                </p>
              </div>
              <div class="row-layout contact-phone">
                <span class="material-icons phone-icon">
                  email
                </span>
                <p class="typography__body-2 footer-tagline">
                  info@manga2anime.studio
                </p>
              </div>
              <div class="row-layout contact-phone">
                <span class="material-icons phone-icon">
                  location_on
                </span>
                <p class="typography__body-2 footer-tagline">
                  123 Anime St, Studio City, CA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout footer-bottom-row">
          <p class="typography__body-2 footer-tagline">
            2023 Manga-to-Anime AI Studio - All Rights Reserved
          </p>
        </div>
      </div>
    `;
  }
}
