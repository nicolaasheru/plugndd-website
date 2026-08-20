"use client";

export interface IQuestion {
  current: number;
  total: number;
  question: string;
  left: string;
  right: string;
  value: number | null;
  onChange?: (value: number) => void;
}

export default function Question(data: IQuestion) {
  const { current, total, question, left, right, value, onChange } = data;

  const handleSelect = (nextValue: number) => {
    if (onChange) onChange(nextValue);
  };

  return (
    <div className="border-blue-radial rounded-2xl">
      <div className="w-full min-h-80 md:min-h-96 flex flex-col items-center justify-between p-6 md:p-10 lg:p-16 bg-blue-radial rounded-2xl space-y-4 md:space-y-6 lg:space-y-8">
        <div className="border-blue-radial self-start">
          <p className="px-3 py-1 text-xs tracking-wide bg-background rounded-full">
            Question {current} of {total}
          </p>
        </div>

        <div className="w-full text-start">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-blue-leak">
            {question}
          </h2>
        </div>

        <div className="w-full mt-4">
          <div className="flex items-center justify-between bg-foreground/10 mx-4 md:mx-8 lg:mx-10">
            {[1, 2, 3, 4, 5].map((step) => {
              const selected = value === step;
              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => handleSelect(step)}
                  className={`h-2 w-2 scale-200 md:scale-300 rounded-full border transition-transform duration-150 hover:scale-250 hover:cursor-pointer ${
                    selected
                      ? "bg-gradient-to-l from-[#92d5e3] to-[#3571a3] border-none scale-220 md:scale-310"
                      : "bg-background border-foreground"
                  }`}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-xs md:text-sm lg:text-lg text-foreground/70 mt-8 md:mt-12 lg:mt-16 mb-4">
            <span>{left}</span>
            <span className="text-end">{right}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
