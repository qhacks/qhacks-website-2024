import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QHacks 2024 | Queens University',
  description: 'Queen’s University’s only annual hackathon. Join us for a weekend of innovation, creativity, and fun! February 2nd - 4th, 2024.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col items-left"}>
       <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  )
}
