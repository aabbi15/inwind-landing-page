'use client'
import React, { useState, useEffect } from 'react';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full my-5 md:my-16 " data-carousel="slide">
            <div className="relative h-[600px] overflow-hidden rounded-lg md:h-[600px]">
                {[1, 2, 3, 4, 5].map((num, index) => (
                    <div
                        key={num}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                            currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={`/hero/${num}.png`}
                            className="absolute block w-full h-full object-contain"
                            alt={`Slide ${num}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slide indicators */}
            <div className="absolute z-30 hidden md:flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-current={currentSlide === index}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Previous button */}
<button
    onClick={prevSlide}
    className="absolute top-0 start-0 z-30 hidden md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
>
    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" enableBackground="new 0 0 76.00 76.00" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 33.6458,38L 49.4792,53.8333L 38.7917,53.8333L 22.1667,38L 38.7917,22.1667L 49.4792,22.1667L 33.6458,38 Z"></path>
            </g>
        </svg>
        <span className="sr-only">Previous</span>
    </span>
</button>

{/* Next button */}
<button
    onClick={nextSlide}
    className="absolute top-0 end-0 z-30 hidden md:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
>
    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" enableBackground="new 0 0 76.00 76.00" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 42.3542,38L 26.5208,53.8333L 37.2083,53.8333L 53.8333,38L 37.2083,22.1667L 26.5208,22.1667L 42.3542,38 Z"></path>
            </g>
        </svg>
        <span className="sr-only">Next</span>
    </span>
</button>
        </div>
    );
}