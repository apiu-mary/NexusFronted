import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SideBar from './Components/SideBar'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import React from "react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + "flex"}>
        <div className="flex">
          <SideBar/>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}