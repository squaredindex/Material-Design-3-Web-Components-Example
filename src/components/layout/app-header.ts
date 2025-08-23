import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    header {
      text-align: center;
      margin-bottom: 48px;
      padding: 32px 0;
    }

    header h1 {
      color: var(--md-sys-color-primary);
      margin: 0 0 16px 0;
    }

    header p {
      color: var(--md-sys-color-on-surface-variant);
      margin: 0;
    }

    .heart-icon {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    .github-link {
      margin-top: 24px;
    }

    a {
      color: var(--md-sys-color-primary);
      font-weight: 600;
    }
  `;

  private _openGitHub() {
    window.open('https://github.com/squaredindex/Material-Design-3-Web-Components-Example', '_blank');
  }

  render() {
    return html`
      <header>
        <h1 class="md-typescale-display-small">Material Design 3 Components</h1>
        <p class="md-typescale-body-large">A little demo of the Material Design 3 web components.</p>
        <p class="md-typescale-body-large">
          Web components are no longer actively maintained by Google. For web using <a title="Angular Material" href="https://material.angular.dev/">Angular Material</a> is recommended.
        </p>
        
        <div class="github-link">
          <md-outlined-button @click=${this._openGitHub}>
            <md-icon slot="icon">code</md-icon>
            View on GitHub
          </md-outlined-button>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}