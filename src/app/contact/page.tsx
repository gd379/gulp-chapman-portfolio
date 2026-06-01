"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram } from "react-icons/fa";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "@/lib/firebase";

export default function BookEventPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);


  async function processBookingForm(form: HTMLFormElement) {

    if (submittingRef.current) return;
      submittingRef.current = true;
    
  setLoading(true);
  setSuccess("");
  setError("");

  const formData = new FormData(form);
  
  const requiredFields = [
    "fullName",
    "eventType",
    "eventLocation",
    "guestCount",
    "eventDate",
    "email",
    "phone",
  ];

  for (const field of requiredFields) {
    if (!formData.get(field)) {
      setError("Please fill in all required fields.");
      submittingRef.current = false;
      setLoading(false);
      return;
          }
  }

  if (formData.get("eventType") === "Other" && !formData.get("otherEventType")) {
    setError("Please enter the type of event.");
    submittingRef.current = false;
    setLoading(false);
    return;
  }

  const bookingData = {
    fullName: formData.get("fullName"),
    eventType: formData.get("eventType"),
    otherEventType: formData.get("otherEventType") || "",
    eventLocation: formData.get("eventLocation"),
    guestCount: formData.get("guestCount"),
    eventDate: formData.get("eventDate"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    status: "new",
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "eventRequests"), bookingData);

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      bookingData,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    );

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
      bookingData,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      }
    );

    setSuccess("Your request has been submitted successfully!");
    form.reset();
      setSelectedEventType("");
    } catch (err) {
      console.error("Full error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
    submittingRef.current = false;
    setLoading(false);
  }
}

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    await processBookingForm(e.currentTarget);
  }
   

  return (
    <main className="min-h-screen bg-[#b71919] pt-[125px]">
      <Navbar />

      <section className="bg-[#ff4b14] text-white text-center py-16 md:py-20 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">Book or Contact Us</h1>
      </section>

      <section className="bg-[#b71919] px-4 py-8 md:py-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-[#fff8cf] rounded-2xl px-5 md:px-8 py-7 md:py-8">
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="max-w-xl space-y-4">
              <div>
                <label className="block font-bold mb-2 text-black">Full Name</label>
                <input
                  name="fullName"
                  required
                  type="text"
                  placeholder="Enter your full name here"
                  className="w-full border border-black px-3 py-2 text-sm bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">Event Type</label>
                <select
                  name="eventType"
                  required
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  // defaultValue=""
                  className="w-56 border border-black px-3 py-2 text-sm bg-white text-black"
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Naming Ceremony">Naming Ceremony</option>
                  <option value="Other">Other</option>
                </select>
                {selectedEventType === "Other" && (
                  <div className="mt-4">
                    <label className="block font-bold mb-2 text-black">
                      What type of event?
                    </label>
                    <input
                      name="otherEventType"
                      required
                      type="text"
                      placeholder="Enter event type"
                      className="w-full border border-black px-3 py-2 text-sm bg-white text-black"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">Event Location</label>
                <input
                  name="eventLocation"
                  required
                  type="text"
                  placeholder="Enter location of the event"
                  className="w-full border border-black px-3 py-2 text-sm bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">
                  Estimated Number of guests
                </label>
                <input
                  name="guestCount"
                  required
                  type="number"
                  min="1"
                  placeholder="Number of guests"
                  className="w-full border border-black px-3 py-2 text-sm bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">Event Date</label>
                <input
                  name="eventDate"
                  required
                  type="date"
                  className="w-56 border border-black px-3 py-2 text-sm bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-black px-3 py-2 text-sm bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">Phone Number</label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-black px-3 py-2 text-sm bg-white text-black"
                  />
              </div>

              <div>
                <label className="block font-bold mb-2 text-black">More Information</label>
                  <textarea
                    name="message"
                    placeholder="Any additional information (optional)"
                    className="w-full h-36 border border-black px-3 py-2 text-sm bg-white text-black resize-none"
                  />
              </div>

              <div className="pt-4 flex flex-col items-center md:items-start gap-3">
                <button
                  type="button"
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (formRef.current) {
                      processBookingForm(formRef.current);
                    }
                  }}
                  className="bg-[#f4511e] text-white font-bold px-20 py-3 rounded-full shadow-md disabled:opacity-60 touch-manipulation"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>

                {success && <p className="text-green-700 font-bold">{success}</p>}
                {error && <p className="text-red-700 font-bold">{error}</p>}
              </div>
            </form>
          </div>

          {/* keep your contact card here */}
          <div className="bg-[#fff8cf] rounded-2xl px-8 py-8 md:px-12 md:py-10">
            <div className="space-y-5">
              <div>
                <h3 className="text-[#f4511e] font-extrabold text-lg md:text-xl">
                  Email
                </h3>
                <p className="font-bold text-base text-black">gulpchapman@gmail.com</p>
              </div>

              <div>
                <h3 className="text-[#f4511e] font-extrabold text-lg md:text-xl">
                  Phone Number
                </h3>
                <p className="font-bold text-base text-black">+1 234 567 890</p>
              </div>

              <div>
                <h3 className="text-[#f4511e] font-extrabold text-lg md:text-xl">
                  Social Media
                </h3>

                <a
                  href="https://www.instagram.com/gulp_chapman/"
                  target="_blank"
                  className="inline-flex text-3xl mt-2 text-black"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}