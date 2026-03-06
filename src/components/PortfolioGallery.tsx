import { useState } from 'react';
import Lightbox from './Lightbox';

interface PortfolioItem {
    id: number;
    src: string;           // Full page image (shown in lightbox)
    thumbnail?: string;    // Optional cropped preview (shown in grid)
    title: string;
    description: string;
    link?: string;         // Optional external link (for clickable areas)
}

// Import portfolio page images
import page01 from '../assets/portfolio-pages/page-01.webp';
import page02 from '../assets/portfolio-pages/page-02.webp';
import page03 from '../assets/portfolio-pages/page-03.webp';
import page04 from '../assets/portfolio-pages/page-04.webp';
import page05 from '../assets/portfolio-pages/page-05.webp';
import page06 from '../assets/portfolio-pages/page-06.webp';
import page07 from '../assets/portfolio-pages/page-07.webp';

// Import more portfolio images
import heiwaChair from '../assets/more-portfolio-pages/heiwa-chair.webp';
import klick from '../assets/more-portfolio-pages/klick.webp';
import oxygenKeyPhoneMold from '../assets/more-portfolio-pages/oxygen-key-phone-mold.webp';

// Import thumbnail images
import thumb01 from '../assets/portfolio-pages/page-01 thumbnail.jpg';
import thumb02 from '../assets/portfolio-pages/page-02 thumbnail.jpg';
import thumb03 from '../assets/portfolio-pages/page-03 thumbnail.jpg';
import thumb04 from '../assets/portfolio-pages/page-04 thumbnail.jpg';
import thumb05 from '../assets/portfolio-pages/page-05 thumbnail.jpg';
import thumb06 from '../assets/portfolio-pages/page-06 thumbnail.jpg';
import thumb07 from '../assets/portfolio-pages/page-07 thumbnail.jpg';

// Import more portfolio thumbnails
import heiwaChairThumb from '../assets/portfolio-pages/heiwa-chair-thumbnail.jpg';
import klickThumb from '../assets/portfolio-pages/klick-thumbnail.jpg';
import oxygenKeyPhoneMoldThumb from '../assets/portfolio-pages/oxygen-key-phone-mold-thumbnail.jpg';

// Portfolio items using actual portfolio pages
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
    {
        id: 8,
        src: heiwaChair,
        thumbnail: heiwaChairThumb,
        title: 'Heiwa Chair',
        description: ''
    },
    {
        id: 9,
        src: klick,
        thumbnail: klickThumb,
        title: 'Klick',
        description: ''
    },
    {
        id: 10,
        src: oxygenKeyPhoneMold,
        thumbnail: oxygenKeyPhoneMoldThumb,
        title: 'Oxygen Key Phone Mold',
        description: ''
    },
];

const PortfolioGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <section id="portfolio" className="portfolio-section">

            <div className="portfolio-header">
                <h2 className="portfolio-title">Portfolio</h2>
            </div>

            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="portfolio-item"
                        onClick={() => openLightbox(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openLightbox(index);
                            }
                        }}
                    >
                        <div className="portfolio-item-image">
                            <img src={item.thumbnail || item.src} alt={item.title} loading="lazy" />
                        </div>
                        <div className="portfolio-item-overlay">
                            <h3 className="portfolio-item-title">{item.title}</h3>
                            <p className="portfolio-item-desc">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                items={portfolioItems}
                currentIndex={currentIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNavigate={navigateTo}
            />
        </section>
    );
};

export default PortfolioGallery;
