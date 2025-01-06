// constants.ts
import { Question, SeverityLevel, RadioOption } from './types';

export const PHQ9_QUESTIONS: Question[] = [
  { id: 1, text: "Little interest or pleasure in doing things" },
  { id: 2, text: "Feeling down, depressed, or hopeless" },
  { id: 3, text: "Trouble falling or staying asleep, or sleeping too much" },
  { id: 4, text: "Feeling tired or having little energy" },
  { id: 5, text: "Poor appetite or overeating" },
  { id: 6, text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down" },
  { id: 7, text: "Trouble concentrating on things, such as reading the newspaper or watching television" },
  { id: 8, text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual" },
  { id: 9, text: "Thoughts that you would be better off dead or of hurting yourself in some way" }
];

export const SEVERITY_LEVELS: SeverityLevel[] = [
  {
    range: [0, 4],
    label: "Minimal Depression",
    description: "Your symptoms suggest minimal or no depression.",
    color: "bg-green-100 text-green-800",
  },
  {
    range: [5, 9],
    label: "Mild Depression",
    description: "Your symptoms suggest mild depression. Consider discussing these feelings with a healthcare provider.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    range: [10, 14],
    label: "Moderate Depression",
    description: "Your symptoms suggest moderate depression. It's recommended to consult with a mental health professional.",
    color: "bg-orange-100 text-orange-800",
  },
  {
    range: [15, 19],
    label: "Moderately Severe Depression",
    description: "Your symptoms suggest moderately severe depression. Please seek professional help.",
    color: "bg-red-100 text-red-800",
  },
  {
    range: [20, 27],
    label: "Severe Depression",
    description: "Your symptoms suggest severe depression. Immediate professional consultation is strongly recommended.",
    color: "bg-red-200 text-red-900",
  },
];

export const FREQUENCY_OPTIONS: RadioOption[] = [
  { value: '0', label: 'Not at all' },
  { value: '1', label: 'Several days' },
  { value: '2', label: 'More than half the days' },
  { value: '3', label: 'Nearly every day' }
];

export const DIFFICULTY_OPTIONS: RadioOption[] = [
  { value: 'not', label: 'Not difficult' },
  { value: 'somewhat', label: 'Somewhat difficult' },
  { value: 'very', label: 'Very difficult' },
  { value: 'extremely', label: 'Extremely difficult' }
];