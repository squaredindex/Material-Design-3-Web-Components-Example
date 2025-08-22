import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('volume-slider')
export class VolumeSlider extends LitElement {
  @state()
  private volume: number = 75;

  static styles = css`
    :host {
      display: block;
    }

    .volume-control {
      display: flex;
      flex-direction: column;
    }

    .volume-label {
      font-size: 0.875rem;
      font-weight: bold;
      color: var(--md-sys-color-on-surface);
      margin-left: 1rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // Initialize volume from localStorage or default to 75
    const savedVolume = localStorage.getItem('volume');
    this.volume = savedVolume ? parseInt(savedVolume) : 75;
  }

  private handleVolumeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newVolume = parseInt(target.value);
    this.volume = newVolume;
    
    // Save to localStorage
    localStorage.setItem('volume', newVolume.toString());
    
    // Dispatch custom event for external listeners
    this.dispatchEvent(new CustomEvent('volume-change', {
      detail: { volume: newVolume },
      bubbles: true
    }));
  }

  render() {
    return html`
      <div class="volume-control">
        <label class="volume-label">Volume: ${this.volume}%</label>
        <md-slider 
          value="${this.volume}" 
          min="0" 
          max="100"
          @input=${this.handleVolumeChange}>
        </md-slider>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'volume-slider': VolumeSlider;
  }
}