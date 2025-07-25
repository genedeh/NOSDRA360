"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaUserTie, FaShieldAlt, FaTools, FaExclamationTriangle } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const images = [
    "/images/bg1.jpeg",
    "/images/bg2.jpg",
    "/images/bg3.jpeg",
    "/images/bg4.jpg",
    "/images/bg5.jpg",
    "/images/bg6.jpg",
];


const SliderSection = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlide('right');
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleSlide = (dir: 'left' | 'right') => {
        if (animating) return;

        setDirection(dir);
        setAnimating(true);

        setTimeout(() => {
            setCurrentIndex((prev) => {
                if (dir === 'right') return (prev + 1) % images.length;
                else return (prev - 1 + images.length) % images.length;
            });
            setAnimating(false);
        }, 500);
    };

    return (
        <>

            <div className="relative w-full h-screen overflow-hidden">

                {/* Slides wrapper */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}vw)`,
                            width: `${images.length * 100}vw`,
                        }}
                    >
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative w-screen h-full flex-shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Slide ${index}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

                {/* Arrows */}
                <button
                    onClick={() => handleSlide('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30 bg-white/20 hover:bg-white/30 transition rounded-full p-2"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={() => handleSlide('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-30 bg-white/20 hover:bg-white/30 transition rounded-full p-2"
                >
                    <MdKeyboardArrowRight />
                </button>


                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
                    <Image
                        src="/images/bg1.jpeg"
                        alt="NOSDRA Logo"
                        width={128}
                        height={128}
                        className="mb-4 rounded-xl bg-white/10 p-2 object-contain"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold text-mint-300">NOSDRA360</h1>
                    <p className="mt-4 text-lg md:text-xl text-mint-200">
                        A Smarter Command for Environmental Oversight
                    </p>
                    <p className="mt-2 max-w-3xl text-sm md:text-base text-gray-200">
                        Digitizing internal coordination, compliance, and reporting across all departments under the Office of the DG.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
                            <FaUserTie /> Staff Portal <MdKeyboardArrowRight />
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-white text-green-800 px-5 py-2 rounded-full hover:bg-gray-100 transition">
                            <FaShieldAlt /> Field Officer <MdKeyboardArrowRight />
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
                            <FaTools /> Admin Access <MdKeyboardArrowRight />
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition">
                            <FaExclamationTriangle /> Report Incident <MdKeyboardArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderSection;