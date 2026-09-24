import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="min-h-14 flex flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 md:px-8">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Fitlog Logo"
          width={32}
          height={32}
        />

        <h1 className="text-lg font-bold text-white">
          FITLOG
        </h1>
      </div>

      {/* Middle Buttons */}
      <div className="flex items-center gap-3 text-sm sm:gap-6">

        {/* Workouts */}
        <Link
          href="/library"
          className="rounded-full bg-lime-900 px-3 py-1.5 text-lime-400 sm:px-4"
        >
          Workouts
        </Link>

        {/* My Plan */}
        <Link
          href="/my-plan"
          className="text-gray-400 transition hover:text-white"
        >
          My Plan
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 text-sm sm:gap-3">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="text-gray-400 transition hover:text-white"
        >
          Plan
        </Link>

        <span className="rounded-full bg-lime-400 px-2 py-0.5 text-xs text-black">
          0
        </span>

        {/* Saved */}
        <Link
          href="/my-plan"
          className="text-gray-400 transition hover:text-white"
        >
          Saved
        </Link>

        <span className="rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400">
          0
        </span>

      </div>

    </nav>
  );
};

export default Navbar;