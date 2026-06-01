import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const testimonials = [
    {
        quote: "One of the best drinks I have ever had",
        name: "Quandale Dingle",
    },
    {
        quote: "Our wedding was a blast tanks to the drinks",
        name: "Kobel Wolfgang",
    },
    {
        quote: "I highly recommend this chapman brand",
        name: "Harry Wilson",
    },
    {
        quote: "So many options to chose from",
        name: "Ted Lasso",
    },
    {
        quote: "Highlighted my birthday party",
        name: "Stacy Omolola",
    },
    {
        quote: "The company enjoyed refreshments from Gulp Chapman",
        name: "Melanie Martinez",
    },
];

function Stars() {
    return (
        <div className="text-[#f4511e] text-3xl md:text-4xl font-bold tracking-widest">
            ★ ★ ★ ★ ★
        </div>
    );
}

export default function TestimonialsPage() {
    return(
        <main className="min-h-screen bg-[#b71919] pt-[120px]">
            <Navbar />

            <section className="bg-[#ff4b14] text-white text-center py-14 md:py-28 px-6">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Testimonials
                </h1>
            </section>

            <section className="bg-[#b71919] px-4 py-8 md:py-10">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#fff8cf] rounded-2xl px-6 md:px-8 py-8 md:py-12 mb-12">
                        <Stars />

                        <p className="mt-6 text-2xl md:text-5xl font-medium leading-tight text-black max-w-6xl">
                            "My friend said to tell you that Gulp is hands down the best
                            Chapman they've had"
                        </p>

                        <p className="mt-10 text-lg md:text-2xl font-bold italic text-black">
                            Nicholas Peter
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                        {testimonials.map((item) => (
                            <div
                                key={item.name}
                                className="bg-[#fff8cf] rounded-2xl px-5 py-6 min-h-[150px] md:min-h-[170px]"
                            >
                                <div className="text-[#f4511e] text-2xl md:text-3xl font-bold tracking-widest">
                                    ★ ★ ★ ★ ★
                                </div>

                                <p className="mt-4 text-lg md:text-xl font-medium leading-tight text-black">
                                    "{item.quote}"
                                </p>

                                <p className="mt-6 text-sm md:text-base font-bold italic text-black">
                                    {item.name}
                                </p>
                            </div>    
                        ))}
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