// components/Header.js
"use client";
import { motion } from 'framer-motion';

export default function Header() {
  const whatsappLink = "https://wa.me/16045551234?text=Hello%20Lumière%20Nails,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-serif text-dark-charcoal">Lumière Nails</h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="text-dark-charcoal hover:text-primary-rose transition-colors">Services</a>
          <a href="#gallery" className="text-dark-charcoal hover:text-primary-rose transition-colors">Gallery</a>
          <a href="#contact" className="text-dark-charcoal hover:text-primary-rose transition-colors">Contact</a>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary-rose text-white font-semibold rounded-full shadow-lg hover:bg-dark-charcoal transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book via WhatsApp
          </motion.a>
        </nav>
        {/* Mobile menu button placeholder */}
        <button className="md:hidden text-2xl text-dark-charcoal">☰</button>
      </div>
    </header>
  );
}