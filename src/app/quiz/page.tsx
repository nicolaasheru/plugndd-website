"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { questions } from "@/constants/questions";
import { useQuizStore } from "@/store/quiz-store";
import Question from "../components/quiz/question";

export default function Page() {
  const { answers, setAnswer, setTotalWeight } = useQuizStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];
  const currentId = currentIndex + 1;
  const progress = (currentId / questions.length) * 100;
  const currentAnswer = answers.find((item) => item.id === currentId);
  const hasAnswer = currentAnswer != null;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const handleNext = () => {
    if (!hasAnswer) return;
    setCurrentIndex((index) => Math.min(questions.length - 1, index + 1));
  };

  const handleSubmit = () => {
    if (!hasAnswer) return;
    const total = answers.reduce((sum, item) => sum + item.weight, 0);
    setTotalWeight(total);
    redirect("/quiz/result");
  };

  return (
    <section className="min-h-lvh flex flex-col justify-center space-y-6">
      <motion.div
        className="max-w-7xl w-full mx-auto px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <nav className="mt-6 text-sm text-foreground/60 flex items-center gap-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">DNA Quiz</span>
        </nav>
      </motion.div>

      <motion.h1
        className="mt-4 text-center text-2xl md:text-3xl lg:text-5xl font-bold text-blue-leak"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        PLUGNDD DNA QUIZ
      </motion.h1>
      <motion.p
        className="text-center text-foreground/70 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Use the 1-5 sliders to map how your brand thinks, creates, and makes
        decisions across opposite tendencies
      </motion.p>
      <motion.div
        className="p-6 flex flex-col gap-6 max-w-7xl w-full mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="border-blue-radial rounded-2xl">
          <div className="bg-blue-radial rounded-2xl p-4 md:p-8 space-y-3">
            <div className="flex items-center justify-between text-sm md:text-md lg:text-lg font-medium text-foreground/80">
              <span>
                Question {currentId} of {questions.length}
              </span>
              <span className="text-[#92d5e3]">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-foreground overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#92d5e3] to-[#3571a3] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <motion.div
          key={currentId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
        >
          <Question
            value={currentAnswer?.weight ?? null}
            current={currentId}
            total={questions.length}
            question={currentQuestion.question}
            left={currentQuestion.left}
            right={currentQuestion.right}
            onChange={(weight: number) => setAnswer(currentId, weight)}
          />
        </motion.div>

        <motion.div
          className="mt-6 flex justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`border-blue-radial rounded-full disabled:opacity-40 disabled:pointer-events-none ${currentIndex === 0 ? "" : "hover:cursor-pointer"}`}
          >
            <span className="block md:min-w-36 px-8 py-3 text-sm md:text-base lg:text-lg rounded-full bg-blue-radial-br">
              Previous
            </span>
          </button>

          <button
            type="button"
            onClick={isLastQuestion ? handleSubmit : handleNext}
            disabled={!hasAnswer}
            className={`border-blue-radial rounded-full disabled:opacity-40 disabled:pointer-events-none ${!hasAnswer ? "" : "hover:cursor-pointer"} `}
          >
            <span className="block md:min-w-36 px-8 py-3 text-sm md:text-base lg:text-lg rounded-full bg-blue-radial-br">
              {isLastQuestion ? "Submit" : "Next"}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
