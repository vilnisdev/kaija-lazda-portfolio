import { type ReactNode } from 'react';

interface CollageItemProps {
    rotation: number;
    children: ReactNode;
    className?: string; // For adding 'case-study-layout' etc
}

const CollageItem = ({ rotation, children, className = '' }: CollageItemProps) => {
    return (
        <div className={`collage-wrapper ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="collage-shadow"></div>
            <div className="collage-content" style={className.includes('case-study-layout') ? { padding: 0, overflow: 'visible', background: 'transparent', border: 'none', boxShadow: 'none' } : {}}>
                {children}
            </div>
        </div>
    );
};

export default CollageItem;
