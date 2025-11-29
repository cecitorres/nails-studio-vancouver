import '../styles/globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

// Define fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Lumière Nails | Vancouver’s Premier Nail Studio',
  description: 'Experience flawless manicures, pedicures, and stunning nail art in Downtown Vancouver. Book your appointment via WhatsApp!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}