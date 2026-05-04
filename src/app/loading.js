"use client";

import Lottie from "lottie-react";
import { RotateLoader } from "react-spinners";
import yearOx from "@/assets/Year of the Ox.json";

export default function Loading() {
  return (
     <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-48 h-48">
          <Lottie animationData={yearOx} loop={true} />
        </div>
        <p className="text-emerald-600 font-bold animate-pulse tracking-widest uppercase text-sm">
          Preparing Livestock...
        </p>
      </div>
  );
}
