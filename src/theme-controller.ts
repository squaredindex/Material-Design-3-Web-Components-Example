import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

export type ThemeMode = 'light' | 'dark' | 'system';

@customElement('theme-controller')
export class ThemeController extends LitElement {
  @state()
  private currentTheme: ThemeMode = 'light';

  static styles = css`
    :host {
      display: contents;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    this.currentTheme = savedTheme || 'light';
    this.applyTheme(this.currentTheme);
  }

  private applyTheme(theme: ThemeMode) {
    const html = document.documentElement;
    
    // Remove existing theme classes
    html.classList.remove('theme-light', 'theme-dark', 'theme-system');
    
    switch (theme) {
      case 'light':
        html.classList.add('theme-light');
        html.style.colorScheme = 'light';
        break;
      case 'dark':
        html.classList.add('theme-dark');
        html.style.colorScheme = 'dark';
        break;
      case 'system':
        html.classList.add('theme-system');
        html.style.colorScheme = 'light dark';
        break;
    }
    
    // Save preference
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

  private handleThemeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      const theme = target.value as ThemeMode;
      this.applyTheme(theme);
    }
  }

  render() {
    return html`
      <div class="control-group">
        <label class="md-typescale-label-large">Theme</label>
        <div class="radio-group">
          <md-radio 
            name="theme" 
            value="light"
            ?checked=${this.currentTheme === 'light'}
            @change=${this.handleThemeChange}>
          </md-radio>
          <span class="md-typescale-body-medium">Light</span>
        </div>
        <div class="radio-group">
          <md-radio 
            name="theme" 
            value="dark"
            ?checked=${this.currentTheme === 'dark'}
            @change=${this.handleThemeChange}>
          </md-radio>
          <span class="md-typescale-body-medium">Dark</span>
        </div>
        <div class="radio-group">
          <md-radio 
            name="theme" 
            value="system"
            ?checked=${this.currentTheme === 'system'}
            @change=${this.handleThemeChange}>
          </md-radio>
          <span class="md-typescale-body-medium">Auto</span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'theme-controller': ThemeController;
  }
}