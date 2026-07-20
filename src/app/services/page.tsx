import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
    {
        title: "Basic",
        price: "From £399",
        items: [
            "aprox. 50 - 100 drinks",
            "Classic flavors",
            "2 hours service",
            "Standard glassware",
        ],
    },
    {
        title: "Deluxe",
        price: "From £599",
        items: [
            "approx. 100 - 150 drinks",
            "Premium flavors",
            "4 hours service",
            "Premium glassware",
        ],
    },
    {
        title: "Premium",
        price: "From £799",
        items: [
            "approx. 250 drinks",
            "Signature custom flavors",
            "Entire event service",
            "Crystal glassware",
        ],
    },
];

const process = [
    {
        number: "1",
        title: "Inquiry",
        text: "Contact us with your event details, date, and expected guest count. We'll discuss your preferences and provide a customized quote.",
    },
    {
        number: "2",
        title: "Confirm",
        text: "Review your package details, finalize the beverage selections, and secure your booking with a deposit. We'll handle all the planning.",
    },
    {
        number: "3",
        title: "Serve",
        text: "Relax and enjoy! Our service arrives, sets up, and serves refreshing chapman drinks throughout your event with professional service.",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#fff8cf]">
            <Navbar />

            {/*Main hero section*/}
            <section className="relative min-h-[490px] md:min-h-[645px] flex items-center justify-center text-center text-white px-6">
                <Image
                    src="/images/homepageImage.jpeg"
                    alt="Image of cocktails"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />

                <div className="relative z-10 max-w-3xl mt-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Gulp Chapman Services    
                    </h1>
                    <p className="text-lg md:text-2xl font-semibold leading-relaxed">
                        Transform your events with our expertly crafted Chapman drinks. From
                        intimate gatherings to grand celebrations, have a look at services we offer.    
                    </p>    
                </div>    
            </section>

            <section className="py-10 px-5 text-center">
                <h2 className="text-4xl font-bold text-[#b71919]">Our Services</h2>
                <p className=" mt-4 text-black text-lg md:text-2xl mb-8">
                    Choose the perfect package for your event size and style
                </p>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-7">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-[#b71919] text-white rounded-xl px-6 py-8 text-left shadow-md"
                        >
                            <h3 className="text-center text-2xl font-bold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-center text-xl mb-6">{service.price}</p>

                            <ul className="space-y-4 text-lg font-semibold">
                                {service.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Link 
                    href="/contact"
                    className="inline-block mt-8 bg-[#f4511e] text-white px-16 py-4 rounded-md font-bold shadow-md transition-transform duration-300 hover:scale-140">
                        Order Now
                </Link>
            </section>

            {/* What You Would Get Section */}
            <section className="bg-[#b71919] py-10 px-5">
                <div className="max-w-6xl mx-auto bg-[#fff8cf] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#b71919] mb-3">
                            What You Would <br /> Get
                        </h2>

                        <p className="text-black text-lg md:text-lg mb-5 leading-relaxed">
                            We provide everything you need for a seamless chapman drink
                            experience at your event. Our comprehensive service ensures your
                            guests enjoy refreshing, professionlly prepared beverages from start to finish
                        </p>

                        <ul className="space-y-3 text-black text-lg md:text-lg font-semibold list-disc pl-6">
                            <li> Professional setup and teardown</li>
                            <li> Fresh, premium ingredients daily</li>
                            <li> Variety of exotic chapman flavors</li>
                            <li> Custom drinks and presentation</li>
                            <li> Experienced service staff</li>
                            <li> Complete beverage station management</li>
                            <li> Flexible meny customization</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/images/chapmanImage1.jpeg"
                            alt="Chapman"
                            width={430}
                            height={520}
                            className="rounded-2xl object-cover w-full max-w-[430px]"
                        />    
                    </div>
                </div>
            </section>

            {/*Process Section*/}
            <section className="py-10 px-5 text-center">
                <h2 className="max-w-xl mx-auto bg-[#f4511e] text-white text-3xl md:text-4xl font-bold py-5 rounded-lg">
                    Our Process
                </h2>

                <p className="mt-8 mb-10 max-w-2xl mx-auto text-black text-lg md:text-xl font-semibold">
                    Our simple process involves three easy steps to perfect event beverages
                </p>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {process.map((step) => (
                        <div
                            key={step.number}
                            className="bg-[#f4511e] text-white rounded-lg px-6 py-7 shadow-md"
                        >
                            <p className="text-2xl font-bold">{step.number}</p>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-lg leading-relaxed font-semibold">{step.text}</p>
                        </div>        
                    ))}
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
