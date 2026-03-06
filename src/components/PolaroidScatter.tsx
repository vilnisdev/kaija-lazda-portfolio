import React, { useMemo } from 'react';

interface PolaroidScatterProps {
    images: string[];
}

const PolaroidScatter: React.FC<PolaroidScatterProps> = ({ images }) => {
    // Generate random styles once on mount to prevent re-render jitter
    const scatteredStyles = useMemo(() => {
        return images.map(() => ({
            rotation: Math.random() * 20 - 10, // -10deg to 10deg
            zIndex: Math.floor(Math.random() * 10) + 1, // 1 to 10
            translateX: Math.random() * 20 - 10, // -10px to 10px jitter
            translateY: Math.random() * 20 - 10, // -10px to 10px jitter
        }));
    }, [images]);

    return (
        <div className="fragrance-scope relative w-full flex flex-wrap justify-center items-center gap-4 p-8 min-h-[400px]">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="bg-white p-3 pb-12 shadow-lg transition-transform duration-300 hover:z-50 hover:scale-105 cursor-pointer"
                    style={{
                        transform: `rotate(${scatteredStyles[index].rotation}deg) translate(${scatteredStyles[index].translateX}px, ${scatteredStyles[index].translateY}px)`,
                        zIndex: scatteredStyles[index].zIndex,
                    }}
                >
                    <img
                        src={src}
                        alt={`Polaroid ${index + 1}`}
                        className="w-48 h-48 object-cover border border-gray-100"
                    />
                </div>
            ))}
        </div>
    );
};

export default PolaroidScatter;
