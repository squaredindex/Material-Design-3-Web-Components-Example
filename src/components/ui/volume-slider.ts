import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedTailwindStyles } from '../../styles/shared-tailwind.js';

@customElement('volume-slider')
export class VolumeSlider extends LitElement {
  @state()
  private volume: number = 69;

  static styles = [
    sharedTailwindStyles,
    css`
      :host {
        display: block;
      }
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
      <div class="flex flex-col">
        <label class="text-sm font-bold ml-4 text-on-surface">Volume: ${this.volume}%</label>
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