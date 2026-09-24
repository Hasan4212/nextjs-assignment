"use client";

import { usePlan } from "@/components/shared/plan-context";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

export default function AddToPlanButton({
  workout,
}: {
  workout: Workout;
}) {
  const { addToPlan, isInPlan } = usePlan();

  const alreadyAdded = isInPlan(workout.id);

  return (
    <button
      type="button"
      disabled={alreadyAdded}
      onClick={() => addToPlan(workout)}
      className={`rounded-md px-4 py-2 text-[10px] font-bold transition ${
        alreadyAdded
          ? "cursor-not-allowed bg-gray-700 text-gray-400"
          : "bg-[#c8ff00] text-black hover:bg-[#d5ff40]"
      }`}
    >
      {alreadyAdded
        ? "✓ Added to today's plan"
        : "＋ Add to today's plan"}
    </button>
  );
}