import { css, unsafeCSS } from 'lit';

// Import the actual Tailwind CSS content as a string
// This will be processed by Vite and give us the full Tailwind CSS
import tailwindContent from './global.css?inline';

// Create a shared CSSResult that contains the full Tailwind CSS
// This prevents duplication across components while giving access to all Tailwind classes
export const sharedTailwindStyles = css`${unsafeCSS(tailwindContent)}`;