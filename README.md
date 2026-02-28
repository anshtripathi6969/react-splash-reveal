<div align="center">
  <div style="width: 80px; height: 80px; border-radius: 20px; background: rgba(0,255,157,0.1); border: 2px solid rgba(0,255,157,0.5); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
    <div style="width: 30px; height: 30px; background: #00ff9d; border-radius: 4px;"></div>
  </div>
</div>

<h1 align="center">React Splash Reveal</h1>

<p align="center">
  <strong>Production-ready cinematic loading and reveal animations for React.</strong>
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/npm-v1.0.0-00ff9d?logo=npm" alt="NPM Version">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/license-MIT-gray" alt="License">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/size-2.5kB-red" alt="Bundle Size">
  </a>
</p>

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/anshtripathi6969">Ansh Tripathi</a></sub>
</div>

<br />

---

`react-splash-reveal` gives you gorgeous, GPU-accelerated splash screens out-of-the-box. Perfect for SaaS dashboards, landing pages, and creative portfolios. Enhance your user's first impression with zero added jank to your initial load time.

**[✨ View Live Interactive Demo](https://splashreveal.vercel.app/)**

---

## 🚀 Features

* ⚡ **Ultra-Lightweight**: Zero external dependencies other than React.
* 🎭 **5 Cinematic Styles**: `slide-up`, `curtain`, `fade`, `scale`, and `clip-reveal`.
* 💅 **Built-in Styling**: Includes polished Framer Motion-esque CSS animations.
* 🏎️ **Hardware Accelerated**: Butter-smooth 60fps standard CSS transforms. 
* 📦 **Plug & Play**: Wraps your existing application without architectural changes.
* 💾 **Session Smart**: Remembers when the user has already seen the splash screen (via `sessionStorage`).

## 📦 Installation

Install the package via npm or yarn:

```bash
npm install react-splash-reveal
```
or 
```bash
yarn add react-splash-reveal
```

## 💻 Basic Usage

Using `SplashReveal` is incredibly simple. Just wrap it around your main application component (`YourApp`) and you're good to go.

> **Note:** Don't forget to import the exported CSS file!

```tsx
import 'react-splash-reveal/style.css'; // <-- Required for animations
import { SplashReveal } from 'react-splash-reveal';

// Import your custom logo component
import MyLogo from './MyLogo'; 

function App() {
  return (
    <SplashReveal
      logo={<MyLogo />}
      introAnimation="logo-scale-bounce"
      animation="clip-reveal"
      backgroundColor="#0a0f0f" // Fits dark themes perfectly
      duration={1.5}
    >
      <YourApp />
    </SplashReveal>
  );
}

export default App;
```

## 🛠 API Reference

### `<SplashReveal />` Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `animation` | `slide-up` \| `curtain` \| `fade` \| `scale` \| `clip-reveal` | `'slide-up'` | The style of the reveal animation out of the screen. |
| `duration` | `number` | `0.8` | How long the reveal transition takes (in seconds). |
| `delay` | `number` | `0` | Wait time before the animation starts (in seconds). |
| `backgroundColor`| `string` | `'#000000'` | The background color of the splash overlay. |
| `logo` | `ReactNode` | `undefined` | An optional element (like a logo) to display during the splash. |
| `introAnimation` | `'none'` \| `'logo-scale-bounce'` | `'none'` | The entry animation for your custom logo element. |
| `once` | `boolean` | `true` | Set to `false` to run the animation on every mount (ignores browser SessionStorage caching). |
| `children` | `ReactNode` | **Required** | The application or components to render underneath. |

---

## 🎨 Animation Types

Pick the style that perfectly fits your project's brand:

1. **`slide-up`**: The splash screen smoothly translates upwards out of the viewport.
2. **`curtain`**: The splash screen splits in half and opens left and right.
3. **`fade`**: A classic, soft opacity fade out.
4. **`scale`**: The background scales up and fades out simultaneously.
5. **`clip-reveal`**: A modern rectangular mask uncovers the app from the center out.

## 🤝 Contributing

Contributions are always welcome! Feel free to open issues or submit Pull Requests for new animation styles and improvements.

## 📄 License

[MIT](LICENSE) © Ansh Tripathi
