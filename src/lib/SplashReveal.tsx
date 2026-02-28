import React, { useState, useEffect } from 'react';
import type { SplashRevealProps } from './types';
import './style.css';

export const SplashReveal: React.FC<SplashRevealProps> = ({
    logo,
    duration = 1200,
    delay = 0,
    animation = "slide-up",
    backgroundColor = "#000",
    once = true,
    onComplete,
    introAnimation = "none",
    children
}) => {
    const [isVisible, setIsVisible] = useState(() => {
        if (once && typeof window !== 'undefined') {
            return sessionStorage.getItem('splash-reveal-shown') !== 'true';
        }
        return true;
    });

    const [phase, setPhase] = useState<'intro' | 'exiting'>('intro');

    useEffect(() => {
        if (!isVisible) return;

        const exitTimer = setTimeout(() => {
            setPhase('exiting');
        }, duration + delay);

        // Default CSS transition time mapped to JS timeout
        const exitDuration = 800;

        const cleanupTimer = setTimeout(() => {
            setIsVisible(false);
            if (once && typeof window !== 'undefined') {
                sessionStorage.setItem('splash-reveal-shown', 'true');
            }
            onComplete?.();
        }, duration + delay + exitDuration);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(cleanupTimer);
        };
    }, [isVisible, duration, delay, once, onComplete]);

    if (!isVisible) {
        return <>{children}</>;
    }

    return (
        <>
            <div
                className={`sr-splash sr-anim-${animation} sr-phase-${phase}`}
                style={{ '--sr-bg': backgroundColor } as React.CSSProperties}
                aria-hidden="true"
            >
                {animation === "curtain" && (
                    <div className="sr-curtains">
                        <div className="sr-curtain-left" style={{ backgroundColor: 'var(--sr-bg)' }} />
                        <div className="sr-curtain-right" style={{ backgroundColor: 'var(--sr-bg)' }} />
                    </div>
                )}

                <div className={`sr-content-wrapper sr-intro-${introAnimation}`}>
                    {logo}
                </div>
            </div>
            <div className="sr-children">
                {children}
            </div>
        </>
    );
};
