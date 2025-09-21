import { CalculationResults, UserInputs } from '@/types';

/**
 * Calculate calories burned and other fitness metrics
 * Formula: METs × 3.5 × weight (kg) / 200 = calories per minute
 */
export function calculateCalories(inputs: UserInputs): CalculationResults {
  const { weight, duration, weightUnit, selectedActivity, customMet } = inputs;
  
  // Convert weight to kg if needed
  const weightKg = weightUnit === 'kg' ? weight : weight / 2.20462;
  
  // Get MET value from selected activity or custom input
  const metValue = selectedActivity?.met || customMet || 0;
  
  // Calculate calories using the standard METs formula
  const caloriesPerMinute = (metValue * 3.5 * weightKg) / 200;
  const totalCalories = caloriesPerMinute * duration;
  
  // Calculate MET-minutes
  const metMinutes = metValue * duration;
  
  // Determine intensity level and color
  const { intensity, intensityColor } = getIntensityLevel(metValue);
  
  // Calculate oxygen consumption (ml/min)
  const oxygenConsumption = metValue * 3.5 * weightKg;
  
  // Calculate energy expenditure rate
  const energyExpenditure = metValue;
  
  // Calculate weekly goal progress (500 MET-minutes is the weekly goal)
  const weeklyGoalProgress = Math.min((metMinutes / 500) * 100, 100);
  
  return {
    totalCalories: Math.round(totalCalories),
    caloriesPerMinute: Math.round(caloriesPerMinute * 10) / 10,
    metMinutes: Math.round(metMinutes),
    intensity,
    intensityColor,
    oxygenConsumption: Math.round(oxygenConsumption * 10) / 10,
    energyExpenditure: Math.round(energyExpenditure * 10) / 10,
    weeklyGoalProgress: Math.round(weeklyGoalProgress),
    activityName: selectedActivity?.name || 'Custom Activity',
    metValue: Math.round(metValue * 10) / 10,
    weightKg: Math.round(weightKg * 10) / 10,
    duration
  };
}

/**
 * Determine intensity level based on MET value
 */
export function getIntensityLevel(metValue: number): {
  intensity: 'Light' | 'Moderate' | 'Vigorous' | 'Very Vigorous';
  intensityColor: 'light' | 'moderate' | 'vigorous';
} {
  if (metValue < 3.0) {
    return { intensity: 'Light', intensityColor: 'light' };
  } else if (metValue < 6.0) {
    return { intensity: 'Moderate', intensityColor: 'moderate' };
  } else if (metValue < 9.0) {
    return { intensity: 'Vigorous', intensityColor: 'vigorous' };
  } else {
    return { intensity: 'Very Vigorous', intensityColor: 'vigorous' };
  }
}

/**
 * Convert weight between kg and lbs
 */
export function convertWeight(weight: number, fromUnit: 'kg' | 'lbs', toUnit: 'kg' | 'lbs'): number {
  if (fromUnit === toUnit) return weight;
  
  if (fromUnit === 'kg' && toUnit === 'lbs') {
    return weight * 2.20462;
  } else {
    return weight / 2.20462;
  }
}

/**
 * Validate user inputs
 */
export function validateInputs(inputs: UserInputs): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!inputs.weight || inputs.weight < 30 || inputs.weight > 500) {
    errors.push('Please enter a valid weight between 30-500 kg or 66-1100 lbs');
  }
  
  if (!inputs.duration || inputs.duration < 1 || inputs.duration > 480) {
    errors.push('Please enter a duration between 1-480 minutes');
  }
  
  if (!inputs.selectedActivity && (!inputs.customMet || inputs.customMet < 0.5 || inputs.customMet > 20)) {
    errors.push('Please select an activity or enter a valid MET value (0.5-20)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Format duration in a human-readable way
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? 's' : ''}`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Get calorie burn recommendation based on goals
 */
export function getCalorieRecommendation(totalCalories: number): {
  message: string;
  type: 'success' | 'warning' | 'info';
} {
  if (totalCalories >= 300) {
    return {
      message: 'Excellent! This is a great calorie-burning workout.',
      type: 'success'
    };
  } else if (totalCalories >= 150) {
    return {
      message: 'Good job! You\'re burning a solid amount of calories.',
      type: 'success'
    };
  } else if (totalCalories >= 50) {
    return {
      message: 'Every bit of activity counts! Consider increasing duration or intensity.',
      type: 'info'
    };
  } else {
    return {
      message: 'This is a light activity. Consider adding more movement to your day.',
      type: 'warning'
    };
  }
}
