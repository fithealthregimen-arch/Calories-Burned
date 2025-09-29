import React, { useState, useMemo } from 'react';
import { Activity } from '@/types';
import { activities, activityCategories, searchActivities, getActivitiesByCategory } from '@/data/activities';
import { cn } from '@/lib/utils';

interface ActivitySelectorProps {
  selectedActivity: Activity | null;
  onActivitySelect: (activity: Activity) => void;
}

const ActivitySelector: React.FC<ActivitySelectorProps> = ({
  selectedActivity,
  onActivitySelect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCategories, setShowCategories] = useState(false);

  const filteredActivities = useMemo(() => {
    let result = activities;
    
    // Filter by search query
    if (searchQuery.trim()) {
      result = searchActivities(searchQuery.trim());
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(activity => activity.category === selectedCategory);
    }
    
    return result;
  }, [searchQuery, selectedCategory]);

  const getIntensityColor = (met: number) => {
    if (met < 3) return 'bg-green-100 text-green-800 border-green-200';
    if (met < 6) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getIntensityLabel = (met: number) => {
    if (met < 3) return 'Light';
    if (met < 6) return 'Moderate';
    return 'Vigorous';
  };

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <span className="text-xl">⭐</span>
        </div>
        <h2 className="text-xl font-bold text-slate-800">Choose Your Activity</h2>
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-3 text-slate-400">🔍</span>
        <input
          type="text"
          placeholder="Search activities (e.g., running, swimming, yoga)..."
          className="input-field pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-slate-600">🎯</span>
          <span className="text-sm font-medium text-slate-600">Filter by category:</span>
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {showCategories ? 'Hide' : 'Show'} Categories
          </button>
        </div>
        
        {showCategories && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={cn(
                'p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200',
                selectedCategory === 'All'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-slate-200 hover:border-slate-300 text-slate-600'
              )}
            >
              <div className="text-lg mb-1">🔍</div>
              <div>All Activities</div>
              <div className="text-xs opacity-75">{activities.length}</div>
            </button>
            {activityCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  'p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200',
                  selectedCategory === category.name
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                )}
              >
                <div className="text-lg mb-1">{category.icon}</div>
                <div className="leading-tight">{category.name}</div>
                <div className="text-xs opacity-75">{category.count}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Activities Grid */}
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {filteredActivities.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <p className="text-lg font-medium mb-2">No activities found</p>
            <p className="text-sm">Try adjusting your search or category filter</p>
          </div>
        ) : (
          filteredActivities.map((activity) => (
            <button
              key={activity.id}
              onClick={() => onActivitySelect(activity)}
              className={cn(
                'w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md',
                selectedActivity?.id === activity.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-blue-300 bg-white'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {activity.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {activity.category}
                    </span>
                    <span className={cn(
                      'text-xs font-medium px-2 py-1 rounded border',
                      getIntensityColor(activity.met)
                    )}>
                      {getIntensityLabel(activity.met)}
                    </span>
                  </div>
                </div>
                <div className="ml-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {activity.met}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    METs
                  </div>
                </div>
              </div>
            </button>
          ))
        )}
      </div>

      {filteredActivities.length > 0 && (
        <div className="mt-4 text-sm text-slate-500 text-center">
          Showing {filteredActivities.length} of {activities.length} activities
        </div>
      )}
    </div>
  );
};

export default ActivitySelector;
