import { useCallback, useEffect, useRef, useState } from 'react';

interface HamburgerMenu {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
    panelRef: React.RefObject<HTMLDivElement | null>;
    toggleRef: React.RefObject<HTMLButtonElement | null>;
}

export function useHamburgerMenu(): HamburgerMenu {
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const toggleRef = useRef<HTMLButtonElement | null>(null);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((v) => !v), []);

    useEffect(() => {
        if (!isOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
                toggleRef.current?.focus();
            }
        };

        const handlePointer = (e: PointerEvent) => {
            const target = e.target as Node | null;
            if (!target) return;
            if (panelRef.current?.contains(target)) return;
            if (toggleRef.current?.contains(target)) return;
            close();
        };

        window.addEventListener('keydown', handleKey);
        window.addEventListener('pointerdown', handlePointer);
        return () => {
            window.removeEventListener('keydown', handleKey);
            window.removeEventListener('pointerdown', handlePointer);
        };
    }, [isOpen, close]);

    useEffect(() => {
        if (!isOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const firstLink = panelRef.current?.querySelector<HTMLElement>('a, button');
        firstLink?.focus();
    }, [isOpen]);

    return { isOpen, toggle, open, close, panelRef, toggleRef };
}
