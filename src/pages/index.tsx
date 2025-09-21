import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import ActivitySelector from '@/components/ActivitySelector';
import UserInputs from '@/components/UserInputs';
import ResultsDisplay from '@/components/ResultsDisplay';
import { UserInputs as UserInputsType, Activity, CalculationResults } from '@/types';
import { calculateCalories, validateInputs } from '@/lib/calculations';
import { scrollToElement } from '@/lib/utils';

const initialInputs: UserInputsType = {
  weight: 0,
  duration: 0,
  weightUnit: 'kg',
  selectedActivity: null,
  customMet: 0,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calories Burned Calculator | Exercise & Activity Calorie Counter</title>
        <meta
          name="description"
          content="Calculate calories burned during exercise and daily activities. Free, accurate calculator with 100+ activities. Get instant results based on your weight and activity duration."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CalculatorApp />
    </div>
  );
}

function CalculatorApp() {
  const [inputs, setInputs] = useState<UserInputsType>(initialInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof UserInputsType, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear related errors
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleActivitySelect = (activity: Activity) => {
    setInputs(prev => ({
      ...prev,
      selectedActivity: activity,
      customMet: 0 // Clear custom MET when activity is selected
    }));

    // Clear activity error
    if (errors.activity) {
      setErrors(prev => ({
        ...prev,
        activity: ''
      }));
    }
  };

  const handleCalculate = () => {
    const validation = validateInputs(inputs);
    
    if (!validation.isValid) {
      const newErrors: { [key: string]: string } = {};
      validation.errors.forEach(error => {
        if (error.includes('weight')) newErrors.weight = error;
        if (error.includes('duration')) newErrors.duration = error;
        if (error.includes('activity') || error.includes('MET')) newErrors.activity = error;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const calculationResults = calculateCalories(inputs);
    setResults(calculationResults);
    setShowResults(true);
    
    // Scroll to results after a short delay
    setTimeout(() => {
      scrollToElement('results-section', 80);
    }, 100);
  };

  const isFormValid = inputs.weight > 0 && inputs.duration > 0 && 
    (inputs.selectedActivity || (inputs.customMet && inputs.customMet > 0));

  return (
    <>
      <Head>
        <title>Calories Burned Calculator | Exercise & Activity Calorie Counter</title>
        <meta 
          name="description" 
          content="Calculate calories burned during exercise and daily activities. Free, accurate calculator with 100+ activities. Get instant results based on your weight and activity duration." 
        />
        <meta name="keywords" content="calories burned calculator, exercise calories, activity calorie counter, MET calculator, fitness tracker, calorie burn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Calories Burned Calculator - Exercise & Activity Calorie Counter" />
        <meta property="og:description" content="Calculate calories burned during exercise and daily activities. Free, accurate calculator with 100+ activities." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              How Many Calories Did You Burn?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Enter your details below to get an accurate estimate of calories burned during your activity. 
              Our calculator uses scientifically proven formulas to give you reliable results.
            </p>
          </div>

          {/* Calculator Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Step 1: Activity Selection */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-800">Select Your Activity</h3>
              </div>
              <ActivitySelector 
                selectedActivity={inputs.selectedActivity}
                onActivitySelect={handleActivitySelect}
              />
            </div>

            {/* Step 2: User Inputs */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-800">Enter Your Details</h3>
              </div>
              <UserInputs 
                inputs={inputs}
                onInputChange={handleInputChange}
                errors={errors}
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center mb-12">
            <button
              onClick={handleCalculate}
              disabled={!isFormValid}
              className={`btn-primary text-lg px-8 py-4 ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span className="text-xl mr-2">🧮</span>
              Calculate Calories Burned
            </button>
            {!isFormValid && (
              <p className="text-sm text-slate-500 mt-2">
                Please select an activity and enter your weight and duration
              </p>
            )}
          </div>

          {/* Results */}
          <div id="results-section">
            {results && (
              <ResultsDisplay 
                results={results}
                isVisible={showResults}
              />
            )}
          </div>
        </div>

        {/* Educational Content */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Understanding Calorie Burn
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Learn how our calculator works and make the most of your fitness journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Science-Based</h3>
                <p className="text-slate-600">
                  Our calculator uses MET (Metabolic Equivalent) values from scientific research 
                  to provide accurate calorie burn estimates for over 100 activities.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Instant Results</h3>
                <p className="text-slate-600">
                  Get immediate feedback on your calorie burn, activity intensity, and progress 
                  toward your weekly fitness goals with our easy-to-use calculator.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Goal Tracking</h3>
                <p className="text-slate-600">
                  Track your progress toward the recommended 500 MET-minutes per week and 
                  optimize your exercise routine for better health outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function CalculatorApp() {
  const [inputs, setInputs] = useState<UserInputsType>(initialInputs);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
