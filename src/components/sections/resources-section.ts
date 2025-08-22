import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import the resource card component
import '../ui/resource-card.js';
import type { ResourceButton } from '../../types/index.js';

@customElement('resources-section')
export class ResourcesSection extends LitElement {
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

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    @media (max-width: 768px) {
      .component-section {
        padding: 16px;
      }
      
      .cards-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private resources = [
    {
      title: 'Material Web',
      description: 'Get started with Material Web components and follow the official quick-start guide for implementation.',
      buttons: [
        {
          label: 'Introduction',
          icon: 'info',
          url: 'https://material-web.dev/about/intro/',
          variant: 'text'
        },
        {
          label: 'Quick Start',
          icon: 'rocket_launch',
          url: 'https://github.com/material-components/material-web/blob/main/docs/quick-start.md',
          variant: 'filled'
        }
      ] as ResourceButton[]
    },
    {
      title: 'Material Icons',
      description: 'Browse and search thousands of Material Design icons for your web applications.',
      buttons: [
        {
          label: 'Browse Icons',
          icon: 'palette',
          url: 'https://fonts.google.com/icons',
          variant: 'filled'
        }
      ] as ResourceButton[]
    },
    {
      title: 'Google Fonts',
      description: 'Access Roboto and other Google Fonts used in Material Design typography systems.',
      buttons: [
        {
          label: 'Roboto Font',
          icon: 'text_fields',
          url: 'https://fonts.google.com/specimen/Roboto',
          variant: 'text'
        },
        {
          label: 'All Fonts',
          icon: 'font_download',
          url: 'https://fonts.google.com/',
          variant: 'outlined'
        }
      ] as ResourceButton[]
    },
    {
      title: 'Vite + Lit Setup',
      description: 'Learn how to integrate Material Web components with Vite and Lit for modern web development.',
      buttons: [
        {
          label: 'Lit Docs',
          icon: 'description',
          url: 'https://lit.dev/docs/',
          variant: 'text'
        },
        {
          label: 'Vite Guide',
          icon: 'build',
          url: 'https://vite.dev/',
          variant: 'outlined'
        }
      ] as ResourceButton[]
    }
  ];

  render() {
    return html`
      <section class="component-section">
        <h2 class="md-typescale-headline-medium">Setup Resources</h2>
        <div class="cards-grid">
          ${this.resources.map(resource => html`
            <resource-card
              .title=${resource.title}
              .description=${resource.description}
              .buttons=${resource.buttons}>
            </resource-card>
          `)}
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'resources-section': ResourcesSection;
  }
}