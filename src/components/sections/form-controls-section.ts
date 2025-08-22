import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import the theme controller component
import '../ui/theme-controller.js';

@customElement('form-controls-section')
export class FormControlsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .component-section {
      margin-bottom: 48px;
      padding: 24px;
      background-color: var(--md-sys-color-surface);
      border-radius: 12px;
      border: 1px solid var(--md-sys-color-outline-variant);
    }

    .component-section h2 {
      color: var(--md-sys-color-on-surface);
      margin: 0 0 24px 0;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
      padding-bottom: 16px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .form-column {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .control-group label {
      color: var(--md-sys-color-on-surface);
      font-weight: 500;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .checkbox-group span {
      color: var(--md-sys-color-on-surface);
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      
      .component-section {
        padding: 16px;
      }
    }
  `;

  render() {
    return html`
      <section class="component-section">
        <h2 class="md-typescale-headline-medium">Form Controls</h2>
        <div class="form-grid">
          <div class="form-column">
            <md-filled-text-field label="First Name" placeholder="Enter your first name"></md-filled-text-field>
            <md-outlined-text-field label="Last Name" placeholder="Enter your last name"></md-outlined-text-field>
            
            <md-outlined-select label="Country">
              <md-select-option value="us">United States</md-select-option>
              <md-select-option value="ca">Canada</md-select-option>
              <md-select-option value="uk">United Kingdom</md-select-option>
              <md-select-option value="de">Germany</md-select-option>
            </md-outlined-select>
          </div>

          <div class="form-column">
            <div class="control-group">
              <label class="md-typescale-label-large">Preferences</label>
              <div class="checkbox-group">
                <md-checkbox checked></md-checkbox>
                <span class="md-typescale-body-medium">Email notifications</span>
              </div>
              <div class="checkbox-group">
                <md-checkbox></md-checkbox>
                <span class="md-typescale-body-medium">SMS notifications</span>
              </div>
            </div>

            <theme-controller></theme-controller>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'form-controls-section': FormControlsSection;
  }
}