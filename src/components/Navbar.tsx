import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/product", label: "Product" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Book Event/Contact" },
];

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 z-[9999] w-full">
        <div className="h-10 bg-[#ff7a1a] flex items-center justify-end px-6">
          <a
            href="https://www.instagram.com/gulp_chapman/?hl=af"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-xl"
            aria-label="Gulp Chapman Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="relative h-20 bg-[#b71919] flex items-center px-4 md:px-10">
          <Link href="/" className="relative z-[10001]">
            <Image
              src="/images/gulplogo.jpg"
              alt="Gulp Chapman logo"
              width={60}
              height={60}
              className="w-[60px] h-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-10 font-bold">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="
        relative
        text-white
        transition-all
        duration-300
        hover:text-[#ff7a1a]
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-0
        after:bg-[#ff7a1a]
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      {link.label}
    </Link>
  ))}
</nav>
        </div>
      </header>

      {/* Native mobile menu toggle */}
      <input id="mobile-menu-toggle" type="checkbox" className="peer sr-only" />

      <label
        htmlFor="mobile-menu-toggle"
        className="fixed top-[50px] right-5 z-[100000] lg:hidden cursor-pointer p-4 text-white text-3xl"
        aria-label="Toggle menu"
      >
        <FaBars className="peer-checked:hidden" />
        <FaTimes className="hidden peer-checked:block" />
      </label>

      {/* Mobile menu */}
      <div className="fixed top-[120px] right-0 z-[99999] hidden w-[55%] bg-[#b71919] shadow-xl peer-checked:block lg:hidden">
        <nav className="flex flex-col gap-6 px-6 py-7 text-white font-bold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}