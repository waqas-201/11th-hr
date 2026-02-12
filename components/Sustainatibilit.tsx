import React from 'react';

const SustainabilityHero: React.FC = () => {
    return (
        <section className="relative min-h-[600px] w-full overflow-hidden bg-black text-white font-sans">
            {/* Background Image - Replace 'bg-image-path' with your actual asset */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
                style={{
                    backgroundImage: `url('/path-to-your-double-exposure-image.jpg')`,
                    // If you don't have the image, a dark gradient placeholder:
                    // background: 'linear-gradient(to right, #000, #111)' 
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 lg:py-24">

                {/* Top Label */}
                <div className="mb-20 flex items-center gap-2">
                    <div className="h-6 w-6 border-l-2 border-t-2 border-primary" />
                    <span className="text-xl font-light tracking-wide">Sustainability Vision</span>
                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Column: Headlines */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                            Creating <span className="text-white">100% experience</span> <br />
                            with <span className="text-white">0% footprint</span>
                        </h1>
                        <p className="max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
                            Delivering unforgettable, immersive experiences that leave a
                            lasting impact with zero environmental footprint by aligning
                            fully with our clients' sustainability goals.
                        </p>
                    </div>

                    {/* Right Column: CTA Box */}
                    <div className="flex flex-col items-center lg:items-end">
                        <div className="w-full max-w-md rounded-2xl border border-gray-500/50 bg-black/20 p-8 backdrop-blur-sm">
                            <h2 className="mb-8 text-center text-2xl font-medium leading-snug">
                                Download our ESG report now to see how we're making a difference.
                            </h2>
                            <button className="w-full rounded-lg bg-[#00C1B4] py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
                                Download Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: ISO Certifications */}
                <div className="mt-16 flex flex-wrap items-center justify-end gap-8 opacity-80">
                    <img src="/iso-14001.png" alt="ISO 14001" className="h-16 w-auto grayscale invert" />
                    <img src="/iso-20121.png" alt="ISO 20121" className="h-16 w-auto grayscale invert" />
                    <img src="/iso-9001.png" alt="ISO 9001" className="h-16 w-auto grayscale invert" />
                </div>

            </div>
        </section>
    );
};

export default SustainabilityHero;