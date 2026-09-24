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
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

export function PlanProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const savedPlan = localStorage.getItem("fitlog-plan");

    if (!savedPlan) {
      return [];
    }

    try {
      return JSON.parse(savedPlan) as Workout[];
    } catch {
      localStorage.removeItem("fitlog-plan");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        addToPlan,
        removeFromPlan,
        isInPlan,
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