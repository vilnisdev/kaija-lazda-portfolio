import { useEffect, useCallback } from 'react';

interface PortfolioItem {
    id: number;
    src: string;           // Full page image (shown in lightbox)
    thumbnail?: string;    // Optional cropped preview (shown in thumbnails)
    title: string;
    description: string;
    link?: string;         // Optional external link (for clickable areas)
}

interface LightboxProps {
    items: PortfolioItem[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

const Lightbox = ({ items, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
    const currentItem = items[currentIndex];

    const handlePrev = useCallback(() => {
        const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        onNavigate(newIndex);
    }, [currentIndex, items.length, onNavigate]);

    const handleNext = useCallback(() => {
        const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
        onNavigate(newIndex);
    }, [currentIndex, items.length, onNavigate]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    handlePrev();
                    break;
                case 'ArrowRight':
                    handleNext();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, handlePrev, handleNext]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !currentItem) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="lightbox-close" onClick={onClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Navigation arrows */}
                <button className="lightbox-nav lightbox-prev" onClick={handlePrev} aria-label="Previous">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15,18 9,12 15,6" />
                    </svg>
                </button>

                <button className="lightbox-nav lightbox-next" onClick={handleNext} aria-label="Next">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,6 15,12 9,18" />
                    </svg>
                </button>

                {/* Main image */}
                <div className="lightbox-image-container">
                    <img src={currentItem.src} alt={currentItem.title} className="lightbox-image" />
                    {/* Clickable overlay for "Click here!" text in bottom right */}
                    {currentItem.link && (
                        <a
                            href={currentItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lightbox-click-area"
                            aria-label="View full project"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>

                {/* Thumbnail strip */}
                <div className="lightbox-thumbnails">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            className={`lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => onNavigate(index)}
                            aria-label={`View ${item.title}`}
                        >
                            <img src={item.thumbnail || item.src} alt={item.title} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
