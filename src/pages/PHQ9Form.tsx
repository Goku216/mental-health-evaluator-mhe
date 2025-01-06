import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertTriangle } from "lucide-react";

type Difficulty = "not" | "somewhat" | "very" | "extremely" | null;
type Answer = 0 | 1 | 2 | 3 | null;

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "Little interest or pleasure in doing things" },
  { id: 2, text: "Feeling down, depressed, or hopeless" },
  { id: 3, text: "Trouble falling or staying asleep, or sleeping too much" },
  { id: 4, text: "Feeling tired or having little energy" },
  { id: 5, text: "Poor appetite or overeating" },
  {
    id: 6,
    text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  },
  {
    id: 7,
    text: "Trouble concentrating on things, such as reading the newspaper or watching television",
  },
  {
    id: 8,
    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  },
  {
    id: 9,
    text: "Thoughts that you would be better off dead or of hurting yourself in some way",
  },
];

export const PHQ9Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(9).fill(0));
  const [difficulty, setDifficulty] = useState<Difficulty>(null);

  const handleAnswer = (value: string): void => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = parseInt(value) as Answer;
    setAnswers(newAnswers);
  };

  const calculateScore = (): number =>
    answers.reduce<number>((sum, val) => sum + (val ?? 0), 0);

  const getStepColor = (index: number): string => {
    if (index === currentStep) return "bg-orange-500 text-white";
    if (index < currentStep) return "bg-green-500 text-white";
    return "bg-gray-200";
  };

  const renderQuestion = (): JSX.Element => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center mb-6">
        Over the last 2 weeks, how often have you been bothered by:
      </h2>
      <p className="text-lg text-center mb-8">{questions[currentStep].text}</p>
      <RadioGroup
        className="grid grid-cols-1 gap-4"
        value={answers[currentStep]?.toString()}
        onValueChange={handleAnswer}
      >
        {[
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" },
        ].map(({ value, label }) => (
          <div key={value} className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={`option-${value}`} />
            <Label htmlFor={`option-${value}`} className="flex-grow">
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  const renderDifficultyQuestion = (): JSX.Element => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center">
        How difficult have these problems made it for you?
      </h2>
      <RadioGroup
        className="grid grid-cols-1 gap-4"
        value={difficulty || undefined}
        onValueChange={(value) => setDifficulty(value as Difficulty)}
      >
        {[
          { value: "not", label: "Not difficult" },
          { value: "somewhat", label: "Somewhat difficult" },
          { value: "very", label: "Very difficult" },
          { value: "extremely", label: "Extremely difficult" },
        ].map(({ value, label }) => (
          <div key={value} className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={`difficulty-${value}`} />
            <Label htmlFor={`difficulty-${value}`}>{label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  return (
    <div className="min-h-screen bg-green-50/30 py-8">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${getStepColor(
                  index
                )}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            {currentStep < questions.length
              ? renderQuestion()
              : renderDifficultyQuestion()}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(currentStep + 1)}
            disabled={currentStep === questions.length && !difficulty}
            className={
              currentStep === questions.length
                ? "bg-green-500 hover:bg-green-600"
                : ""
            }
          >
            {currentStep === questions.length ? "Submit" : "Next"}
          </Button>
        </div>

        {currentStep === questions.length && (
          <div className="mt-8">
            <p className="text-lg font-semibold">
              Total Score: {calculateScore()}
            </p>
            {calculateScore() >= 20 && (
              <div className="flex items-center space-x-2 mt-4 p-4 bg-orange-100 rounded-lg">
                <AlertTriangle className="text-orange-500" />
                <p className="text-orange-700">
                  Please seek immediate professional help or call 988 for
                  support.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
