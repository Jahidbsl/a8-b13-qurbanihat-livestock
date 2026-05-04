"use client";
import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import cowImage from "@/assets/cowbanner.jpeg";
import cowImg from "@/assets/cowbanner2.png";
import Link from "next/link";
import Lottie from "lottie-react";
import angryCow from "@/assets/Angry cow.json";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0f766e] py-16 md:py-28">
      {/* Background Glows */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-400/20 blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-teal-400/20 blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Text Content Area */}
          <div className="z-10 max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-emerald-100 uppercase">
                Qurbani 2026 Collection
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[1.1] text-white md:text-7xl">
              Authentic <span className="text-emerald-400">Qurbani</span> <br />
              Marketplace.
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-emerald-50/70 md:text-xl">
              Qurbani Hut-e paben shobcheye shustho o shundor goroo-khashi.
              Gorur hat-er jhamela chariye order korun online-e.
            </p>

            <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
              <Link href="/all-animals">
                <Button
                  size="lg"
                  className="bg-emerald-500 px-8 font-bold text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:scale-105"
                >
                  Buy Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="bordered"
                className="border-white/20 px-8 font-bold text-white backdrop-blur-sm hover:bg-white/10"
              >
                Watch Video
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5k+</p>
                <p className="text-xs text-emerald-300 uppercase">
                  Stock Ready
                </p>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-emerald-300 uppercase">
                  Shariah Based
                </p>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Fast</p>
                <p className="text-xs text-emerald-300 uppercase">Delivery</p>
              </div>
            </div>
          </div>

        <Lottie animationData={angryCow} loop={true}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Banner;
