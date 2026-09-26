"use client";

import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/components/shared/plan-context";

const Navbar = () => {
  const { plan, savedWorkouts } = usePlan();

  const planCount = plan.length;
  const savedCount = savedWorkouts.length;

  return (
    <nav className="w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex min-h-14 w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src={logo}
            alt="Fitlog Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />

          <h1 className="text-base font-bold tracking-wide text-white sm:text-lg">
            FITLOG
          </h1>
        </Link>

        {/* Middle Navigation */}
        <div className="flex items-center gap-2 text-xs sm:gap-4 sm:text-sm md:gap-6">

          {/* Workouts */}
          <Link
            href="/"
            className="rounded-full bg-lime-900 px-3 py-1.5 font-medium text-lime-400 transition hover:bg-lime-800 sm:px-4"
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className="whitespace-nowrap text-gray-400 transition hover:text-white"
          >
            My Plan
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="text-gray-400 transition hover:text-white"
          >
            Plan
          </Link>

          <span className="min-w-5 rounded-full bg-lime-400 px-1.5 py-0.5 text-center text-[10px] font-semibold text-black sm:text-xs">
            {planCount}
          </span>

          {/* Saved */}
          <Link
            href="/my-plan?tab=saved"
            className="text-gray-400 transition hover:text-white"
          >
            Saved
          </Link>

          <span className="min-w-5 rounded-full border border-gray-700 px-1.5 py-0.5 text-center text-[10px] text-gray-400 sm:text-xs">
            {savedCount}
          </span>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;