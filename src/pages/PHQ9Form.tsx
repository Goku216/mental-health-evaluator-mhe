// PHQ9Form.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Results } from "../components/Results";
import { QuestionStep } from "../components/QuestionStep";
import { Answer, Difficulty } from "../components/types";
import { PHQ9_QUESTIONS, DIFFICULTY_OPTIONS } from "../components/constants";

export const PHQ9Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(9).fill(null));
  const [difficulty, setDifficulty] = useState<Difficulty>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswer = (value: string): void => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = parseInt(value) as Answer;
    setAnswers(newAnswers);
  };

  const calculateScore = (): number =>
    answers.reduce<number>((sum, val) => sum + (val || 0), 0);

  const handleNext = (): void => {
    if (currentStep === PHQ9_QUESTIONS.length && difficulty) {
      setShowResults(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleRetake = (): void => {
    setAnswers(Array(9).fill(null));
    setDifficulty(null);
    setCurrentStep(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-green-50/30 py-8">
        <div className="container mx-auto max-w-3xl px-4">
          <Results
            score={calculateScore()}
            difficulty={difficulty}
            answers={answers}
            onRetake={handleRetake}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50/30 py-8">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Progress Indicators */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {PHQ9_QUESTIONS.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentStep
                    ? "bg-orange-500 text-white"
                    : index < currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full transition-all duration-300"
              style={{
                width: `${(currentStep / PHQ9_QUESTIONS.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            {currentStep < PHQ9_QUESTIONS.length ? (
              <QuestionStep
                question={PHQ9_QUESTIONS[currentStep].text}
                value={answers[currentStep]}
                onChange={handleAnswer}
              />
            ) : (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-center">
                  How difficult have these problems made it for you?
                </h2>
                <RadioGroup
                  className="grid grid-cols-1 gap-4"
                  value={difficulty || undefined}
                  onValueChange={(value) => setDifficulty(value as Difficulty)}
                >
                  {DIFFICULTY_OPTIONS.map(({ value, label }) => (
                    <div key={value} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={value}
                        id={`difficulty-${value}`}
                      />
                      <Label htmlFor={`difficulty-${value}`}>{label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === PHQ9_QUESTIONS.length && !difficulty) ||
              (currentStep < PHQ9_QUESTIONS.length &&
                answers[currentStep] === null)
            }
            className={
              currentStep === PHQ9_QUESTIONS.length
                ? "bg-green-500 hover:bg-green-600"
                : ""
            }
          >
            {currentStep === PHQ9_QUESTIONS.length ? "View Results" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};
