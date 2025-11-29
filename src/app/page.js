// app/page.js
"use client";
import Header from '@/components/Header';
import AnimatedText from '@/components/AnimatedText';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';

// Dummy Data
const services = [
  { icon: '✨', title: 'Signature Manicure', description: 'Classic care including shaping, cuticle work, massage, and polish application.' },
  { icon: '🌸', title: 'Luxury Pedicure', description: 'Spa-grade foot treatment with exfoliation, mask, hot towels, and extended massage.' },
  { icon: '🎨', title: 'Custom Nail Art', description: 'From subtle French tips to intricate hand-painted designs by our expert artists.' },
  { icon: '🌿', title: 'Non-Toxic Gel', description: 'Long-lasting, chip-free finish using vegan and 10-free non-toxic gel products.' },
];

const galleryImages = [
  '/images/nail-art-1.webp', // Placeholder - add these to public/images
  '/images/studio-shot.webp',
  '/images/pedicure.webp',
  '/images/gel-art.webp',
];

const whatsappLink = "https://wa.me/16045551234?text=Hello%20Lumière%20Nails,%20I%20would%20like%20to%20book%20an%20appointment.";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light-gray font-sans">
      <Header />

      {/* === 1. Hero Section === */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden" style={{ backgroundImage: "url('/images/hero-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-dark-charcoal/40"></div> {/* Soft Overlay */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 p-4 max-w-4xl">
          <AnimatedText
            text="Vancouver's Sanctuary for Flawless Nails."
            className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          />
          <p className="text-xl text-white/90 mb-10">
            Find your signature style in the heart of Downtown Vancouver. Quality, elegance, and non-toxic luxury.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-primary-rose text-white text-lg font-bold rounded-full shadow-2xl hover:bg-primary-rose/90 transition-all uppercase tracking-wider"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Book via WhatsApp Now
          </motion.a>
        </motion.div>
      </section>

      {/* === 2. Services Overview === */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-4">Our Signature Offerings</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Elevate your nail care routine with our focused and luxurious service menu.</p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* === 3. Photo Gallery === */}
      <section id="gallery" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-dark-charcoal mb-4">Artistry in Every Detail</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">A selection of our latest work and studio ambiance.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
              >
                {/* Use Next.js Image component in a real app */}
                <img src={src} alt={`Nail Art ${index + 1}`} className="w-full h-full object-cover aspect-square" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === 4. Final CTA and Footer === */}
      <section id="contact" className="bg-dark-charcoal text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold mb-2">Ready for a Treat?</h2>
            <p className="text-gray-300">Book your flawless nail experience today. Vancouver awaits!</p>
          </div>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 bg-primary-rose text-white text-lg font-bold rounded-full shadow-xl hover:bg-primary-rose/80 transition-all uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Message Us to Book
          </motion.a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
            <p className="mb-2">📍 123 Smithe St, Vancouver, BC V6B 4R8</p>
            <p className="mb-2">Open Tue - Sat: 10:00 AM - 6:00 PM</p>
            <p>&copy; {new Date().getFullYear()} Lumière Nails. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}