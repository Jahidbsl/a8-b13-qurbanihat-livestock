"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const firstName = user?.name ? user.name.split(" ")[0] : "User";

  const avatarSrc =
    user?.image ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "U")}&background=random`;

  // Google Login Handler
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <header className="mx-auto container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Left Side: Logo & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden transition-all active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
              <span className="text-green-600">Qurbani</span>Hat
            </h2>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/"
              className={`text-md font-semibold transition-colors no-underline ${isActive("/") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-animals"
              className={`text-md font-semibold transition-colors no-underline ${isActive("/all-animals") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
            >
              All Animals
            </Link>
          
          </li>
          <li>
               <Link
              href="/my_profile"
              className={`text-md font-semibold transition-colors no-underline ${isActive("/my_profile") ? "text-emerald-600" : "text-gray-600 hover:text-emerald-500"}`}
            >
              My Profile
            </Link>
          </li>
        </ul>

        {/* Right Side: User Profile / Loading / Login */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="flex items-center justify-center min-w-[100px]">
              <PropagateLoader color="#10b981" size={8} />
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                Hi, {firstName}
              </span>
              <div className="h-9 w-9 relative rounded-full ring-2 ring-emerald-50 overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src={avatarSrc}
                  alt={user?.name || "User Avatar"}
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={async () => await authClient.signOut()}
                className="hidden sm:block text-sm bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600 px-4 py-2 rounded-full font-semibold transition-all border border-transparent hover:border-red-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
        

              <Link
                href="/signin"
                className="bg-emerald-600 text-white no-underline hover:bg-emerald-700 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-100 active:scale-95"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-50 ${
          isMenuOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          <li>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex w-full p-3 rounded-xl text-base font-semibold no-underline ${isActive("/") ? "bg-emerald-50 text-emerald-600" : "text-gray-600"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-animals"
              onClick={() => setIsMenuOpen(false)}
              className={`flex w-full p-3 rounded-xl text-base font-semibold no-underline ${isActive("/all-animals") ? "bg-emerald-50 text-emerald-600" : "text-gray-600"}`}
            >
              All Animals
            </Link>
          </li>
             <li>
            <Link
              href="/my_profile"
              onClick={() => setIsMenuOpen(false)}
              className={`flex w-full p-3 rounded-xl text-base font-semibold no-underline ${isActive("/all-animals") ? "bg-emerald-50 text-emerald-600" : "text-gray-600"}`}
            >
              My Profile
            </Link>
          </li>

       

          {user && (
            <li className="mt-2 pt-2 border-t border-gray-100">
              <button
                onClick={async () => {
                  await authClient.signOut();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left p-3 text-red-500 font-bold no-underline flex items-center justify-between"
              >
                Logout{" "}
                <span className="text-xs font-normal text-gray-400">
                  ({firstName})
                </span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
