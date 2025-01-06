import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info } from "lucide-react";
import { SeverityLevel, Answer, Difficulty } from "../components/types";
import { SEVERITY_LEVELS } from "../components/constants";

interface ResultsProps {
  score: number;
  difficulty: Difficulty;
  answers: Answer[];
  onRetake: () => void;
}

export const Results: React.FC<ResultsProps> = ({
  score,
  difficulty,
  answers,
  onRetake,
}) => {
  const severityLevel =
    SEVERITY_LEVELS.find(
      (level) => score >= level.range[0] && score <= level.range[1]
    ) || SEVERITY_LEVELS[0];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">PHQ-9 Assessment Results</h2>
        <div
          className={`inline-block px-4 py-2 rounded-full ${severityLevel.color}`}
        >
          Score: {score} - {severityLevel.label}
        </div>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className={`p-4 rounded-lg ${severityLevel.color}`}>
            <p className="flex items-center">
              <Info className="mr-2" />
              {severityLevel.description}
            </p>
          </div>

          {score >= 10 && (
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="flex items-center text-orange-800">
                <AlertTriangle className="mr-2" />
                We recommend discussing these results with a mental health
                professional.
              </p>
            </div>
          )}

          {answers[8] != null &&
            typeof answers[8] === "number" &&
            answers[8] > 0 && (
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="flex items-center text-red-800">
                  <AlertTriangle className="mr-2" />
                  If you're having thoughts of self-harm, please contact
                  emergency services or call 988 immediately.
                </p>
              </div>
            )}
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4">
        <Button variant="outline" onClick={() => window.print()}>
          Print Results
        </Button>
        <Button onClick={onRetake} className="bg-green-500 hover:bg-green-600">
          Take Again
        </Button>
      </div>
    </div>
  );
};
