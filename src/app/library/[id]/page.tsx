
import SaveForLaterButton from "./SaveForLaterButton";
import AddToPlanButton from "./AddToPlanButton";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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

  // Extra details
  equipment?: string;
  sets?: number;
  reps?: string;
  instructions?: string[];
}

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Workout not found");
  }

  const workout: Workout = await res.json();

  return (
    <section className="min-h-screen bg-[#101114] px-4 py-6 text-white sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1100px] p-2 sm:p-3">

        <div className="grid grid-cols-1 gap-6 border border-[#30343b] bg-[#111318] p-3 sm:p-4 lg:grid-cols-[1fr_1fr]">

          {/* ================= IMAGE ================= */}
          <div className="relative min-h-[300px] overflow-hidden rounded-lg sm:min-h-[450px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col">

            {/* TITLE */}
            <h1 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
              {workout.name}
            </h1>

            {/* DESCRIPTION */}
            {workout.description && (
              <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">
                {workout.description}
              </p>
            )}

            {/* TAGS */}
            <div className="mt-3 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-3 py-1 text-[9px] font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* INFO BOX */}
            <div className="mt-4 overflow-hidden rounded-lg border border-[#292d34] bg-[#181b21]">

              {/* EQUIPMENT */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  EQUIPMENT
                </span>

                <span className="text-xs text-gray-300">
                  {workout.equipment || "None"}
                </span>
              </div>

              {/* DIFFICULTY */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  DIFFICULTY
                </span>

                <span className="text-xs text-gray-300">
                  {workout.difficulty}
                </span>
              </div>

              {/* SETS */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  SETS
                </span>

                <span className="text-xs text-gray-300">
                  {workout.sets || "-"}
                </span>
              </div>

              {/* REPS */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  REPS
                </span>

                <span className="text-xs text-gray-300">
                  {workout.reps || "-"}
                </span>
              </div>

              {/* DURATION */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  DURATION
                </span>

                <span className="text-xs text-gray-300">
                  {workout.duration} min
                </span>
              </div>

              {/* CALORIES */}
              <div className="flex items-center justify-between border-b border-[#292d34] px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  CALORIES
                </span>

                <span className="text-xs text-gray-300">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[9px] tracking-[0.15em] text-gray-500">
                  RATING
                </span>

                <span className="text-xs text-gray-300">
                  {workout.rating}
                </span>
              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            {workout.instructions &&
              workout.instructions.length > 0 && (
                <div className="mt-5">
                  <h2 className="text-xs font-bold tracking-[0.15em] text-white">
                    INSTRUCTIONS
                  </h2>

                  <ol className="mt-2 space-y-2">
                    {workout.instructions.map((instruction, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-[10px] leading-4 text-gray-400"
                      >
                        <span className="text-gray-600">
                          {index + 1}.
                        </span>

                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

            {/* ================= BUTTONS ================= */}
            <div className="mt-5 flex flex-wrap gap-3">

<AddToPlanButton workout={workout} />

<SaveForLaterButton workout={workout} />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 

