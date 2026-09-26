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
  description?: string;
  equipment?: string;
  sets?: number;
  reps?: string;
  instructions?: string[];
}

type Props = {
  workout: Workout;
};

const SaveForLaterButton = ({ workout }: Props) => {
  const { saveForLater, isSaved } = usePlan();

  const saved = isSaved(workout.id);

  return (
    <button
      type="button"
      onClick={() => saveForLater(workout)}
      disabled={saved}
      className="rounded-md border border-[#363a42] bg-transparent px-4 py-2 text-[10px] text-gray-400 transition hover:border-gray-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {saved ? "✓ Saved" : "♡ Save for later"}
    </button>
  );
};

export default SaveForLaterButton;