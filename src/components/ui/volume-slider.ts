import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import tailwindStyles from '../../styles/global.css?inline';

@customElement('volume-slider')
export class VolumeSlider extends LitElement {
  @state()
  private volume: number = 69;

  static styles = [
    unsafeCSS(tailwindStyles),
    css`
      :host {
        display: block;
      }
      /* Your component-specific styles */
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    // Initialize volume from localStorage or default to 69
    const savedVolume = localStorage.getItem('volume');
    this.volume = savedVolume ? parseInt(savedVolume) : 69;
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
      <div class="volume-control flex flex-col">
        <label class="volume-label text-sm font-bold ml-4">Volume: ${this.volume}%</label>
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