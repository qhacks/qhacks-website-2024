import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
    template: '%s | QHacks 2024',
    default: 'QHacks 2024'
  },
	description: 'Will QHACKS 2024 be in-person or virtual? What is a hackathon? Who can attend QHacks? How much does it cost to attend QHacks?',
  keywords: ['QHacks', 'QHacks 2024', 'Queens Hackathon'],
  icons: {  
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={inter.className + "z-0 min-h-screen overflow-x-hidden"}>
        {children}
      </body>
    </html>
  )
}
