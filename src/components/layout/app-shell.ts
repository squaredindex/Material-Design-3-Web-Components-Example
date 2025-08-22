import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import child components
import './app-header.js';
import '../sections/index.js';

@customElement('app-shell')
export class AppShell extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    main {
      margin-top: 48px;
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 16px;
      }
    }
  `;

  render() {
    return html`
      <div class="app-container">
        <app-header></app-header>
        
        <main>
          <buttons-section></buttons-section>
          <form-controls-section></form-controls-section>
          <interactive-controls-section></interactive-controls-section>
          <chips-section></chips-section>
          <resources-section></resources-section>
        </main>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}