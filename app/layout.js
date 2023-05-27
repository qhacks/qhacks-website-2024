import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QHacks 2024 | Queens University',
  description: 'Queen’s University’s only annual hackathon. Join us for a weekend of innovation, creativity, and fun! February 2nd - 4th, 2024.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col items-left bg-gray-950"}>
        <nav className="flex flex-row justify-between bg-gray-950">
          <div className="flex flex-row items-left justify-left">
            <a href='#' className="text-2xl p-4 font-bold text-white">Home</a>
            <a href='#about' className="text-2xl p-4 font-bold text-white">About</a>
            <a href='#' className="text-2xl p-4 font-bold text-white">Sponsors</a>
            <a href='#' className="text-2xl p-4 font-bold text-white">Contact</a>
            <a href='/Schedule' className="text-2xl p-4 font-bold text-white">Schedule</a>
          </div>
        </nav>

        {children}
        
        <Footer />
      </body>
    </html>
  )
}
