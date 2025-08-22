import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('buttons-section')
export class ButtonsSection extends LitElement {
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

    .component-group {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }

    @media (max-width: 768px) {
      .component-section {
        padding: 16px;
      }
    }
  `;

  render() {
    return html`
      <section class="component-section">
        <h2 class="md-typescale-headline-medium">Buttons</h2>
        <div class="component-group">
          <md-filled-button>
            <md-icon slot="icon">settings</md-icon>
            Filled Button
          </md-filled-button>
          <md-outlined-button>
            <md-icon slot="icon">favorite</md-icon>
            Outlined Button
          </md-outlined-button>
          <md-text-button>
            <md-icon slot="icon">share</md-icon>
            Text Button
          </md-text-button>
          <md-fab>
            <md-icon slot="icon">add</md-icon>
          </md-fab>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'buttons-section': ButtonsSection;
  }
}