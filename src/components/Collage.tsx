import { useMemo } from 'react';
import CollageItem from './CollageItem';

const generateRotations = (count: number) => {
    const rotations: number[] = [];
    let lastRotation: number | null = null;

    for (let i = 0; i < count; i++) {
        let rotation;
        let attempts = 0;
        do {
            rotation = (Math.random() * 2) - 1;
        } while (lastRotation !== null && Math.abs(rotation - lastRotation) < 0.2 && attempts++ < 10);

        rotations.push(rotation);
        lastRotation = rotation;
    }
    return rotations;
};

const Collage = () => {
    // We have 5 items
    const rotations = useMemo(() => generateRotations(5), []);

    return (
        <main className="collage-container" style={{ marginTop: 0 }}>
            {/* Item 1 */}
            <CollageItem rotation={rotations[0]}>
                <h2>Brand Identity</h2>
                <p>Developing robust visual systems that communicate core values. From logo design to typography and color palettes, I create consistent brand experiences across all touchpoints.</p>
            </CollageItem>


            {/* Case Study Item */}
            <CollageItem rotation={rotations[4]} className="case-study-layout">
                {/* Main Image Container */}
                <div className="case-study-image">
                    <div
                        style={{
                            background: '#2a2a2a',
                            height: '300px',
                            width: '100%',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            flexDirection: 'column'
                        }}>
                        <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>Put image here</span>
                        <span style={{ opacity: 0.7 }}>Eco-Furniture Startup</span>
                    </div>
                </div>

                {/* Anti-Box Sidebar */}
                <div className="anti-box-sidebar">
                    <h3>Results</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><strong>45%</strong> Increase in Brand Awareness</li>
                        <li style={{ marginBottom: '10px' }}><strong>2x</strong> Social Engagement Rate</li>
                        <li><strong>150+</strong> Warm Leads Generated</li>
                    </ul>
                </div>
            </CollageItem>

            {/* Item 2 */}
            <CollageItem rotation={rotations[1]}>
                <h2>Digital Campaigns</h2>
                <p>Designing high-converting creative assets for social media and display advertising. I blend eye-catching aesthetics with data-driven insights to maximize engagement.</p>
            </CollageItem>


            {/* Case Study Item */}
            <CollageItem rotation={rotations[4]} className="case-study-layout">
                {/* Main Image Container */}
                <div className="case-study-image">
                    <div
                        style={{
                            background: '#2a2a2a',
                            height: '300px',
                            width: '100%',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            flexDirection: 'column'
                        }}>
                        <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>Put image here</span>
                        <span style={{ opacity: 0.7 }}>Eco-Furniture Startup</span>
                    </div>
                </div>

                {/* Anti-Box Sidebar */}
                <div className="anti-box-sidebar">
                    <h3>Results</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><strong>45%</strong> Increase in Brand Awareness</li>
                        <li style={{ marginBottom: '10px' }}><strong>2x</strong> Social Engagement Rate</li>
                        <li><strong>150+</strong> Warm Leads Generated</li>
                    </ul>
                </div>
            </CollageItem>

            {/* Item 3 */}
            <CollageItem rotation={rotations[2]}>
                <h2>Strategic Research</h2>
                <p>My design process begins with deep market research and user analysis. Understanding the 'why' behind consumer behavior allows me to craft more effective design solutions.</p>
            </CollageItem>


            {/* Case Study Item */}
            <CollageItem rotation={rotations[4]} className="case-study-layout">
                {/* Main Image Container */}
                <div className="case-study-image">
                    <div
                        style={{
                            background: '#2a2a2a',
                            height: '300px',
                            width: '100%',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            flexDirection: 'column'
                        }}>
                        <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>Put image here</span>
                        <span style={{ opacity: 0.7 }}>Eco-Furniture Startup</span>
                    </div>
                </div>

                {/* Anti-Box Sidebar */}
                <div className="anti-box-sidebar">
                    <h3>Results</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><strong>45%</strong> Increase in Brand Awareness</li>
                        <li style={{ marginBottom: '10px' }}><strong>2x</strong> Social Engagement Rate</li>
                        <li><strong>150+</strong> Warm Leads Generated</li>
                    </ul>
                </div>
            </CollageItem>

            {/* Item 4 */}
            <CollageItem rotation={rotations[3]}>
                <h2>Visual Storytelling</h2>
                <p>Translating complex narratives into compelling visual formats. Whether it's an infographic, a presentation deck, or a video storyboard, I make information accessible and memorable.</p>
                <div
                    style={{
                        background: '#f8f5f2',
                        height: '150px',
                        width: '100%',
                        marginTop: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#aaa',
                        border: '1px dashed #ccc'
                    }}>
                    Campaign Mockup Preview
                </div>
            </CollageItem>

            {/* Case Study Item */}
            <CollageItem rotation={rotations[4]} className="case-study-layout">
                {/* Main Image Container */}
                <div className="case-study-image">
                    <div
                        style={{
                            background: '#2a2a2a',
                            height: '300px',
                            width: '100%',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            flexDirection: 'column'
                        }}>
                        <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>Put image here</span>
                        <span style={{ opacity: 0.7 }}>Eco-Furniture Startup</span>
                    </div>
                </div>

                {/* Anti-Box Sidebar */}
                <div className="anti-box-sidebar">
                    <h3>Results</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><strong>45%</strong> Increase in Brand Awareness</li>
                        <li style={{ marginBottom: '10px' }}><strong>2x</strong> Social Engagement Rate</li>
                        <li><strong>150+</strong> Warm Leads Generated</li>
                    </ul>
                </div>
            </CollageItem>
        </main>
    );
};

export default Collage;
