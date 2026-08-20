"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

export interface QuizAnswer {
  id: number;
  weight: number;
}

export interface QuizStoreValue {
  answers: QuizAnswer[];
  totalWeight: number;
  setAnswer: (id: number, weight: number) => void;
  setTotalWeight: (value: number) => void;
}

const QuizContext = createContext<QuizStoreValue | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [totalWeight, setTotalWeight] = useState(0);

  const setAnswer = (id: number, weight: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      const index = next.findIndex((item) => item.id === id);
      if (index === -1) {
        next.push({ id, weight });
      } else {
        next[index] = { id, weight };
      }
      return next;
    });
  };

  const value: QuizStoreValue = {
    answers,
    totalWeight,
    setAnswer,
    setTotalWeight,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizStore(): QuizStoreValue {
  const ctx = useContext(QuizContext);
  if (!ctx) {
    throw new Error("useQuizStore must be used within a QuizProvider");
  }
  return ctx;
}
