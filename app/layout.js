"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={inter.className + " flex min-h-screen flex-col overflow-x-hidden"}>
        {children}
      </body>
    </html>
  )
}
