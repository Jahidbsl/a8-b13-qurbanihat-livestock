"use client"; 

import { RotateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <RotateLoader color="green" />
    </div>
  );
}