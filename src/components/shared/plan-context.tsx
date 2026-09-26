"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

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

interface PlanContextType {
  plan: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  isInPlan: (id: number) => boolean;

  savedWorkouts: Workout[];
  saveForLater: (workout: Workout) => void;
  removeSavedWorkout: (id: number) => void;
  isSaved: (id: number) => boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

export function PlanProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const saved = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      try {
        setPlan(JSON.parse(savedPlan) as Workout[]);
      } catch {
        localStorage.removeItem("fitlog-plan");
      }
    }

    if (saved) {
      try {
        setSavedWorkouts(JSON.parse(saved) as Workout[]);
      } catch {
        localStorage.removeItem("fitlog-saved");
      }
    }

    setHydrated(true);
  }, []);

  // Save plan
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, hydrated]);

  // Add workout to plan
  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  // Remove workout from plan
  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

  // Check plan
  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  // Save workout
  const saveForLater = (workout: Workout) => {
    setSavedWorkouts((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  // Remove saved workout
  const removeSavedWorkout = (id: number) => {
    setSavedWorkouts((currentSaved) =>
      currentSaved.filter((item) => item.id !== id)
    );
  };

  // Check saved
  const isSaved = (id: number) => {
    return savedWorkouts.some((item) => item.id === id);
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        addToPlan,
        removeFromPlan,
        isInPlan,

        savedWorkouts,
        saveForLater,
        removeSavedWorkout,
        isSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
}