"use client";
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Button from '../components/Buttons';
import WatchDemoButton from './WatchDemoButton';
import { FiAlertTriangle, FiShield, FiUsers } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import AccessModal from './modals/AccessModal';

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
    const [, setDirection] = useState<'left' | 'right'>('right');
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();




    const handleSlide = useCallback(
        (dir: 'left' | 'right') => {
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
        },
        [animating, images.length] // dependencies
    );
    useEffect(() => {
        const interval = setInterval(() => {
            handleSlide('right');
        }, 5000);
        return () => clearInterval(interval);

    }, [currentIndex, handleSlide]);
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
                    className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 text-black text-3xl z-30 bg-white/20 hover:bg-white/30 transition rounded-full p-2"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={() => handleSlide('right')}
                    className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-black text-3xl z-30 bg-white/20 hover:bg-white/30 transition rounded-full p-2"
                >
                    <MdKeyboardArrowRight />
                </button>


                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
                    <Image
                        src="/images/logo.png"
                        alt="NOSDRA Logo"
                        width={200}
                        height={200}
                        className="-mt-32 mb-4 w-40 h-40 p-3 object-contain rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 shadow-md"
                    />

                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
                        NOSDRAConnect
                    </h1>
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-100 via-green-100 to-green-100 bg-clip-text text-transparent">
                        Leading Environmental Oversight Through Intelligence / Smarter Oversight. Stronger Environmental Impact.
                    </p>
                    <p className="mt-2 max-w-3xl text-sm md:text-base text-gray-200">
                        Streamlining internal workflows, regulatory compliance, and departmental reporting under the
                        <br />Office of Director General.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button bgColor="bg-teal-600" hoverColor="bg-teal-700" onClick={() => setIsOpen(true)}>
                            <FiUsers /> Employee Access Hub <MdKeyboardArrowRight />
                        </Button>

                        <Button bgColor="bg-blue-400" hoverColor="bg-blue-700" textColor="text-black" onClick={() => setIsOpen(true)}>
                            <FiShield /> Field Operations Specialist <MdKeyboardArrowRight />
                        </Button>

                        <Button bgColor="bg-gray-800" hoverColor="bg-gray-900" onClick={() => setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-file-text w-5 h-5 mr-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z">
                                </path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Admin Control Center <MdKeyboardArrowRight />
                        </Button>

                        <Button bgColor="bg-red-600" hoverColor="bg-red-700" onClick={() => router.push('/report-incident')}>
                            <FiAlertTriangle /> Raise an Alert / Submit Incident Report <MdKeyboardArrowRight />
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20">
                    <WatchDemoButton />
                </div>
                {isOpen && <AccessModal onClose={() => setIsOpen(false)} />}
            </div>
        </>
    );
}

export default SliderSection;