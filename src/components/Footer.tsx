import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-10 flex items-center gap-5">
                <Image
                    src="/images/gulplogo.jpg"
                    alt="Gulp Chapman logo"
                    width={55}
                    height={55}
                />

                <div>
                    <h3 className="font-bold text-lg">Gulp Chapman Sparkling Mocktail</h3>
                    <p className="text-sm mt-2 text-gray-300">
                        Premium beverage services for all your special occassions
                    </p>
                </div>    
            </div>

            <div className="border-t border-white/30 px-6 py-5 text-xs">
                © 2026 Chapman Drinks. All rights reserved.
            </div>
        </footer>
    );
}