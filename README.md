# React Splash Reveal

A premium, production-ready cinematic splash/launch screen library for React applications.

Bring mobile-app style launch transitions to your web app with minimal bundle size, hardware-accelerated CSS animations, and zero runtime animation library dependencies.

## Features
- **GPU-Accelerated**: Fluid `60fps` animations using CSS `transform` and `opacity`.
- **Tiny Bundle**: `< 2kb` footprint and tree-shakeable.
- **Multiple Transitions**: Includes `slide-up`, `slide-down`, `fade`, `scale`, `curtain`, and `clip-reveal`.
- **Brand Intro Mode**: Optional `logo-scale-bounce` intro logo animation.
- **Accessibility**: Automatically respects `prefers-reduced-motion`.
- **SSR Safe**: Checks `window` to safely run anywhere.
- **Session Support**: Can show `once` per session.

## Installation

```bash
npm install react-splash-reveal
```

## Basic Usage

Wrap your main application with `<SplashReveal>` and remember to import the stylesheet!

```tsx
import { SplashReveal } from 'react-splash-reveal';
import 'react-splash-reveal/style.css'; // Important!

import App from './App';
import MyLogo from './MyLogo';

export default function Root() {
  return (
    <SplashReveal
      logo={<MyLogo />}
      animation="slide-up"
      introAnimation="logo-scale-bounce"
      backgroundColor="#0f172a"
      duration={1500}
      once={true} // Set to false to see it on every refresh
    >
      <App />
    </SplashReveal>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo` | `ReactNode` | `undefined` | The logo or custom content to display in the center. |
| `duration` | `number` | `1200` | Duration to display the splash screen before animating out (ms). |
| `delay` | `number` | `0` | Delay before the exit animation begins (ms). |
| `animation` | `string` | `"slide-up"` | Exit animation type: `slide-up`, `slide-down`, `fade`, `scale`, `curtain`, or `clip-reveal`. |
| `introAnimation` | `string` | `"none"` | Intro animation type: `"none"` or `"logo-scale-bounce"`. |
| `backgroundColor` | `string` | `"#000"` | Background color of the splash screen. |
| `once` | `boolean` | `true` | Whether to show it only once per session state. |
| `onComplete` | `() => void` | `undefined` | Callback fired when the splash screen has fully completed. |
| `children` | `ReactNode` | **required** | The main application content to reveal. |
