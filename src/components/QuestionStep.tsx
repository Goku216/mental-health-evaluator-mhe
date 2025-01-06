import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answer } from "../components/types";
import { FREQUENCY_OPTIONS } from "../components/constants";

interface QuestionStepProps {
  question: string;
  value: Answer;
  onChange: (value: string) => void;
}

export const QuestionStep: React.FC<QuestionStepProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center mb-6">
        Over the last 2 weeks, how often have you been bothered by:
      </h2>
      <p className="text-lg text-center mb-8">{question}</p>
      <RadioGroup
        className="grid grid-cols-1 gap-4"
        value={value?.toString()}
        onValueChange={onChange}
      >
        {FREQUENCY_OPTIONS.map(({ value, label }) => (
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
};
