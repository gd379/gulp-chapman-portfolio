import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7cc}">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative min-h-[750px] flex items-center justify-center text-white text-center px-6">
        <Image
          src="/images/homepageImage.jpeg"
          alt="Chapman drinks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl, pt-40 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Make Your Events Special <br />  
            With Exotic Drinks From <br />
            <span className="text-[#ff5a1f]">Gulp Chapman</span>
          </h1>  
          

          <p className="mt-8 max-w-2xl mx-auto text-xl md:text-xl font-semibold">
            Premium mocktails and Chapman drinks made with care to make your
            special moments unforgettable. From small gatherings to grand celebrations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-[#f4511e] text-white px-10 py-4 rounded-md font-bold shadow-md transition-transform duration-300 hover:scale-140">
              Book Event
            </Link>
            <Link
              href="/product"
              className="bg-[#f4511e] text-white px-10 py-4 rounded-md font-bold shadow-md transition-transform duration-300 hover:scale-140">
              View Product
            </Link>
          </div>
        </div>  
      </section>

      {/* About the chapman section */}
      <section className="py-16 px-6 bg-[#FDF8D1]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/ourChapmanImage.png"
              alt="An image of someone holding a Gulp Chapman bottle"
              width={330}
              height={420}
              className="rounded-2xl object-cover"
            />  
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#b71919] mb-8">
              Our Chapman
            </h2>

            <p className="text-black text-xl font-bold leading-relaxed max-w-md mx-auto lg:mx-0">
              Gulp Chapman is a perfect blend of exotic flavors all in one drink.
              Made with premium ingredients, fresh fruits, and a variety of
              soda drinks, each glass delivers a refreshing taste that captures the
              essence of celebration.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-[#f4511e] text-white px-10 py-4 rounded-md font-bold shadow-md transition-transform duration-300 hover:scale-140">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Events Gulp Chapman Cater to Section */}
      <section className="bg-[#b71919] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FDF8D1]">
            Events We Cater For
          </h2>

          <p className="font-semibold text-xl max-w-2xl mx-auto mb-10">
            We bring a burst of flavor for a variety of events, here are some of the
            occasions we serve for
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <EventCard
              title="Birthdays"
              image="/images/birthdayImage.jpg"
              description="Celebrate another year with vibrant, colorful drinks that match the joy and excitement of yourr birthday party."
            />
            <EventCard
              title="Weddings"
              image="/images/weddingImage.jpg"
              description="Make your special day extraordinary with our elegant Chapman bar service and custom mocktail creations."
            />
            <EventCard
              title="Corporate Events"
              image="/images/corperateeventImage.jpg"
              description="Impress clients and colleagues with sophisticated mocktail services tailored for professional gatherings."
            />
            <EventCard
              title="Naming Ceremony"
              image="/images/namingceremonyImage.jpg"
              description="Welcome the newest family member with refreshing Chapman drinks and mocktails for guests of all ages."
            />  
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