import React from 'react';
import { Weight, Clock, Zap } from 'lucide-react';
import { UserInputs as UserInputsType } from '@/types';
import { cn } from '@/lib/utils';

interface UserInputsProps {
  inputs: UserInputsType;
  onInputChange: (field: keyof UserInputsType, value: any) => void;
  errors: { [key: string]: string };
}

const UserInputs: React.FC<UserInputsProps> = ({
  inputs,
  onInputChange,
  errors,
}) => {
  const handleWeightUnitToggle = (unit: 'kg' | 'lbs') => {
    if (unit === inputs.weightUnit) return;
    
    // Convert existing weight to new unit
    if (inputs.weight) {
      const newWeight = unit === 'kg' 
        ? inputs.weight / 2.20462 
        : inputs.weight * 2.20462;
      onInputChange('weight', Math.round(newWeight * 10) / 10);
    }
    
    onInputChange('weightUnit', unit);
  };

  return (
    <div className="space-y-6">
      {/* Weight Input */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Weight className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Your Weight</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <input
              type="number"
              placeholder={`Enter your weight in ${inputs.weightUnit}`}
              className={cn(
                'input-field',
                errors.weight && 'border-red-500 focus:ring-red-500 focus:border-red-500'
              )}
              value={inputs.weight || ''}
              onChange={(e) => onInputChange('weight', parseFloat(e.target.value) || 0)}
              min="30"
              max={inputs.weightUnit === 'kg' ? '300' : '660'}
              step="0.1"
            />
            {errors.weight && (
              <p className="mt-2 text-sm text-red-600">{errors.weight}</p>
            )}
          </div>
          
          {/* Weight Unit Toggle */}
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => handleWeightUnitToggle('kg')}
              className={cn(
                'flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200',
                inputs.weightUnit === 'kg'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              )}
            >
              Kilograms (kg)
            </button>
            <button
              onClick={() => handleWeightUnitToggle('lbs')}
              className={cn(
                'flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200',
                inputs.weightUnit === 'lbs'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              )}
            >
              Pounds (lbs)
            </button>
          </div>
          
          <p className="text-sm text-slate-600">
            Your body weight is used to calculate the calories burned during activities.
          </p>
        </div>
      </div>

      {/* Duration Input */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Activity Duration</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <input
              type="number"
              placeholder="Enter duration in minutes"
              className={cn(
                'input-field',
                errors.duration && 'border-red-500 focus:ring-red-500 focus:border-red-500'
              )}
              value={inputs.duration || ''}
              onChange={(e) => onInputChange('duration', parseInt(e.target.value) || 0)}
              min="1"
              max="480"
              step="1"
            />
            {errors.duration && (
              <p className="mt-2 text-sm text-red-600">{errors.duration}</p>
            )}
          </div>
          
          {/* Quick Duration Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {[15, 30, 45, 60].map((minutes) => (
              <button
                key={minutes}
                onClick={() => onInputChange('duration', minutes)}
                className={cn(
                  'py-2 px-3 text-sm font-medium rounded-lg border-2 transition-all duration-200',
                  inputs.duration === minutes
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 hover:border-blue-300 text-slate-600'
                )}
              >
                {minutes}m
              </button>
            ))}
          </div>
          
          <p className="text-sm text-slate-600">
            How long will you do this activity? You can type a number or use the quick buttons above.
          </p>
        </div>
      </div>

      {/* Custom MET Input (only show if no activity selected) */}
      {!inputs.selectedActivity && (
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Custom MET Value</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <input
                type="number"
                placeholder="Enter MET value (0.5 - 20)"
                className={cn(
                  'input-field',
                  errors.activity && 'border-red-500 focus:ring-red-500 focus:border-red-500'
                )}
                value={inputs.customMet || ''}
                onChange={(e) => onInputChange('customMet', parseFloat(e.target.value) || 0)}
                min="0.5"
                max="20"
                step="0.1"
              />
              {errors.activity && (
                <p className="mt-2 text-sm text-red-600">{errors.activity}</p>
              )}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> MET (Metabolic Equivalent) values typically range from 1 (resting) to 20 (very intense activity). 
                For most activities, values are between 2-12 METs.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInputs;
