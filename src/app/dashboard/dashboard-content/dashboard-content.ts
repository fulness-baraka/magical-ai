import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents, IgcAvatarComponent, IgcCardComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';
import { IgcCategoryChartModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';
import baseStyles from '/src/app/base-view-styles.css?inline';
import { BoxOfficeRevenueType } from '../../models/Financial/box-office-revenue-type';
import { EmployeesType } from '../../models/Northwind/employees-type';
import { financialService } from '../../services/financial-service';
import { northwindService } from '../../services/northwind-service';

defineComponents(IgcCardComponent, IgcAvatarComponent, IgcIconComponent, IgcGridLite, IgcListComponent, IgcListItemComponent);

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-dashboard-content')
export default class DashboardContent extends LitElement {
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
    .dashboard-main-content-row {
      background-color: transparent;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      padding: 48px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .dashboard-main-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      max-width: 1400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .dashboard-header-block {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: unset;
      max-height: unset;
      flex-shrink: 0;
    }
    .metrics-section {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      flex-shrink: 0;
    }
    .metric-card-1 {
      --background: transparent;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .metric-card-1-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      min-width: unset;
      max-height: unset;
    }
    .metric-card-1-growth {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: unset;
      max-height: unset;
      flex-shrink: 0;
    }
    .statistics-section {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .charts-and-grid-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: unset;
      max-height: unset;
      flex: 3 0 0;
    }
    .top-charts-row {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: unset;
      max-height: unset;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .chart-section-1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .grid-section {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-grow: 2;
      flex-shrink: 0;
    }
    .list-column {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 24px;
      position: relative;
      min-width: unset;
      max-height: unset;
      flex-grow: 1;
      flex-basis: 0;
    }
    .recent-activity-section {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 360px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .metric-card-1-avatar::part(base) {
      color: var(--ig-info-500-contrast);
      background-color: var(--ig-info-500);
    }
    .icon {
      color: var(--ig-info-500-contrast);
    }
    .metric-card-1-growth-rate {
      color: var(--ig-success-500);
      height: max-content;
      min-width: min-content;
    }
    .icon_1 {
      color: var(--ig-success-500-contrast);
    }
    .icon_2 {
      color: var(--ig-warn-500-contrast);
    }
    .metric-card-3-growth-rate {
      color: var(--ig-warn-500);
      height: max-content;
      min-width: min-content;
    }
    .icon_3 {
      color: var(--ig-primary-500-contrast);
    }
    .activity-item-1-icon {
      --ig-size: var(--ig-size-small);
    }
    .icon_4 {
      color: var(--ig-primary-100-contrast);
    }
    .metric-card-1-avatar_1::part(base) {
      color: var(--ig-success-500-contrast);
      background-color: var(--ig-success-500);
    }
    .metric-card-1-avatar_2::part(base) {
      color: var(--ig-warn-500-contrast);
      background-color: var(--ig-warn-500);
    }
    .metric-card-1-avatar_3::part(base) {
      color: var(--ig-primary-500-contrast);
      background-color: var(--ig-primary-500);
    }
    .activity-item-1-icon_1::part(base) {
      color: var(--ig-primary-100-contrast);
      background-color: var(--ig-primary-100);
    }
    .activity-item-1-icon_2::part(base) {
      color: var(--ig-primary-100-contrast);
      background-color: var(--ig-primary-100);
    }
    .activity-item-1-icon_3::part(base) {
      color: var(--ig-primary-100-contrast);
      background-color: var(--ig-primary-100);
    }
    .activity-item-1-icon_4::part(base) {
      color: var(--ig-primary-100-contrast);
      background-color: var(--ig-primary-100);
    }
    .activity-item-1-icon_5::part(base) {
      color: var(--ig-primary-100-contrast);
      background-color: var(--ig-primary-100);
    }
    .activity-item-1-icon_6::part(base) {
      color: var(--ig-primary-100-contrast);
      background-color: var(--ig-primary-100);
    }
    .monthly-completions-chart {
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .project-history-grid {
      min-width: 200px;
      max-height: 400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .recent-activity-list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.financialBoxOfficeRevenue = financialService.getBoxOfficeRevenue();
    this.northwindEmployees = northwindService.getEmployees();
  }

  @state()
  private recentActivityListSelectedItem?: string;

  @state()
  private quickActionsListSelectedItem?: string;

  @state()
  private financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  @state()
  private northwindEmployees: EmployeesType[] = [];

  private clickQuickActionNewProject(): void {
    this.quickActionsListSelectedItem = '0';
    Router.go(`/new-project`);
  }
  private clickQuickActionViewEditor(): void {
    this.quickActionsListSelectedItem = '1';
    Router.go(`/project-editor`);
  }
  private clickQuickActionExport(): void {
    this.quickActionsListSelectedItem = '2';
    Router.go(`/export`);
  }

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <div class="row-layout dashboard-main-content-row">
        <div class="column-layout dashboard-main-column">
          <div class="column-layout dashboard-header-block">
            <h3 class="content">
              Your AI Studio Dashboard
            </h3>
            <p class="typography__body-1 content">
              Overview of your projects, progress, and key statistics.
            </p>
          </div>
          <div class="row-layout metrics-section">
            <igc-card class="metric-card-1">
              <igc-card-header>
                <div slot="thumbnail">
                  <igc-avatar shape="circle" class="metric-card-1-avatar">
                    <span class="material-icons icon">
                      folder
                    </span>
                  </igc-avatar>
                </div>
                <h3 slot="title">
                  Total Projects
                </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content>
                <div class="column-layout metric-card-1-content">
                  <h3 class="content">
                    42
                  </h3>
                  <div class="row-layout metric-card-1-growth">
                    <p class="typography__subtitle-2 metric-card-1-growth-rate">
                      +12%
                    </p>
                    <p class="typography__body-2 content">
                      vs. last month
                    </p>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="metric-card-1">
              <igc-card-header>
                <div slot="thumbnail">
                  <igc-avatar shape="circle" class="metric-card-1-avatar_1">
                    <span class="material-icons icon_1">
                      movie_filter
                    </span>
                  </igc-avatar>
                </div>
                <h3 slot="title">
                  Animations Rendered
                </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content>
                <div class="column-layout metric-card-1-content">
                  <h3 class="content">
                    8,500
                  </h3>
                  <div class="row-layout metric-card-1-growth">
                    <p class="typography__subtitle-2 metric-card-1-growth-rate">
                      +25%
                    </p>
                    <p class="typography__body-2 content">
                      vs. last month
                    </p>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="metric-card-1">
              <igc-card-header>
                <div slot="thumbnail">
                  <igc-avatar shape="circle" class="metric-card-1-avatar_2">
                    <span class="material-icons icon_2">
                      schedule
                    </span>
                  </igc-avatar>
                </div>
                <h3 slot="title">
                  Hours Saved
                </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content>
                <div class="column-layout metric-card-1-content">
                  <h3 class="content">
                    1,200
                  </h3>
                  <div class="row-layout metric-card-1-growth">
                    <p class="typography__subtitle-2 metric-card-3-growth-rate">
                      +8%
                    </p>
                    <p class="typography__body-2 content">
                      vs. last month
                    </p>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
            <igc-card class="metric-card-1">
              <igc-card-header>
                <div slot="thumbnail">
                  <igc-avatar shape="circle" class="metric-card-1-avatar_3">
                    <span class="material-icons icon_3">
                      group
                    </span>
                  </igc-avatar>
                </div>
                <h3 slot="title">
                  Active Users
                </h3>
                <h5 slot="subtitle">
              </h5>
              </igc-card-header>
              <igc-card-content>
                <div class="column-layout metric-card-1-content">
                  <h3 class="content">
                    500+
                  </h3>
                  <div class="row-layout metric-card-1-growth">
                    <p class="typography__subtitle-2 metric-card-1-growth-rate">
                      +5%
                    </p>
                    <p class="typography__body-2 content">
                      vs. last month
                    </p>
                  </div>
                </div>
              </igc-card-content>
            </igc-card>
          </div>
          <div class="row-layout statistics-section">
            <div class="column-layout charts-and-grid-column">
              <div class="row-layout top-charts-row">
                <div class="column-layout chart-section-1">
                  <div class="column-layout dashboard-header-block">
                    <h5 class="content">
                      Monthly Project Completions
                    </h5>
                    <p class="typography__body-2 content">
                      Number of projects completed each month.
                    </p>
                  </div>
                  <igc-category-chart .dataSource=${this.financialBoxOfficeRevenue} chart-type="column" x-axis-title="Month" y-axis-title="Projects" computed-plot-area-margin-mode="series" class="monthly-completions-chart"></igc-category-chart>
                </div>
                <div class="column-layout chart-section-1">
                  <div class="column-layout dashboard-header-block">
                    <h5 class="content">
                      AI Feature Usage
                    </h5>
                    <p class="typography__body-2 content">
                      Usage statistics for different AI features.
                    </p>
                  </div>
                  <igc-category-chart .dataSource=${this.financialBoxOfficeRevenue} chart-type="area" x-axis-title="Feature" y-axis-title="Usage (times)" computed-plot-area-margin-mode="series" class="monthly-completions-chart"></igc-category-chart>
                </div>
              </div>
              <div class="column-layout grid-section">
                <igc-grid-lite .data=${this.northwindEmployees} class="project-history-grid">
                  <igc-grid-lite-column field="projectName" header="Project Name" ?filterable=${true} ?sortable=${true}></igc-grid-lite-column>
                  <igc-grid-lite-column field="status" header="Status" ?filterable=${true} ?sortable=${true}></igc-grid-lite-column>
                  <igc-grid-lite-column field="creationDate" header="Created" ?filterable=${true} ?sortable=${true}></igc-grid-lite-column>
                  <igc-grid-lite-column field="lastUpdateDate" header="Last Update" ?filterable=${true} ?sortable=${true}></igc-grid-lite-column>
                </igc-grid-lite>
                <div class="column-layout dashboard-header-block">
                  <h5 class="content">
                    Project History
                  </h5>
                  <p class="typography__body-2 content">
                    Recent projects and their statuses.
                  </p>
                </div>
              </div>
            </div>
            <div class="column-layout list-column">
              <div class="column-layout recent-activity-section">
                <div class="column-layout dashboard-header-block">
                  <h5 class="content">
                    Recent Activity
                  </h5>
                  <p class="typography__body-2 content">
                    Latest actions and notifications.
                  </p>
                </div>
                <igc-list class="recent-activity-list">
                  <igc-list-item ?selected=${this.recentActivityListSelectedItem != null && this.recentActivityListSelectedItem === '0'} @click=${() => this.recentActivityListSelectedItem = '0'}>
                    <igc-avatar slot="start" shape="circle" class="activity-item-1-icon activity-item-1-icon_1">
                      <span class="material-icons icon_4">
                        check_circle
                      </span>
                    </igc-avatar>
                    <div slot="title">Project Completed</div>
                    <div slot="subtitle">Project 'Dragon's Ascent' completed</div>
                  </igc-list-item>
                  <igc-list-item ?selected=${this.recentActivityListSelectedItem != null && this.recentActivityListSelectedItem === '1'} @click=${() => this.recentActivityListSelectedItem = '1'}>
                    <igc-avatar slot="start" shape="circle" class="activity-item-1-icon activity-item-1-icon_2">
                      <span class="material-icons icon_4">
                        cloud_upload
                      </span>
                    </igc-avatar>
                    <div slot="title">New Upload</div>
                    <div slot="subtitle">Manga 'Crimson Blade' uploaded</div>
                  </igc-list-item>
                  <igc-list-item ?selected=${this.recentActivityListSelectedItem != null && this.recentActivityListSelectedItem === '2'} @click=${() => this.recentActivityListSelectedItem = '2'}>
                    <igc-avatar slot="start" shape="circle" class="activity-item-1-icon activity-item-1-icon_3">
                      <span class="material-icons icon_4">
                        palette
                      </span>
                    </igc-avatar>
                    <div slot="title">Processing Update</div>
                    <div slot="subtitle">Colorization applied to 'Hero's Journey'</div>
                  </igc-list-item>
                </igc-list>
              </div>
              <div class="column-layout recent-activity-section">
                <div class="column-layout dashboard-header-block">
                  <h5 class="content">
                    Quick Actions
                  </h5>
                  <p class="typography__body-2 content">
                    Jump to common tasks.
                  </p>
                </div>
                <igc-list class="recent-activity-list">
                  <igc-list-item ?selected=${this.quickActionsListSelectedItem != null && this.quickActionsListSelectedItem === '0'} @click=${this.clickQuickActionNewProject}>
                    <igc-avatar slot="start" shape="circle" class="activity-item-1-icon activity-item-1-icon_4">
                      <span class="material-icons icon_4">
                        add_box
                      </span>
                    </igc-avatar>
                    <div slot="title">New Project</div>
                    <div slot="subtitle">Start a new conversion</div>
                  </igc-list-item>
                  <igc-list-item ?selected=${this.quickActionsListSelectedItem != null && this.quickActionsListSelectedItem === '1'} @click=${this.clickQuickActionViewEditor}>
                    <igc-avatar slot="start" shape="circle" class="activity-item-1-icon activity-item-1-icon_5">
                      <span class="material-icons icon_4">
                        edit
                      </span>
                    </igc-avatar>
                    <div slot="title">Go to Editor</div>
                    <div slot="subtitle">Continue editing your current project</div>
                  </igc-list-item>
                  <igc-list-item ?selected=${this.quickActionsListSelectedItem != null && this.quickActionsListSelectedItem === '2'} @click=${this.clickQuickActionExport}>
                    <igc-avatar slot="start" shape="circle" class="activity-item-1-icon activity-item-1-icon_6">
                      <span class="material-icons icon_4">
                        download
                      </span>
                    </igc-avatar>
                    <div slot="title">Export Project</div>
                    <div slot="subtitle">Export your finished anime</div>
                  </igc-list-item>
                </igc-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
