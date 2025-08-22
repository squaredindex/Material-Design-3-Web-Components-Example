import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import the volume slider component
import '../ui/volume-slider.js';

@customElement('interactive-controls-section')
export class InteractiveControlsSection extends LitElement {
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

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .control-group label {
      color: var(--md-sys-color-on-surface);
      font-weight: 500;
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
        <h2 class="md-typescale-headline-medium">Interactive Controls</h2>
        <div class="component-group">
          <div class="control-group">
            <label class="md-typescale-label-large">Enable notifications</label>
            <md-switch checked></md-switch>
          </div>
          
          <volume-slider></volume-slider>

          <div class="control-group">
            <label class="md-typescale-label-large">Loading progress</label>
            <md-linear-progress value="0.6"></md-linear-progress>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'interactive-controls-section': InteractiveControlsSection;
  }
}