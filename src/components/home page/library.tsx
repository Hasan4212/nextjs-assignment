import Image from "next/image";
import Link from "next/link";

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

const Library = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data: Workout[] = await res.json();

  console.log("WORKOUT DATA:", data);

  return (
    <section className="bg-[#121317] min-h-screen p-5">
      <div className="max-w-[1100px] mx-auto">

        <h2 className="text-white text-2xl font-bold mb-5">
          THE LIBRARY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {data.map((workout) => (
            <Link
              key={workout.id}
              href={`/library/${workout.id}`}
              className="bg-[#1b1c21] rounded-lg overflow-hidden block transition hover:scale-[1.02]"
            >

              {/* IMAGE */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">

                <div className="flex flex-wrap gap-1 mb-2">

                  <span className="bg-[#c8ff00] text-black px-2 py-1 text-[9px] font-bold rounded">
                    {workout.difficulty}
                  </span>

                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="bg-[#292b30] text-[#c8ff00] px-2 py-1 text-[9px] rounded"
                    >
                      {muscle}
                    </span>
                  ))}

                </div>

                <h3 className="text-white font-bold uppercase">
                  {workout.name}
                </h3>

                <div className="flex justify-between text-gray-500 text-xs mt-4">
                  <span>{workout.duration} min</span>
                  <span>{workout.caloriesBurned} kcal</span>
                  <span>⭐ {workout.rating}</span>
                </div>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Library;