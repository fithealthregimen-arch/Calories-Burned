import React from 'react';
import { Flame, Activity, Clock, Target, Heart, TrendingUp } from 'lucide-react';
import { CalculationResults } from '@/types';
import { cn, formatNumber } from '@/lib/utils';
import { formatDuration, getCalorieRecommendation } from '@/lib/calculations';

interface ResultsDisplayProps {
  results: CalculationResults;
  isVisible: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, isVisible }) => {
  const recommendation = getCalorieRecommendation(results.totalCalories);
  
  const getIntensityColor = (color: string) => {
    switch (color) {
      case 'light':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'vigorous':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRecommendationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="animate-slide-up space-y-6">
      {/* Header */}
      <div className="card p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Flame className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">Your Results</h2>
        </div>
        <p className="text-blue-100">
          Based on your {results.activityName.toLowerCase()} for {formatDuration(results.duration)}
        </p>
      </div>

      {/* Main Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Calories */}
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-red-100 rounded-full">
              <Flame className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-2">
            {formatNumber(results.totalCalories)}
          </div>
          <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
            Total Calories
          </div>
        </div>

        {/* Calories per Minute */}
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-orange-100 rounded-full">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-2">
            {formatNumber(results.caloriesPerMinute, 1)}
          </div>
          <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
            Calories/Minute
          </div>
        </div>

        {/* MET Value with Intensity */}
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-2">
            {formatNumber(results.metValue, 1)}
          </div>
          <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
            MET Value
          </div>
          <span className={cn(
            'inline-block px-3 py-1 rounded-full text-xs font-semibold border',
            getIntensityColor(results.intensityColor)
          )}>
            {results.intensity}
          </span>
        </div>

        {/* MET-Minutes */}
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-green-100 rounded-full">
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-800 mb-2">
            {formatNumber(results.metMinutes)}
          </div>
          <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
            MET-Minutes
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className={cn(
        'card p-6 border-2',
        getRecommendationColor(recommendation.type)
      )}>
        <div className="flex items-start gap-3">
          <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold mb-2">Recommendation</h3>
            <p>{recommendation.message}</p>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Detailed Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-600">Activity</span>
              <span className="text-slate-800">{results.activityName}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-600">Duration</span>
              <span className="text-slate-800">{formatDuration(results.duration)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-600">Body Weight</span>
              <span className="text-slate-800">{formatNumber(results.weightKg, 1)} kg</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-slate-600">Intensity Level</span>
              <span className={cn(
                'px-2 py-1 rounded text-sm font-medium border',
                getIntensityColor(results.intensityColor)
              )}>
                {results.intensity}
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-600">Oxygen Consumption</span>
              <span className="text-slate-800">{formatNumber(results.oxygenConsumption, 1)} ml/min</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-600">Energy Rate</span>
              <span className="text-slate-800">{formatNumber(results.energyExpenditure, 1)}× resting rate</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-600">Weekly Goal Progress</span>
              <span className="text-slate-800">{formatNumber(results.weeklyGoalProgress)}% of 500 MET-min</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Weekly Goal:</strong> Health experts recommend at least 500 MET-minutes per week for basic health benefits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar for Weekly Goal */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-slate-800">Weekly Activity Goal Progress</h4>
          <span className="text-sm text-slate-600">
            {formatNumber(results.metMinutes)} / 500 MET-minutes
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(results.weeklyGoalProgress, 100)}%` }}
          ></div>
        </div>
        <p className="text-sm text-slate-600 mt-2">
          {results.weeklyGoalProgress >= 100 
            ? "Congratulations! You have exceeded the weekly recommended activity level."
            : `You need ${formatNumber(500 - results.metMinutes)} more MET-minutes to reach the weekly goal.`
          }
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;
