import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('chips-section')
export class ChipsSection extends LitElement {
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

    md-chip-set {
      margin-bottom: 16px;
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
        <h2 class="md-typescale-headline-medium">Chips</h2>
        <md-chip-set>
          <md-assist-chip label="JavaScript"></md-assist-chip>
          <md-assist-chip label="TypeScript"></md-assist-chip>
          <md-assist-chip label="Material Design"></md-assist-chip>
        </md-chip-set>
        
        <md-chip-set>
          <md-filter-chip label="Frontend" selected></md-filter-chip>
          <md-filter-chip label="Backend"></md-filter-chip>
          <md-filter-chip label="Mobile" selected></md-filter-chip>
          <md-filter-chip label="Design"></md-filter-chip>
        </md-chip-set>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chips-section': ChipsSection;
  }
}