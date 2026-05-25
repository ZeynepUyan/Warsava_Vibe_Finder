// 1. DATA (All your places combined)
const warsawPlaces = [
  { name: "Charlotte (Pl. Zbawiciela)", mood: "Main Character", activity: "food", budget: "złzł", desc: "An absolute classic for people-watching, fresh croissants, and lively French morning vibes in the heart of Warsaw." },
  { name: "Wrzenie Świata", mood: "Quiet", activity: "cool place to sit", budget: "zł", desc: "A beautiful bookstore-café hidden away near Nowy Świat. The ultimate peaceful location for reading and focus." },
  { name: "Halka (Praga)", mood: "Cozy", activity: "food", budget: "złzłzł", desc: "Experience traditional Polish comfort food surrounded by a beautifully designed, premium warm wooden interior." },
  { name: "Clear Bar", mood: "Spontaneous", activity: "drinks", budget: "złzłzł", desc: "High-end fancy cocktails in a secret, artistic location for an adventurous night out." },
  { name: "Hala Koszyki", mood: "Spontaneous", activity: "food", budget: "złzł", desc: "Vibrant industrial hall filled with street food bars, drinks, and loud music." },
  { name: "Cafe Kulturalna", mood: "Main Character", activity: "drinks", budget: "zł", desc: "Iconic bar inside the Palace of Culture and Science. Great vibes and cultural atmosphere." },
  { name: "Stara Pączkarnia", mood: "Cozy", activity: "food", budget: "zł", desc: "Quick, warm, traditional Polish donuts on the go. Perfect for a sweet break." },
  { name: "Charlotte (Pl. Zbawiciela)", description: "Fresh croissants and lively French morning vibes.", mood: "Main Character", activity: "food", budget: "złzł" },
  { name: "Wrzenie Świata", description: "Perfect quiet bookstore café for focus.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Ministry of Coffee (Ministerstwo Kawy)", description: "Bustling square view from cozy window sills.", mood: "Cozy", activity: "food", budget: "zł" },
  { name: "Halka (Praga)", description: "Traditional Polish comfort food and warm interiors.", mood: "Cozy", activity: "food", budget: "złzłzł" },
  { name: "Forum", description: "Trendy riverside social hangout with drinks.", mood: "Spontaneous", activity: "drinks", budget: "złzł" },
  { name: "Szóstka", description: "Sophisticated rooftop terrace with peaceful city views.", mood: "Cozy", activity: "food", budget: "złzłzł" },
  { name: "Bez Gwiazdek", description: "Intimate minimalist restaurant with artistic tasting menus.", mood: "Quiet", activity: "food", budget: "złzłzł" },
  { name: "Regenty (Kawiarnia Regenty)", description: "Plant-filled courtyard hidden down a quiet alleyway.", mood: "Quiet", activity: "drinks", budget: "złzł" },
  { name: "Cafe Kulturalna", description: "Grand retro cafe hidden inside a historic palace.", mood: "Spontaneous", activity: "drinks", budget: "złzł" },
  { name: "Cafe Kafka", description: "A cozy, legendary student hub filled with floor-to-ceiling bookshelves right next to the University of Warsaw campus.", mood: "Cozy", activity: "food", budget: "zł" },
  { name: "Varso Place (Co-working Area)", description: "An open, modern architectural space upstairs with an entirely free work area, giant windows, and its own coffee shop.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Groff Cafe", description: "A beautifully quiet hidden gem tucked completely away from traffic near Politechnika, perfect for hiding with a laptop or journal.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Buno Specialty Coffee", description: "A relaxed neighborhood café in Wola featuring cozy couches, great ambient music, and fantastic budget-friendly pastries.", mood: "Cozy", activity: "food", budget: "zł" },
  { name: "BUW Roof Garden", description: "One of the largest roof gardens in Europe, featuring geometric metal bridges, hidden stone benches, and a peaceful view over the Vistula River.", mood: "Cozy", activity: "cool place to sit", budget: "zł" },
  { name: "Łazienki Park", description: "A massive, historic royal park filled with wandering peacocks, neoclassical palaces floating on lakes, and free summer Chopin concerts.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Museum of Warsaw Praga Courtyard", description: "A quiet, historic brick courtyard across the river that lets you sit peacefully amidst raw pre-war architecture with a very low student entry fee.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Królikarnia Sculpture Park", description: "A historic classicist palace sitting on top of a green hill, surrounded by ancient trees and scattered marble sculptures where students picnic.", mood: "Spontaneous", activity: "cool place to sit", budget: "zł" },
  { name: "The Fryderyk Chopin Museum", description: "A historic baroque palace built into a hillside, featuring quiet multimedia listening booths where you can sit with headphones and look out at the old streets.", mood: "Cozy", activity: "cool place to sit", budget: "zł" },
  { name: "Ujazdowski Castle", description: "A 13th-century palace housing experimental art, hidden deep inside a quiet park with free admission for everyone on Thursdays.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Saxon Garden (Ogród Saski)", description: "Warsaw's oldest public park, featuring grand Baroque sculptures, an elegant 19th-century fountain, and shady tree-lined paths perfect for a thoughtful walk.", mood: "Cozy", activity: "cool place to sit", budget: "zł" },
  { name: "Adam Mickiewicz Museum of Literature", description: "Six historic post-war reconstructed townhouses right on the Old Town Market Square with low student tickets and free entry days.", mood: "Quiet", activity: "cool place to sit", budget: "zł" },
  { name: "Krasinski Palace Garden", description: "A beautifully manicured historic palace park with massive ponds, modern lounge chairs, and a very calm, uncrowded student-friendly atmosphere.", mood: "Cozy", activity: "cool place to sit", budget: "zł" },
  { name: "The Xawery Dunikowski Museum", description: "A neoclassical palace sitting on a dramatic hill slope where you can read in the grass surrounded by ancient trees and classical marble statues.", mood: "Spontaneous", activity: "cool place to sit", budget: "zł" },
  { name: "Qchnia Artystyczna", description: "An artistic restaurant built right into the castle's grand stone terrace, overlooking Agrykola park and the river valley below.", mood: "Cozy", activity: "food", budget: "złzł" },
  { name: "Wilanów Palace Gardens", description: "A magnificent 17th-century Baroque royal estate with English-style landscaped lawns, rose gardens, and a large lake.", mood: "Quiet", activity: "cool place to sit", budget: "złzł" },
  { name: "Palace of Culture Viewing Terrace", description: "An iconic 1950s landmark offering unmatched 360-degree skyline views with an inner Gothic gallery to sit and drink coffee.", mood: "Spontaneous", activity: "drinks", budget: "złzł" },
  { name: "The National Museum Courtyard Cafe", description: "A sleek, hidden café nestled between monumental stone museum walls, providing a peaceful escape from the busy city streets.", mood: "Quiet", activity: "food", budget: "złzł" },
  { name: "St. Anne’s Church Bell Tower", description: "A steep 150-step brick climb revealing an intimate, romantic view right over the colorful rooftops of the Old Town.", mood: "Cozy", activity: "cool place to sit", budget: "złzł" }
];

// 2. HTML Elements
const moodFilter = document.getElementById("moodFilter");
const activityFilter = document.getElementById("activityFilter");
const budgetFilter = document.getElementById("budgetFilter");
const filterBtn = document.getElementById("filterBtn");
const placesContainer = document.getElementById("placesContainer");

// 3. Add "All" options automatically
if (moodFilter && moodFilter.options[0].value !== "all") {
  moodFilter.insertAdjacentHTML("afterbegin", '<option value="all">Any Mood (All) 🌟</option>');
  moodFilter.value = "all";
}
if (budgetFilter && budgetFilter.options[0].value !== "all") {
  budgetFilter.insertAdjacentHTML("afterbegin", '<option value="all">Any Budget (All) 💰</option>');
  budgetFilter.value = "all";
}
if (activityFilter) {
  activityFilter.value = "all";
}

// 4. Render function (With Google Maps Link Feature!)
function renderPlaces(places) {
  placesContainer.innerHTML = "";

  if (places.length === 0) {
    placesContainer.innerHTML = `
      <div class="dev-placeholder" style="grid-column: 1 / -1; width: 100%;">
          <div>
              <p>🕵️‍♀️ No places found!</p>
              <small>Try changing your vibe or budget to discover more hidden gems in Warsaw.</small>
          </div>
      </div>
    `;
    return;
  }

  places.forEach((place) => {
    let moodEmoji = place.mood === "Cozy" ? "☕" : place.mood === "Main Character" ? "✨" : place.mood === "Quiet" ? "📚" : "⚡";
    let activityEmoji = place.activity === "food" ? "🍔" : place.activity === "drinks" ? "🍹" : "🛋️";

    // Create the dynamic Google Maps Search Link
    const mapQuery = encodeURIComponent(place.name + " Warsaw");
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

    // Notice the style="cursor: pointer;" and onclick="..." inside the div below!
    const cardHTML = `
      <div class="place-card" style="cursor: pointer;" onclick="window.open('${mapLink}', '_blank')">
          <div>
              <h5>${place.name}</h5>
              <p>${place.desc || place.description}</p> 
          </div>
          <div class="badge-group">
              <span class="vibe-badge mood">${moodEmoji} ${place.mood}</span>
              <span class="vibe-badge activity">${activityEmoji} ${place.activity.charAt(0).toUpperCase() + place.activity.slice(1)}</span>
              <span class="vibe-badge budget">${place.budget}</span>
          </div>
      </div>
    `;
        
    placesContainer.innerHTML += cardHTML;
  });
}

// 5. Filter Logic
filterBtn.addEventListener("click", () => {
  const selectedMood = moodFilter.value;
  const selectedActivity = activityFilter.value;
  const selectedBudget = budgetFilter.value;

  const filteredPlaces = warsawPlaces.filter((place) => {
    const isMoodMatch = selectedMood === "all" || place.mood === selectedMood;
    const isActivityMatch = selectedActivity === "all" || place.activity === selectedActivity;
    const isBudgetMatch = selectedBudget === "all" || place.budget === selectedBudget;

    return isMoodMatch && isActivityMatch && isBudgetMatch;
  });

  renderPlaces(filteredPlaces);
});

// 6. Start the App!
renderPlaces(warsawPlaces);