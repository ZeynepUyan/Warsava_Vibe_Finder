export function filterPlaces(places, mood, activity, budget) {
  return places.filter((place) => {
    const moodMatch = place.mood === mood;

    const activityMatch = activity === "all" || place.activity === activity;

    const budgetMatch = place.budget === budget;

    return moodMatch && activityMatch && budgetMatch;
  });
} // JavaScript source code
