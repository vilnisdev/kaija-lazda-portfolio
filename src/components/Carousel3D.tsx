import { useEffect, useRef, useState } from 'react';
import Lightbox from './Lightbox';

// Import portfolio page images and thumbnails
import page01 from '../assets/portfolio-pages/page-01.webp';
import page02 from '../assets/portfolio-pages/page-02.webp';
import page03 from '../assets/portfolio-pages/page-03.webp';
import page04 from '../assets/portfolio-pages/page-04.webp';
import page05 from '../assets/portfolio-pages/page-05.webp';
import page06 from '../assets/portfolio-pages/page-06.webp';
import page07 from '../assets/portfolio-pages/page-07.webp';

import thumb01 from '../assets/portfolio-pages/page-01 thumbnail.jpg';
import thumb02 from '../assets/portfolio-pages/page-02 thumbnail.jpg';
import thumb03 from '../assets/portfolio-pages/page-03 thumbnail.jpg';
import thumb04 from '../assets/portfolio-pages/page-04 thumbnail.jpg';
import thumb05 from '../assets/portfolio-pages/page-05 thumbnail.jpg';
import thumb06 from '../assets/portfolio-pages/page-06 thumbnail.jpg';
import thumb07 from '../assets/portfolio-pages/page-07 thumbnail.jpg';

interface PortfolioItem {
    id: number;
    src: string;
    thumbnail?: string;
    title: string;
    description: string;
    link?: string;
}

// Portfolio items for the carousel
const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        src: page01,
        thumbnail: thumb01,
        title: 'Handcrafted Book with Drawings',
        description: '',
        link: 'https://www.flipsnack.com/A6E9CEB569B/workshop_1_handmadebook_kaija_lazda'
    },
    {
        id: 2,
        src: page02,
        thumbnail: thumb02,
        title: 'Pendent Lamp',
        description: ''
    },
    {
        id: 3,
        src: page03,
        thumbnail: thumb03,
        title: 'Playable Story',
        description: ''
    },
    {
        id: 4,
        src: page04,
        thumbnail: thumb04,
        title: 'Thing Explainer',
        description: ''
    },
    {
        id: 5,
        src: page05,
        thumbnail: thumb05,
        title: 'Designing Social Commentary',
        description: ''
    },
    {
        id: 6,
        src: page06,
        thumbnail: thumb06,
        title: 'Photoshop Speaker Composite',
        description: ''
    },
    {
        id: 7,
        src: page07,
        thumbnail: thumb07,
        title: 'Technical Drawing',
        description: ''
    },
];

interface Carousel3DProps {
    className?: string;
}

const Carousel3D = ({ className = '' }: Carousel3DProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const dragStartRef = useRef({ x: 0, angle: 0, hasMoved: false });

    const itemCount = portfolioItems.length;
    const anglePerItem = 360 / itemCount;
    const radius = 280;

    // Auto-rotation effect - slows down when hovering, stops when dragging
    useEffect(() => {
        if (!isAutoRotating || isDragging) return;

        const rotationSpeed = isHovering ? 0.08 : 0.3;

        const interval = setInterval(() => {
            setRotationAngle(prev => prev - rotationSpeed);
        }, 30);

        return () => clearInterval(interval);
    }, [isAutoRotating, isDragging, isHovering]);

    // Mouse/touch drag handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragStartRef.current = { x: clientX, angle: rotationAngle, hasMoved: false };
        setIsAutoRotating(false);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (dragStartRef.current.x === 0) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - dragStartRef.current.x;

        if (Math.abs(deltaX) > 5) {
            dragStartRef.current.hasMoved = true;
            setIsDragging(true);
            const newAngle = dragStartRef.current.angle + deltaX * 0.3;
            setRotationAngle(newAngle);
        }
    };

    const handleDragEnd = () => {
        dragStartRef.current = { x: 0, angle: 0, hasMoved: false };
        setIsDragging(false);
        setTimeout(() => setIsAutoRotating(true), 3000);
    };

    const handleItemClick = (index: number, e: React.MouseEvent) => {
        if (dragStartRef.current.hasMoved) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        openLightbox(index);
    };

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const navigateTo = (index: number) => {
        setCurrentIndex(index);
    };

    const rotateToItem = (index: number) => {
        setIsAutoRotating(false);
        const targetAngle = -index * anglePerItem;
        setRotationAngle(targetAngle);
        setTimeout(() => setIsAutoRotating(true), 3000);
    };

    return (
        <>
            <div
                className={`carousel-container ${className}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                    setIsHovering(false);
                    if (!isDragging) {
                        setTimeout(() => setIsAutoRotating(true), 500);
                    }
                }}
            >
                <div
                    className="carousel-3d"
                    ref={carouselRef}
                    style={{ transform: `rotateY(${rotationAngle}deg)` }}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                >
                    {portfolioItems.map((item, index) => {
                        const angle = index * anglePerItem;
                        return (
                            <div
                                key={item.id}
                                className="carousel-item"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                }}
                                onClick={(e) => handleItemClick(index, e)}
                                onDoubleClick={() => rotateToItem(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        openLightbox(index);
                                    }
                                }}
                                title={item.title}
                            >
                                <img
                                    src={item.thumbnail || item.src}
                                    alt={item.title}
                                    loading="lazy"
                                    draggable={false}
                                />
                                <div className="carousel-item-label">
                                    {item.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Lightbox
                items={portfolioItems}
                currentIndex={currentIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNavigate={navigateTo}
            />
        </>
    );
};

export default Carousel3D;
