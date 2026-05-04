"use client";

import Lottie from "lottie-react";
import { RotateLoader } from "react-spinners";
import yearOx from "@/assets/Year of the Ox.json";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <Lottie animationData={yearOx} loop={true}></Lottie>
    </div>
  );
}
