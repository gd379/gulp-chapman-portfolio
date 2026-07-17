import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProductPage(){
    return(
        <main className="min-h-screen bg-[#fff8cf]">
            <Navbar />

            {/* Product Intro Section */}
            <section className="mt-10 px-5 py-16 md:py-38">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 ">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/images/productImage.jpg"
                            alt="Gulp Chapman drink"
                            width={430}
                            height={360}
                            className="rounded-3xl object-cover w-full max-w-[430px]"
                            priority
                        />    
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#b71919] mb-6">
                            Gulp Chapman Drink
                        </h1>

                        <p className="text-xl text-black md:text-2xl font-bold leading-relaxed max-w-xl">
                            Our chapman is made with a mix of differnt sodas and with a blend
                            of tropical and exotic fruits. This drink is perfectly balanced to
                            create an unforgetable tate experience. Ideal for any occasion,
                            from casual gatherings to elegant celebrations.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block mt-10 bg-[#eb5724] text-white text-xl px-20 py-5 rounded-full font-bold text-lg shadow-md transition-transform duration-300 hover:scale-140">
                            Order Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ingredients Section */}
            <section className="bg-[#ff7a1a] px-5 py-16 md:py-20">
                <div className="max-w-5xl mx-auto bg-[#fff8cf] rounded-3xl px-6 py-12 md:px-20 md:py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#b71919] text-center mb-12">
                        Ingredients
                    </h2>

                    <ul className="list-disc pl-6 space-y-4 text-black text-lg md:text-xl font-semibold leading-relaxed">
                        <li>
                            <span className="underline font-bold">Grenadine Syrup or Blackcurrant Cordial</span>{" "}
                            : 1/2 cup (e.g. Ribena)
                        </li>
                        <li>
                            <span className="underline font-bold">Orange Soda</span>: 35 cl
                            (e.g. Fanta Orange)
                        </li>
                        <li>
                            <span className="underline font-bold">Lemon-Lime Soda</span>:
                            35 cl (e.g. Sprite)
                        </li>
                        <li>
                            <span className="underline font-bold">Angostura Aromatic Bitters</span>:
                            A few drops
                        </li>
                        <li>
                            <span className="underline font-bold"> Citrus Juice</span>
                            : Freshly squeezed lime, lemon, or orange juice
                        </li>
                        <li>
                            <span className="underline font-bold">Ice Cubes</span>:
                            A generous amount to ensure it is served cold
                        </li>
                        <li>
                            <span className="underline font-bold">Cucumber</span>:
                            Sliced cucumber, important for authentic taste
                        </li>
                        <li>
                            <span className="underline font-bold">Orange & Lemon/Lime</span>:
                            Sliced into wedge shape or half moon shapes
                        </li>
                        <li>
                            <span className="underline font-bold">Fresh Mint Leaves</span>:
                            Optional
                        </li>
                    </ul>
                </div>
            </section>

            {/*CTA*/}
      <section className="bg-[#ff4b14] text-white text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Refresh Your Event?
        </h2>

        <p className="font-bold text-xl max-w-3xl max-w-3xl mx-auto mb-10 ">
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
        </main>
    )
}