# Material Design 3 Web Components Example

A comprehensive example showcasing **Material Design 3 Web Components** with **Vite** and **Lit**, featuring dynamic theming, interactive components, and helpful setup resources.

## ✨ Features

- **🎨 Dynamic Theme Switching**: Light, dark, and system modes with Material Design 3 color tokens
- **📱 Responsive Design**: Mobile-first layout that works on all devices  
- **⚡ Interactive Components**: Volume slider with localStorage persistence
- **🧩 Comprehensive Showcase**: Buttons, forms, chips, cards, and more Material Web components
- **📚 Resource Links**: Direct links to all essential documentation and setup guides
- **🚀 Modern Stack**: Vite + Lit + TypeScript for fast development

## 🚀 Quick Start

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/squaredindex/Material-Design-3-Web-Components-Example.git
   cd Material-Design-3-Web-Components-Example
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the demo in action!

### Build for Production

```bash
bun run build
```

Preview the production build:
```bash
bun run preview
```

## 🎯 What's Included

### Components Demonstrated

- **Buttons**: Filled, outlined, text buttons, and floating action buttons (FAB)
- **Form Controls**: Text fields (filled & outlined), checkboxes, radio buttons, select dropdowns
- **Interactive Elements**: Switches, sliders, progress indicators
- **Navigation**: Chips (assist & filter variants)
- **Layout**: Cards with actions and proper Material Design spacing

### Custom Lit Components

- **`<theme-controller>`**: Handles light/dark/system theme switching with persistence
- **`<volume-slider>`**: Interactive slider with real-time percentage display and localStorage

## 📖 Documentation & Resources

This project demonstrates integration with several key technologies. Here are the essential resources:

### Material Web Components
- **[Introduction](https://material-web.dev/about/intro/)** - Overview of Material Web
- **[Quick Start Guide](https://github.com/material-components/material-web/blob/main/docs/quick-start.md)** - Official setup instructions
- **[Component Documentation](https://material-web.dev/components/)** - Complete component reference

### Fonts & Icons
- **[Material Icons](https://fonts.google.com/icons)** - Browse thousands of Material Design icons
- **[Roboto Font](https://fonts.google.com/specimen/Roboto)** - Material Design's primary typeface
- **[Google Fonts](https://fonts.google.com/)** - Web font service used in this project

### Development Tools
- **[Lit Documentation](https://lit.dev/docs/)** - Web components framework used for custom components
- **[Vite Guide](https://vite.dev/)** - Build tool and development server
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Type safety for JavaScript

## 🏗️ Project Structure

```
├── src/
│   ├── assets/          # Static assets
│   ├── index.css        # Global styles with MD3 color tokens
│   ├── my-element.ts    # Example Lit component
│   ├── theme-controller.ts    # Theme switching component
│   ├── volume-slider.ts       # Interactive volume slider
│   └── vite-env.d.ts   # TypeScript definitions
├── public/             # Public static files
├── index.html          # Main HTML file with component showcase
├── package.json        # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Material Design 3 Implementation

### Color System
This project uses the complete **Material Design 3 color system** with CSS custom properties:

- **Primary Colors**: `--md-sys-color-primary`, `--md-sys-color-on-primary`
- **Surface Colors**: `--md-sys-color-surface`, `--md-sys-color-on-surface`
- **Container Colors**: `--md-sys-color-primary-container`, `--md-sys-color-secondary-container`

### Typography Scale
Material Design typography classes are used throughout:
- `md-typescale-display-*` for headlines
- `md-typescale-headline-*` for section headers  
- `md-typescale-body-*` for body text
- `md-typescale-label-*` for labels

### Theme Switching
The theme controller implements proper Material Design 3 theming:
- **Light Theme**: Default Material Design 3 light colors
- **Dark Theme**: Official Material Design 3 dark colors
- **System Theme**: Respects user's OS/browser preference

## 🛠️ Customization

### Adding New Components

1. Import the component in `index.html`:
   ```javascript
   import '@material/web/button/filled-button.js';
   ```

2. Use the component:
   ```html
   <md-filled-button>
     <md-icon slot="icon">favorite</md-icon>
     Button Text
   </md-filled-button>
   ```

### Creating Custom Lit Components

Follow the pattern established in `theme-controller.ts` and `volume-slider.ts`:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  @state()
  private myState = 'initial';

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<div>${this.myState}</div>`;
  }
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[Material Design](https://material.io/)** - Design system by Google
- **[Material Web](https://github.com/material-components/material-web)** - Web components implementation
- **[Lit](https://lit.dev/)** - Web components framework
- **[Vite](https://vite.dev/)** - Build tool and development server

---

**Built with 💜 using Material Design 3, Lit, and Vite**