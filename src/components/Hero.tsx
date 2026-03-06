import { useEffect, useRef } from 'react';
import Navigation from './Navigation';

const Hero = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (overlayRef.current && sectionRef.current) {
                const scrollPosition = window.scrollY;
                const heroHeight = sectionRef.current.offsetHeight;
                let opacity = scrollPosition / heroHeight;
                if (opacity > 1) opacity = 1;
                overlayRef.current.style.opacity = opacity.toString();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <header className="hero-section" ref={sectionRef}>
            <div className="hero-overlay" ref={overlayRef}></div>
            <Navigation />
            <h1 className="hero-title">Kaija Lazda</h1>
            <div className="scroll-indicator" onClick={scrollToContent}>
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </header>
    );
};

export default Hero;
