"use client";

import type { ReactNode } from "react";
import { QuizProvider } from "@/store/quiz-store";

export default function QuizLayout({ children }: { children: ReactNode }) {
  return <QuizProvider>{children}</QuizProvider>;
}
