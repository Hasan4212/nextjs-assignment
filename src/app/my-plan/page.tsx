
"use client";

import Link from "next/link";
import { usePlan } from "@/components/shared/plan-context";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const MyPlan = () => {
  const {
    plan,
    removeFromPlan,
    savedWorkouts,
    removeSavedWorkout,
  } = usePlan();

  const searchParams = useSearchParams();

  const isSavedTab = searchParams.get("tab") === "saved";

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <section className="min-h-screen bg-[#101114] px-5 py-8 text-white">
      <div className="mx-auto max-w-[1100px]">

        <h1 className="text-2xl font-bold">MY PLAN</h1>

        <p className="mt-1 text-xs text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-[#252830] bg-[#15171c]">

          <div className="p-5">
            <p className="text-[10px] text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-bold text-[#c8ff00]">
              {plan.length}
            </p>
          </div>

          <div className="border-l border-[#252830] p-5">
            <p className="text-[10px] text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-bold">
              {totalMinutes}
            </p>
          </div>

          <div className="border-l border-[#252830] p-5">
            <p className="text-[10px] text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-2xl font-bold">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="mt-5 flex items-center justify-between">

          <div className="flex rounded-md bg-[#191b21] p-1">

            {/* Today's Plan */}
            <Link
              href="/my-plan"
              className={`rounded px-4 py-2 text-[10px] ${
                !isSavedTab
                  ? "bg-[#242730] text-white"
                  : "text-gray-500"
              }`}
            >
              Today&apos;s Plan
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan?tab=saved"
              className={`rounded px-4 py-2 text-[10px] ${
                isSavedTab
                  ? "bg-[#242730] text-white"
                  : "text-gray-500"
              }`}
            >
              Saved ({savedWorkouts.length})
            </Link>

          </div>

          <div className="text-[10px] text-gray-500">
            Sort by{" "}
            <span className="ml-1 rounded border border-[#292c33] px-2 py-1 text-gray-400">
              Duration⌄
            </span>
          </div>

        </div>

        {/* ================= SAVED ================= */}
        {isSavedTab ? (

          savedWorkouts.length === 0 ? (

            <div className="mt-4 flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-[#20232a]">

              <h2 className="text-sm font-bold">
                NO SAVED WORKOUTS
              </h2>

              <p className="mt-2 text-[10px] text-gray-500">
                Save a workout for later and it will appear here.
              </p>

              <Link
                href="/library"
                className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[10px] font-bold text-black"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            <div className="mt-4 space-y-3">

              {savedWorkouts.map((workout) => (

                <div
                  key={workout.id}
                  className="flex flex-col gap-4 rounded-xl border border-[#20232a] bg-[#15171c] p-4 sm:flex-row sm:items-center"
                >

                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={112}
                    height={80}
                    className="h-32 w-full rounded-lg object-cover sm:h-20 sm:w-28"
                  />

                  <div className="flex-1">

                    <div className="flex flex-wrap gap-1">

                      <span className="rounded bg-[#c8ff00] px-2 py-1 text-[9px] font-bold text-black">
                        {workout.difficulty}
                      </span>

                      {workout.muscleGroups.map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded bg-[#292b30] px-2 py-1 text-[9px] text-[#c8ff00]"
                        >
                          {muscle}
                        </span>
                      ))}

                    </div>

                    <h3 className="mt-2 text-sm font-bold uppercase">
                      {workout.name}
                    </h3>

                    <div className="mt-2 flex gap-4 text-[10px] text-gray-500">
                      <span>
                        {workout.duration} min
                      </span>

                      <span>
                        {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ⭐ {workout.rating}
                      </span>
                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() => removeSavedWorkout(workout.id)}
                    className="rounded-md border border-red-900 px-3 py-2 text-[10px] text-red-400 transition hover:bg-red-950"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )

        ) : (

          /* ================= TODAY'S PLAN ================= */
          plan.length === 0 ? (

            <div className="mt-4 flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-[#20232a]">

              <h2 className="text-sm font-bold">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-[10px] text-gray-500">
                Browse the library and add a lift to get moving.
              </p>

              <Link
                href="/library"
                className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-[10px] font-bold text-black"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            <div className="mt-4 space-y-3">

              {plan.map((workout) => (

                <div
                  key={workout.id}
                  className="flex flex-col gap-4 rounded-xl border border-[#20232a] bg-[#15171c] p-4 sm:flex-row sm:items-center"
                >

                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={112}
                    height={80}
                    className="h-32 w-full rounded-lg object-cover sm:h-20 sm:w-28"
                  />

                  <div className="flex-1">

                    <div className="flex flex-wrap gap-1">

                      <span className="rounded bg-[#c8ff00] px-2 py-1 text-[9px] font-bold text-black">
                        {workout.difficulty}
                      </span>

                      {workout.muscleGroups.map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded bg-[#292b30] px-2 py-1 text-[9px] text-[#c8ff00]"
                        >
                          {muscle}
                        </span>
                      ))}

                    </div>

                    <h3 className="mt-2 text-sm font-bold uppercase">
                      {workout.name}
                    </h3>

                    <div className="mt-2 flex gap-4 text-[10px] text-gray-500">

                      <span>
                        {workout.duration} min
                      </span>

                      <span>
                        {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ⭐ {workout.rating}
                      </span>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromPlan(workout.id)}
                    className="rounded-md border border-red-900 px-3 py-2 text-[10px] text-red-400 transition hover:bg-red-950"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )

        )}

      </div>
    </section>
  );
};

export default MyPlan;
