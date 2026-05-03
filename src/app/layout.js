import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qurbanihat Livestock",
  description: "A best place to buy and sell livestock for Qurban",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <Navbar></Navbar>
        <main>{children}</main>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Footer></Footer>
      </body>
    </html>
  );
}
