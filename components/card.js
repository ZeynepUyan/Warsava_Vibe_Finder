// export function createCard(place) {

//     return `

//     <div class="place-card">

//       <div>

//         <h5>${place.name}</h5>

//         <p>${place.description}</p>

//       </div>

//       <div class="badge-group">

//         <span class="vibe-badge mood">
//           ${place.mood}
//         </span>

//         <span class="vibe-badge activity">
//           ${place.activity}
//         </span>

//         <span class="vibe-badge budget">
//           ${place.budget}
//         </span>

//       </div>

//     </div>

//   `;
// }// JavaScript source code
export function createCard(place) {
  let moodEmoji =
    place.mood === "Cozy"
      ? "☕"
      : place.mood === "Main Character"
        ? "✨"
        : place.mood === "Quiet"
          ? "📚"
          : "⚡";
  let activityEmoji =
    place.activity === "food"
      ? "🍔"
      : place.activity === "drinks"
        ? "🍹"
        : "🛋️";

  return `
        <div class="place-card">
            <div>
                <h5>${place.name}</h5>
                <p>${place.desc}</p>
            </div>
            <div class="badge-group">
                <span class="vibe-badge mood">${moodEmoji} ${place.mood}</span>
                <span class="vibe-badge activity">${activityEmoji} ${place.activity.charAt(0).toUpperCase() + place.activity.slice(1)}</span>
                <span class="vibe-badge budget">${place.budget}</span>
            </div>
        </div>
    `;
}

