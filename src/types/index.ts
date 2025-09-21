export interface Activity {
  id: string;
  name: string;
  category: string;
  met: number;
  description?: string;
  tips?: string;
}

export interface UserInputs {
  weight: number;
  duration: number;
  weightUnit: 'kg' | 'lbs';
  selectedActivity: Activity | null;
  customMet?: number;
}

export interface CalculationResults {
  totalCalories: number;
  caloriesPerMinute: number;
  metMinutes: number;
  intensity: 'Light' | 'Moderate' | 'Vigorous' | 'Very Vigorous';
  intensityColor: 'light' | 'moderate' | 'vigorous';
  oxygenConsumption: number;
  energyExpenditure: number;
  weeklyGoalProgress: number;
  activityName: string;
  metValue: number;
  weightKg: number;
  duration: number;
}

export interface ActivityCategory {
  name: string;
  icon: string;
  count: number;
  description: string;
}

export interface FormErrors {
  weight?: string;
  duration?: string;
  activity?: string;
}
