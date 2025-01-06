// types.ts

export type Difficulty = 'not' | 'somewhat' | 'very' | 'extremely' | null;
export type Answer = 0 | 1 | 2 | 3 | null;

export interface Question {
  id: number;
  text: string;
}

export interface SeverityLevel {
  range: [number, number];
  label: string;
  description: string;
  color: string;
}

export interface RadioOption {
  value: string;
  label: string;
}