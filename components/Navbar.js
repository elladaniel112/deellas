"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-8 py-4">
        
        <h1 className="text-2xl font-extrabold tracking-wide">DEELLAS</h1>

        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="/collections">Collection</Link>
          <Link href="/contact">Contact</Link>
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      
      {open && (
        <div className="md:hidden flex flex-col items-center bg-black/80 text-white space-y-4 py-4">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="/collections">Collection</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
    