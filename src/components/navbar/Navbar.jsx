'use client';
import React from 'react';
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.png";
import Image from 'next/image';
const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const pathname = usePathname();
     const isActive = (path) => pathname === path;
    return (
       <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Image src={logo} alt="Logo" width={50} height={50} />
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/" className={`no-underline ${isActive('/') ? 'text-emerald-500 text-xl font-semibold' : 'text-foreground'}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-animals" className={`no-underline ${isActive('/all-animals') ? 'text-emerald-500 text-xl font-semibold' : 'text-foreground'}`}>
              All Animals
            </Link>
          </li>
        </ul>
        <div>
            <Link href="/signin" className="no-underline bg-emerald-500 px-4 py-2 font-bold text-white shadow-[0_4px_10px_rgba(16,185,129,0.3)] hover:scale-105 rounded-3xl   ">
          
                Login
              
            </Link>
          </div>
       
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className={`no-underline ${isActive('/') ? 'text-emerald-500 font-semibold' : 'text-foreground'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-animals" className={`no-underline ${isActive('/all-animals') ? 'text-emerald-500 font-semibold' : 'text-foreground'}`}>
                All Animals
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    );
};

export default Navbar;