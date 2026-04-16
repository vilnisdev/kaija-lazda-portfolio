import React from 'react';
import Lightbox from './Lightbox';
import VideoLightbox from './VideoLightbox';

// Import new portfolio images
import xmasRed from '../assets/priec-gus-ziemassv-tkus-red-pages/page-01.webp';
import ligo from '../assets/priec-us-l-go-sv-tus-1-pages/page-01.webp';
import rtu from '../assets/lv-rep-diena-flag-flat-1-pages/page-01.webp';
import zinibu from '../assets/zinibu-1-pages/page-01.webp';
import stickers1 from '../assets/rtu-sticker-sketch-ideas-pages/page-01.webp';
import stickers2 from '../assets/rtu-sticker-sketch-ideas-pages/page-02.webp';
import stickers3 from '../assets/rtu-sticker-sketch-ideas-pages/page-03.webp';
import stickers4 from '../assets/rtu-sticker-sketch-ideas-pages/page-04.webp';
import stickers5 from '../assets/rtu-sticker-sketch-ideas-pages/page-05.webp';
import stickers6 from '../assets/rtu-sticker-sketch-ideas-pages/page-06.webp';
import stickers7 from '../assets/rtu-sticker-sketch-ideas-pages/page-07.webp';

const InternshipExperience: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const [socialMediaLightboxOpen, setSocialMediaLightboxOpen] = React.useState(false);
    const [socialMediaCurrentIndex, setSocialMediaCurrentIndex] = React.useState(0);

    const [videoLightboxOpen, setVideoLightboxOpen] = React.useState(false);
    const [videoCurrentIndex, setVideoCurrentIndex] = React.useState(0);

    const videoItems = [
        { id: 20, src: '/videos/jani flowers.mp4', title: 'Jani Flowers', description: 'Motion graphics for Jāņi celebration' },
        { id: 21, src: '/videos/ligo video (1) (2).mp4', title: 'Ligo Festival', description: 'Animated greeting for Ligo celebration' },
        { id: 22, src: '/videos/lv rep diena.mp4', title: 'Latvia Republic Day', description: 'Motion graphic for Republic Day' },
        { id: 23, src: '/videos/zinibu diena practice.mp4', title: 'Knowledge Day', description: 'Animated greeting for first of September' },
    ];

    const socialMediaItems = [
        {
            id: 1,
            src: xmasRed,
            title: 'Christmas Greeting Red',
            description: 'Digital holiday greeting for RTU Cultural Center'
        },
        {
            id: 2,
            src: ligo,
            title: 'Ligo Festival',
            description: 'Measurement greeting for Ligo celebration'
        },
        {
            id: 3,
            src: rtu,
            title: 'Latvia Republic Day',
            description: 'Flag design for Republic Day celebration'
        },
        {
            id: 4,
            src: zinibu,
            title: 'Knowledge Day',
            description: 'First of September greeting'
        }
    ];

    const featuredWorkItems = [
        {
            id: 5,
            src: stickers1,
            title: 'RTU Sticker Sketches 1',
            description: 'Concept sketches for RTU stickers'
        },
        {
            id: 6,
            src: stickers2,
            title: 'RTU Sticker Sketches 2',
            description: 'Concept sketches for RTU stickers'
        },
        {
            id: 7,
            src: stickers3,
            title: 'RTU Sticker Sketches 3',
            description: 'Concept sketches for RTU stickers'
        },
        {
            id: 8,
            src: stickers4,
            title: 'RTU Sticker Sketches 4',
            description: 'Concept sketches for RTU stickers'
        },
        {
            id: 9,
            src: stickers5,
            title: 'RTU Sticker Sketches 5',
            description: 'Concept sketches for RTU stickers'
        },
        {
            id: 10,
            src: stickers6,
            title: 'RTU Sticker Sketches 6',
            description: 'Concept sketches for RTU stickers'
        },
        {
            id: 11,
            src: stickers7,
            title: 'RTU Sticker Sketches 7',
            description: 'Concept sketches for RTU stickers'
        }
    ];


    return (
        <section id="experience" className="py-24 px-6" style={{ backgroundColor: '#f8f5f2' }}>
            <div className="max-w-4xl mx-auto">


                {/* Featured Internship Content */}
                <div>
                    <div>
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                                    Graphic Design Assistant
                                </h3>
                                <p className="text-xl text-gray-500 font-semibold">
                                    RTU Cultural Center
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                During my internship as a graphic design assistant, I designed and created digital holiday greeting messages for the RTU Cultural Center which RTU could use on its social media platforms. I used Adobe Illustrator, Adobe Photoshop, Adobe InDesign, and Adobe After Effects to create these images and messaging. I also created designs for logo stickers representing the RTU Cultural Center and its various social clubs. I incorporated historical cultural symbols and images and modernized them to reflect the innovation and relevance of the Cultural Center in today’s world.                             </p>

                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setLightboxOpen(true)}
                                className="cta-button"
                                style={{ padding: '10px 25px', fontSize: '0.85rem' }}
                            >
                                Stickers
                            </button>
                            <button
                                onClick={() => setSocialMediaLightboxOpen(true)}
                                className="cta-button"
                                style={{ padding: '10px 25px', fontSize: '0.85rem' }}
                            >
                                Social Media
                            </button>
                            <button
                                onClick={() => setVideoLightboxOpen(true)}
                                className="cta-button"
                                style={{ padding: '10px 25px', fontSize: '0.85rem' }}
                            >
                                Videos
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <Lightbox
                items={featuredWorkItems}
                currentIndex={currentIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setCurrentIndex}
            />

            <Lightbox
                items={socialMediaItems}
                currentIndex={socialMediaCurrentIndex}
                isOpen={socialMediaLightboxOpen}
                onClose={() => setSocialMediaLightboxOpen(false)}
                onNavigate={setSocialMediaCurrentIndex}
            />

            <VideoLightbox
                items={videoItems}
                currentIndex={videoCurrentIndex}
                isOpen={videoLightboxOpen}
                onClose={() => setVideoLightboxOpen(false)}
                onNavigate={setVideoCurrentIndex}
            />
        </section>
    );
};

export default InternshipExperience;
