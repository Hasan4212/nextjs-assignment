import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <main className="min-h-screen bg-[#121317] flex items-center justify-center p-4 sm:p-6">
      <section
        className="
          w-full
          max-w-[1100px]
          bg-[#15161b]
          border
          border-dashed
          border-[#28485b]
          
          flex
          flex-col
          md:flex-row
          
          items-center
          justify-between
          
          px-5
          py-8
          sm:px-8
          md:px-10
          md:py-10
          
          gap-8
          md:gap-4
        "
      >
        {/* LEFT SIDE */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          <p className="text-[#c8ff00] text-[10px] sm:text-[11px] font-bold tracking-wider mb-4">
            WORKOUT LIBRARY
          </p>

          <h1
            className="
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              uppercase
              leading-[0.95]
              tracking-tight
            "
          >
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p
            className="
              text-[#8b8c93]
              text-xs
              sm:text-sm
              leading-6
              mt-5
              max-w-[500px]
              mx-auto
              md:mx-0
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <button
            type="button"
            className="
              mt-5
              bg-[#c8ff00]
              hover:bg-[#b5eb00]
              text-black
              text-[10px]
              sm:text-[11px]
              font-extrabold
              px-5
              py-3
              rounded-sm
              transition
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* RIGHT / IMAGE */}
        <div
          className="
            w-full
            md:w-[40%]
            flex
            items-center
            justify-center
          "
        >
          <Image
            src={banner}
            alt="Workout illustration"
            width={350}
            height={350}
            priority
            className="
              w-[180px]
              h-auto
              sm:w-[220px]
              md:w-[280px]
              lg:w-[320px]
              object-contain
            "
          />
        </div>
      </section>
    </main>
  );
};

export default Banner;