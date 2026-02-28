import React from 'react';

export interface SplashRevealProps {
    /**
     * The logo or custom content to display in the center.
     */
    logo?: React.ReactNode;
    /**
     * Duration to display the splash screen before animating out (ms).
     */
    duration?: number;
    /**
     * Delay before the exit animation begins (ms).
     */
    delay?: number;
    /**
     * The animation type for exiting.
     */
    animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "scale"
    | "curtain"
    | "clip-reveal";
    /**
     * Background color of the splash screen.
     */
    backgroundColor?: string;
    /**
     * Whether to show it only once per session state.
     */
    once?: boolean;
    /**
     * Callback fired when the splash screen has fully completed and unmounted.
     */
    onComplete?: () => void;
    /**
     * Optional intro animation for the logo.
     */
    introAnimation?: "none" | "logo-scale-bounce";
    /**
     * The main application children to reveal.
     */
    children: React.ReactNode;
}
