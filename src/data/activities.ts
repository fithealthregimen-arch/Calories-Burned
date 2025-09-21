import { Activity, ActivityCategory } from '@/types';

export const activities: Activity[] = [
  // Daily Activities
  { id: 'sleep', name: 'Sleeping', category: 'Daily Activities', met: 0.95, description: 'Resting metabolism during sleep' },
  { id: 'tv', name: 'Watching TV', category: 'Daily Activities', met: 1.3, description: 'Sitting and watching television' },
  { id: 'reading', name: 'Reading while sitting', category: 'Daily Activities', met: 1.3, description: 'Reading books or articles while seated' },
  { id: 'cooking', name: 'Cooking', category: 'Daily Activities', met: 2.5, description: 'Food preparation and cooking' },
  { id: 'cleaning-light', name: 'Light cleaning', category: 'Daily Activities', met: 2.3, description: 'Dusting, organizing, light housework' },
  { id: 'cleaning-moderate', name: 'Moderate cleaning', category: 'Daily Activities', met: 3.3, description: 'Vacuuming, mopping, general housework' },
  { id: 'cleaning-vigorous', name: 'Heavy cleaning', category: 'Daily Activities', met: 3.8, description: 'Scrubbing, moving furniture, intensive cleaning' },
  { id: 'gardening', name: 'Gardening', category: 'Daily Activities', met: 4.0, description: 'Planting, weeding, general garden work' },
  { id: 'mowing-power', name: 'Mowing lawn (power mower)', category: 'Daily Activities', met: 4.5, description: 'Using a power lawn mower' },
  { id: 'mowing-push', name: 'Mowing lawn (push mower)', category: 'Daily Activities', met: 5.5, description: 'Using a manual push mower' },

  // Walking & Running
  { id: 'walk-slow', name: 'Walking slowly (2.0 mph)', category: 'Walking & Running', met: 2.0, description: 'Leisurely stroll, very slow pace' },
  { id: 'walk-casual', name: 'Casual walking (2.5 mph)', category: 'Walking & Running', met: 2.5, description: 'Easy walking pace' },
  { id: 'walk-moderate', name: 'Moderate walking (3.0 mph)', category: 'Walking & Running', met: 3.5, description: 'Normal walking pace' },
  { id: 'walk-brisk', name: 'Brisk walking (3.5 mph)', category: 'Walking & Running', met: 4.3, description: 'Fast walking with purpose' },
  { id: 'walk-fast', name: 'Fast walking (4.0 mph)', category: 'Walking & Running', met: 5.0, description: 'Very brisk walking pace' },
  { id: 'walk-vfast', name: 'Very fast walking (4.5 mph)', category: 'Walking & Running', met: 7.0, description: 'Power walking' },
  { id: 'walk-uphill', name: 'Walking uphill (3.5 mph)', category: 'Walking & Running', met: 6.0, description: 'Walking on inclined surfaces' },
  { id: 'jogging', name: 'Jogging (general)', category: 'Walking & Running', met: 7.0, description: 'Light jogging pace' },
  { id: 'run-5mph', name: 'Running 5 mph (12 min/mile)', category: 'Walking & Running', met: 8.3, description: 'Moderate running pace' },
  { id: 'run-6mph', name: 'Running 6 mph (10 min/mile)', category: 'Walking & Running', met: 9.8, description: 'Good running pace' },
  { id: 'run-7mph', name: 'Running 7 mph (8.5 min/mile)', category: 'Walking & Running', met: 11.0, description: 'Fast running pace' },
  { id: 'run-8mph', name: 'Running 8 mph (7.5 min/mile)', category: 'Walking & Running', met: 11.8, description: 'Very fast running' },
  { id: 'run-9mph', name: 'Running 9 mph (6.5 min/mile)', category: 'Walking & Running', met: 12.8, description: 'Elite running pace' },
  { id: 'run-10mph', name: 'Running 10 mph (6 min/mile)', category: 'Walking & Running', met: 14.5, description: 'Competitive running pace' },

  // Cycling
  { id: 'bike-leisure', name: 'Casual cycling (<10 mph)', category: 'Cycling', met: 4.0, description: 'Leisurely bike ride' },
  { id: 'bike-light', name: 'Light cycling (10-12 mph)', category: 'Cycling', met: 6.0, description: 'Easy cycling pace' },
  { id: 'bike-moderate', name: 'Moderate cycling (12-14 mph)', category: 'Cycling', met: 8.0, description: 'Steady cycling pace' },
  { id: 'bike-vigorous', name: 'Vigorous cycling (14-16 mph)', category: 'Cycling', met: 10.0, description: 'Fast cycling pace' },
  { id: 'bike-racing', name: 'Racing cycling (16-19 mph)', category: 'Cycling', met: 12.0, description: 'Competitive cycling' },
  { id: 'bike-fast', name: 'Very fast cycling (>20 mph)', category: 'Cycling', met: 16.0, description: 'Elite cycling pace' },
  { id: 'bike-mountain', name: 'Mountain biking', category: 'Cycling', met: 8.5, description: 'Off-road cycling' },
  { id: 'bike-mountain-comp', name: 'Competitive mountain biking', category: 'Cycling', met: 14.0, description: 'Intense off-road cycling' },
  { id: 'stationary-50w', name: 'Stationary bike (50 watts)', category: 'Cycling', met: 4.0, description: 'Light stationary cycling' },
  { id: 'stationary-100w', name: 'Stationary bike (100 watts)', category: 'Cycling', met: 6.0, description: 'Moderate stationary cycling' },
  { id: 'stationary-150w', name: 'Stationary bike (150 watts)', category: 'Cycling', met: 8.0, description: 'Vigorous stationary cycling' },
  { id: 'stationary-200w', name: 'Stationary bike (200 watts)', category: 'Cycling', met: 10.8, description: 'High-intensity stationary cycling' },

  // Swimming
  { id: 'swim-slow', name: 'Swimming freestyle (slow)', category: 'Swimming', met: 6.0, description: 'Easy freestyle swimming' },
  { id: 'swim-moderate', name: 'Swimming freestyle (moderate)', category: 'Swimming', met: 8.0, description: 'Steady freestyle pace' },
  { id: 'swim-fast', name: 'Swimming freestyle (fast)', category: 'Swimming', met: 10.0, description: 'Fast freestyle swimming' },
  { id: 'swim-backstroke', name: 'Swimming backstroke', category: 'Swimming', met: 8.0, description: 'Backstroke swimming' },
  { id: 'swim-breaststroke', name: 'Swimming breaststroke', category: 'Swimming', met: 10.3, description: 'Breaststroke swimming' },
  { id: 'swim-butterfly', name: 'Swimming butterfly', category: 'Swimming', met: 13.8, description: 'Butterfly stroke swimming' },
  { id: 'swim-treading', name: 'Treading water', category: 'Swimming', met: 4.0, description: 'Staying afloat in water' },
  { id: 'water-aerobics', name: 'Water aerobics', category: 'Swimming', met: 4.0, description: 'Water-based exercises' },

  // Sports
  { id: 'basketball-game', name: 'Basketball (game)', category: 'Sports', met: 8.0, description: 'Playing basketball game' },
  { id: 'basketball-shooting', name: 'Basketball (shooting)', category: 'Sports', met: 4.5, description: 'Shooting baskets casually' },
  { id: 'soccer-competitive', name: 'Soccer (competitive)', category: 'Sports', met: 10.0, description: 'Competitive soccer match' },
  { id: 'soccer-casual', name: 'Soccer (casual)', category: 'Sports', met: 7.0, description: 'Recreational soccer' },
  { id: 'tennis-singles', name: 'Tennis (singles)', category: 'Sports', met: 8.0, description: 'Singles tennis match' },
  { id: 'tennis-doubles', name: 'Tennis (doubles)', category: 'Sports', met: 6.0, description: 'Doubles tennis match' },
  { id: 'volleyball-competitive', name: 'Volleyball (competitive)', category: 'Sports', met: 8.0, description: 'Competitive volleyball' },
  { id: 'volleyball-recreational', name: 'Volleyball (recreational)', category: 'Sports', met: 4.0, description: 'Casual volleyball' },
  { id: 'golf-walking', name: 'Golf (walking with clubs)', category: 'Sports', met: 4.3, description: 'Walking golf course with clubs' },
  { id: 'golf-cart', name: 'Golf (using cart)', category: 'Sports', met: 3.5, description: 'Golf using golf cart' },
  { id: 'baseball', name: 'Baseball', category: 'Sports', met: 5.0, description: 'Playing baseball' },
  { id: 'football', name: 'Football (touch/flag)', category: 'Sports', met: 8.0, description: 'Touch or flag football' },
  { id: 'hockey-field', name: 'Field hockey', category: 'Sports', met: 8.0, description: 'Playing field hockey' },
  { id: 'hockey-ice', name: 'Ice hockey', category: 'Sports', met: 8.0, description: 'Playing ice hockey' },

  // Strength Training
  { id: 'weights-light', name: 'Light weight training', category: 'Strength Training', met: 3.5, description: 'Light resistance exercises' },
  { id: 'weights-vigorous', name: 'Vigorous weight training', category: 'Strength Training', met: 6.0, description: 'Heavy weight lifting' },
  { id: 'circuit-training', name: 'Circuit training', category: 'Strength Training', met: 8.0, description: 'High-intensity circuit training' },
  { id: 'crossfit', name: 'CrossFit', category: 'Strength Training', met: 12.0, description: 'CrossFit workout' },
  { id: 'calisthenics-light', name: 'Light calisthenics', category: 'Strength Training', met: 2.8, description: 'Light bodyweight exercises' },
  { id: 'calisthenics-moderate', name: 'Moderate calisthenics', category: 'Strength Training', met: 3.8, description: 'Moderate bodyweight exercises' },
  { id: 'calisthenics-vigorous', name: 'Vigorous calisthenics', category: 'Strength Training', met: 8.0, description: 'Intense bodyweight exercises' },
  { id: 'pushups-moderate', name: 'Push-ups (moderate)', category: 'Strength Training', met: 3.8, description: 'Moderate pace push-ups' },
  { id: 'pushups-vigorous', name: 'Push-ups (vigorous)', category: 'Strength Training', met: 8.0, description: 'High-intensity push-ups' },

  // Fitness Classes
  { id: 'yoga-hatha', name: 'Yoga (Hatha)', category: 'Fitness Classes', met: 2.5, description: 'Gentle yoga practice' },
  { id: 'yoga-power', name: 'Power yoga', category: 'Fitness Classes', met: 4.0, description: 'Vigorous yoga practice' },
  { id: 'pilates', name: 'Pilates', category: 'Fitness Classes', met: 3.0, description: 'Pilates exercises' },
  { id: 'aerobics-low', name: 'Low-impact aerobics', category: 'Fitness Classes', met: 5.0, description: 'Low-impact aerobic exercise' },
  { id: 'aerobics-high', name: 'High-impact aerobics', category: 'Fitness Classes', met: 7.0, description: 'High-impact aerobic exercise' },
  { id: 'step-aerobics', name: 'Step aerobics', category: 'Fitness Classes', met: 8.5, description: 'Step-based aerobic exercise' },
  { id: 'zumba', name: 'Zumba', category: 'Fitness Classes', met: 8.5, description: 'Dance fitness class' },
  { id: 'spinning', name: 'Spinning class', category: 'Fitness Classes', met: 8.5, description: 'Indoor cycling class' },

  // Outdoor Activities
  { id: 'hiking', name: 'Hiking', category: 'Outdoor Activities', met: 5.3, description: 'General hiking' },
  { id: 'hiking-cross-country', name: 'Cross-country hiking', category: 'Outdoor Activities', met: 6.0, description: 'Off-trail hiking' },
  { id: 'rock-climbing', name: 'Rock climbing', category: 'Outdoor Activities', met: 8.0, description: 'Rock climbing activity' },
  { id: 'skiing-downhill', name: 'Downhill skiing', category: 'Outdoor Activities', met: 5.3, description: 'Alpine skiing' },
  { id: 'skiing-cross-country', name: 'Cross-country skiing', category: 'Outdoor Activities', met: 9.0, description: 'Nordic skiing' },
  { id: 'snowshoeing', name: 'Snowshoeing', category: 'Outdoor Activities', met: 5.3, description: 'Walking with snowshoes' },
  { id: 'ice-skating', name: 'Ice skating', category: 'Outdoor Activities', met: 7.0, description: 'General ice skating' },
  { id: 'rollerblading', name: 'Rollerblading', category: 'Outdoor Activities', met: 7.0, description: 'Recreational rollerblading' },
  { id: 'surfing', name: 'Surfing', category: 'Outdoor Activities', met: 6.0, description: 'Surfing waves' },
  { id: 'kayaking', name: 'Kayaking', category: 'Outdoor Activities', met: 5.0, description: 'Moderate kayaking' },
  { id: 'canoeing', name: 'Canoeing', category: 'Outdoor Activities', met: 5.8, description: 'Moderate canoeing' },
];

export const activityCategories: ActivityCategory[] = [
  {
    name: 'Daily Activities',
    icon: '🏠',
    count: activities.filter(a => a.category === 'Daily Activities').length,
    description: 'Everyday tasks and household activities'
  },
  {
    name: 'Walking & Running',
    icon: '🏃',
    count: activities.filter(a => a.category === 'Walking & Running').length,
    description: 'Various walking and running paces'
  },
  {
    name: 'Cycling',
    icon: '🚴',
    count: activities.filter(a => a.category === 'Cycling').length,
    description: 'Bicycle and stationary bike exercises'
  },
  {
    name: 'Swimming',
    icon: '🏊',
    count: activities.filter(a => a.category === 'Swimming').length,
    description: 'Swimming strokes and water activities'
  },
  {
    name: 'Sports',
    icon: '⚽',
    count: activities.filter(a => a.category === 'Sports').length,
    description: 'Team and individual sports'
  },
  {
    name: 'Strength Training',
    icon: '💪',
    count: activities.filter(a => a.category === 'Strength Training').length,
    description: 'Weight training and bodyweight exercises'
  },
  {
    name: 'Fitness Classes',
    icon: '🧘',
    count: activities.filter(a => a.category === 'Fitness Classes').length,
    description: 'Group fitness and structured classes'
  },
  {
    name: 'Outdoor Activities',
    icon: '🏔️',
    count: activities.filter(a => a.category === 'Outdoor Activities').length,
    description: 'Outdoor recreation and adventure sports'
  },
];

export const getActivitiesByCategory = (category: string): Activity[] => {
  return activities.filter(activity => activity.category === category);
};

export const searchActivities = (query: string): Activity[] => {
  const lowercaseQuery = query.toLowerCase();
  return activities.filter(activity =>
    activity.name.toLowerCase().includes(lowercaseQuery) ||
    activity.category.toLowerCase().includes(lowercaseQuery) ||
    activity.description?.toLowerCase().includes(lowercaseQuery)
  );
};

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};
