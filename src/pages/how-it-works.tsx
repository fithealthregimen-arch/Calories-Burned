import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calculator, Heart, Target, BookOpen } from 'lucide-react';

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How Our Calorie Calculator Works | Simple Guide to Calorie Burning</title>
        <meta 
          name="description" 
          content="Learn how our calorie calculator works in simple terms. Understand METs, calorie burning, and how to use exercise for weight management and fitness goals." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Calculator
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              How Our Calculator Works
            </h1>
            <p className="text-xl text-blue-100">
              A simple guide to understanding calorie burning and exercise science
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">What This Guide Covers</h2>
            </div>
            <p className="text-lg text-slate-600 mb-6">
              Whether you are new to fitness or looking to understand the science behind calorie burning, 
              this guide will help you make the most of our calculator and your exercise routine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-800">How It Works</h3>
                <p className="text-sm text-slate-600">The science made simple</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-800">Why It Matters</h3>
                <p className="text-sm text-slate-600">Benefits for your health</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-800">How to Use It</h3>
                <p className="text-sm text-slate-600">Practical tips and advice</p>
              </div>
            </div>
          </div>

          {/* The Basics */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">The Basics: What Are Calories?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Think of Calories as Energy Units</h3>
                <p className="text-slate-600 mb-4">
                  Calories are simply units of energy - like fuel for your body. Just as your car uses gasoline 
                  to run, your body uses calories to power everything from breathing to running a marathon.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-blue-800">
                    <strong>Simple analogy:</strong> If your body were a car, calories would be the gasoline. 
                    More activity = more fuel burned = more calories used up.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Where Do These Numbers Come From?</h3>
                <p className="text-slate-600 mb-4">
                  Our calculator uses something called MET values - but do not worry about the science! 
                  These are just numbers that scientists have figured out by studying how much energy 
                  different activities require.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Sitting quietly = 1 MET (your baseline energy use)</li>
                  <li>Walking slowly = 2-3 METs (2-3 times your resting energy)</li>
                  <li>Running = 8-12 METs (8-12 times your resting energy)</li>
                  <li>Intense exercise = 15+ METs (very high energy use)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How the Calculator Works */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">How Our Calculator Works</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">The Simple Formula</h3>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-lg font-mono">
                    Calories = Activity Intensity × Your Weight × Time
                  </p>
                </div>
                <p className="mt-3 text-blue-100">
                  That is it! The calculator takes these three pieces of information and gives you 
                  an accurate estimate of calories burned.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏃</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Activity Intensity</h4>
                  <p className="text-sm text-slate-600">
                    How hard the activity is (walking vs running vs sprinting)
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Your Weight</h4>
                  <p className="text-sm text-slate-600">
                    Heavier people burn more calories doing the same activity
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Time</h4>
                  <p className="text-sm text-slate-600">
                    Longer activities burn more calories (obviously!)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Your Results */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Understanding Your Results</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">What Do the Numbers Mean?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">🔥 Total Calories</h4>
                    <p className="text-red-700 text-sm">
                      This is the main number - how many calories you burned during your entire activity. 
                      Compare this to food calories to understand energy balance.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">⏱️ Calories per Minute</h4>
                    <p className="text-blue-700 text-sm">
                      How fast you are burning calories. Higher numbers mean more intense activities 
                      that burn energy quickly.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💪 Intensity Level</h4>
                    <p className="text-green-700 text-sm">
                      Light, Moderate, or Vigorous - tells you how hard you are working. 
                      Mix different intensities for best results.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🎯 Weekly Progress</h4>
                    <p className="text-purple-700 text-sm">
                      Shows progress toward the recommended 500 MET-minutes per week - 
                      your weekly fitness goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Tips */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">How to Use This Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">For Weight Management</h3>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">The Simple Math:</h4>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• To lose weight: Burn more calories than you eat</li>
                    <li>• To maintain weight: Balance calories burned with calories eaten</li>
                    <li>• To gain weight: Eat more calories than you burn</li>
                  </ul>
                </div>
                <p className="text-slate-600">
                  Our calculator helps you understand the "burn" side of this equation. 
                  Remember: 3,500 calories roughly equals 1 pound of body weight.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">For Fitness Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Health Maintenance</h4>
                    <p className="text-green-700 text-sm">
                      Aim for 500+ MET-minutes per week. This could be 150 minutes of 
                      moderate activity (like brisk walking) or 75 minutes of vigorous activity.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Weight Loss</h4>
                    <p className="text-blue-700 text-sm">
                      For significant weight loss, aim for 1,500+ MET-minutes per week. 
                      This means more frequent or more intense activities.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Smart Tips</h3>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Start with activities you enjoy - you'll stick with them longer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Mix light, moderate, and vigorous activities for variety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Remember: some activity is always better than none</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Use the calculator to plan your workouts and track progress</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">⚠️ Important Things to Remember</h3>
            <div className="space-y-3 text-amber-700">
              <p>
                <strong>These are estimates:</strong> Everyone's body is different. The calculator gives you 
                a good ballpark figure, but your actual calorie burn might vary based on fitness level, 
                age, genetics, and other factors.
              </p>
              <p>
                <strong>Start gradually:</strong> If you are new to exercise, begin with light activities 
                and gradually increase intensity and duration. Listen to your body!
              </p>
              <p>
                <strong>Consult professionals:</strong> For specific health or fitness goals, especially 
                if you have health conditions, consult with doctors, nutritionists, or certified trainers.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Calculator className="w-5 h-5" />
              Try the Calculator Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
