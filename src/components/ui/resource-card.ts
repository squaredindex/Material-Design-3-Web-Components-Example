import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ResourceButton } from '../../types/index.js';

@customElement('resource-card')
export class ResourceCard extends LitElement {
  @property()
  title = '';

  @property()
  description = '';

  @property({ type: Array })
  buttons: ResourceButton[] = [];

  static styles = css`
    :host {
      display: block;
    }

    .demo-card {
      background-color: var(--md-sys-color-surface);
    }

    .card-content {
      padding: 24px;
    }

    .card-content h3 {
      color: var(--md-sys-color-on-surface);
      margin: 0 0 16px 0;
    }

    .card-content p {
      color: var(--md-sys-color-on-surface-variant);
      margin: 0 0 24px 0;
      line-height: 1.6;
    }

    .card-actions {
      display: flex;
      gap: 16px;
      justify-content: flex-end;
    }
  `;

  private _openUrl(url: string) {
    window.open(url, '_blank');
  }

  render() {
    return html`
      <md-outlined-card class="demo-card">
        <div class="card-content">
          <h3 class="md-typescale-headline-small">${this.title}</h3>
          <p class="md-typescale-body-medium">${this.description}</p>
          <div class="card-actions">
            ${this.buttons.map(button => {
              switch (button.variant) {
                case 'filled':
                  return html`
                    <md-filled-button @click=${() => this._openUrl(button.url)}>
                      <md-icon slot="icon">${button.icon}</md-icon>
                      ${button.label}
                    </md-filled-button>
                  `;
                case 'outlined':
                  return html`
                    <md-outlined-button @click=${() => this._openUrl(button.url)}>
                      <md-icon slot="icon">${button.icon}</md-icon>
                      ${button.label}
                    </md-outlined-button>
                  `;
                case 'text':
                default:
                  return html`
                    <md-text-button @click=${() => this._openUrl(button.url)}>
                      <md-icon slot="icon">${button.icon}</md-icon>
                      ${button.label}
                    </md-text-button>
                  `;
              }
            })}
          </div>
        </div>
      </md-outlined-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'resource-card': ResourceCard;
  }
}