"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const galleryImages = [
    "/images/galleryImage1.jpg",
    "/images/galleryImage2.jpg",
    "/images/galleryImage3.jpg",
    "/images/galleryImage4.jpg",
    "/images/galleryImage5.webp",
    "/images/galleryImage6.jpg",
];

export default function GalleryPage(){
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedIndex === null) return;

        if (e.key === "ArrowRight") {
            setSelectedIndex((selectedIndex + 1) % galleryImages.length);
        }

        if (e.key === "ArrowLeft") {
            setSelectedIndex(
                (selectedIndex - 1 + galleryImages.length) % galleryImages.length
            );
        }

        if (e.key === "Escape") {
            setSelectedIndex(null);
        }
    };

    window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return(
        <main className="min-h-screen bg-[#b71919]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[420px] md:min-h-[590px] flex items-center justify-center text-center text-white px-6">
                <Image
                    src="/images/galleryHeroImage.jpg"
                    alt="Chapman image"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 max-w-4xl mt-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        Gallery    
                    </h1>

                    <p className="text-lg md:text-3xl font-bold leading-tight">
                        Explore our collection of vibrant Chapman drinks served at memorable
                        events    
                    </p>    
                </div>    
            </section>

            {/* Gallery Section */}
            <section className="bg-[#b71919] px-6 py-14 md:py-20 text-white">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-[#fff8cf] mb-12">
                    Past Events and Deliveries
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
                    {galleryImages.map((image, index) => (
                        <button
                            key={image}
                            onClick={() => setSelectedIndex(index)}
                            className="relative h-[190px] md:h-[150px] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                            />    
                        </button>    
                    ))}
                </div>
            </section>

            {/*CTA*/}
            <section className="bg-[#ff4b14] text-white text-center py-16 px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Refresh Your Event?
                </h2>

                <p className="font-bold text-xl max-w-3xl mx-auto mb-10 ">
                    Let us bring the perfect blend of Flavor and elegance to your next
                    celebration. Book now and have the Gulp Chaapman experience.
                </p>

                <Link
                    href="/contact" 
                    className="bg-white text-black px-8 py-4 rounded-md font-bold shadow-md hover:bg-[#FDF8D1]">
                    Book Your Event Today
                </Link>
            </section>

            <Footer />

            {/* Setting to view image in full screen */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-5"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(null);
                        }}
                        className="fixed top-6 right-6 z-[100000] text-white text-4xl p-3"
                        aria-label="Close image"
                    >
                        <FaTimes />
                    </button>

                    {/* Left arrow */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(
                                (selectedIndex - 1 + galleryImages.length) %
                                    galleryImages.length
                            );
                        }}
                        className="fixed left-4 text-white text-5xl z-[100000]"
                    >
                        ‹
                    </button>

                    {/* Right arrow */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(
                                (selectedIndex + 1) % galleryImages.length
                            );
                        }}
                        className="fixed right-4 text-white text-5xl z-[100000]"
                    >
                        ›
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full max-w-5xl h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[selectedIndex]}
                            alt="Full screen gallery image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}