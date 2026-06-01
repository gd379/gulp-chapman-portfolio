import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#b71919]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[530px] md:min-h-[600px] flex items-center justify-center text-center text-white px-6">
        <Image
          src="/images/aboutHeroImage.jpg"
          alt="Chapman drinks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl mt-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            About Gulp Chapman
          </h1>

          <p className="text-lg md:text-2xl font-semibold leading-tight max-w-3xl mx-auto">
            We're passionate about crafting exceptional Chapman drinks and
            mocktails that transform ordinary events into extraordinary
            celebrations. With years of experience serving weddings, birthdays,
            parties, and naming ceremonies, we bring artistry, flavor, and
            elegance to every glass we pour.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-[#b71919] text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-[210px] h-[210px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden bg-[#e5e5e5]">
              <Image
                src="/images/founderImage.jpg"
                alt="Founder of Gulp Chapman"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              Founder of Gulp Chapman
            </h2>

            <p className="text-base md:text-2xl font-semibold leading-tight max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
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
  );
}