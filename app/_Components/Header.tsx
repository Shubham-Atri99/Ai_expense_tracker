"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-neutral-900 px-6 py-4 shadow-md">
      {/* Left side - Logo + Nav Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <h1 className="text-lg font-bold text-white md:text-2xl">
            AI Expense Tracker
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="transition-colors duration-200 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-200 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* If user is signed in -> Show User Info + UserButton */}
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-9 h-9", // custom size for avatar
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>

        {/* If user is signed out -> Show Get Started button */}
        <SignedOut>
          <Link href="/sign-in">
            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:text-base">
              Get Started
            </button>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

