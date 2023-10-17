"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { motion } from "framer-motion";
import { AuthProvider } from '../contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {  
  return (
      <html lang="en">
        <body className={inter.className + "z-0 min-h-screen overflow-x-hidden"}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </body>
    </html>
  )
}