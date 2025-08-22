import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @state()
  private isHovering = false;

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

    .hoverable-name {
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>💜</text></svg>") 16 0, auto;
      transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .hoverable-name:hover {
      color: var(--md-sys-color-primary);
      font-weight: 800;
      font-size: 4rem;
    }
  `;

  private _openGitHub() {
    window.open('https://github.com/squaredindex/Material-Design-3-Web-Components-Example', '_blank');
  }

  private _handleMouseEnter() {
    this.isHovering = true;
  }

  private _handleMouseLeave() {
    this.isHovering = false;
  }

  render() {
    return html`
      <header>
        <h1 class="md-typescale-display-small">Material Design 3 Components</h1>
        <p class="md-typescale-body-large">hihi <span 
          class="hoverable-name"
          @mouseenter=${this._handleMouseEnter}
          @mouseleave=${this._handleMouseLeave}
        >${this.isHovering ? 'Caliandra' : 'Calical'}</span>...here's a little demo of the components.</p>
        
        <div class="heart-icon">
          <md-icon style="color: var(--md-sys-color-primary); --md-icon-size: 100px;">heart_smile</md-icon>
        </div>
        
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