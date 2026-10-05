import photos from "./photos";

export const categories = [
  "All",
  "Weddings",
  "Couples",
  "Portraits",
  "Pre-Weddings",
  "Events",
  "Travel",
  "Editorial",
];

const portfolio = [
  {
    slug: "jessica-michael-goa",
    title: "Jessica & Michael",
    type: "Wedding",
    category: "Weddings",
    location: "Goa, India",
    year: "2026",
    date: "February 2026",
    featured: true,
    wide: false,
    cover: photos.palms,
    description:
      "An intimate celebration surrounded by warm light, a garden by the water, and the people they love most.",
    story:
      "They married with the sea close by and their people closer. The afternoon was bright, the evening slow, and nobody was asked to perform a feeling they were not already having. I followed the small things: a hand found under the table, petals caught in someone's hair, the walk away from the noise.",
    details: [
      { label: "Celebration", value: "Wedding" },
      { label: "Setting", value: "A garden and the coast" },
      { label: "Gathering", value: "Family and a few dear friends" },
    ],
    images: [
      photos.palms,
      photos.sunflare,
      photos.shadowHands,
      photos.confetti,
      photos.ringsRoses,
      photos.floralArch,
      photos.eucalyptus,
    ],
  },
  {
    slug: "leela-arjun-jaipur",
    title: "Leela & Arjun",
    type: "Wedding",
    category: "Weddings",
    location: "Jaipur, India",
    year: "2025",
    date: "November 2025",
    featured: true,
    wide: false,
    cover: photos.mandapOutdoor,
    description:
      "A ceremony paced by music, marigolds, and the quiet that arrives when two families become one.",
    story:
      "The day moved from a bright outdoor mandap into a room full of candles. I stayed near the gestures that do not announce themselves — a hand steadied, a laugh into a shoulder, the walk back down the aisle when the formal part was over and the real evening began.",
    details: [
      { label: "Celebration", value: "Wedding" },
      { label: "Setting", value: "Outdoor mandap and an evening reception" },
      { label: "Gathering", value: "Two families, fully present" },
    ],
    images: [
      photos.mandapOutdoor,
      photos.mandapIndoor,
      photos.mehndi,
      photos.goldRings,
      photos.ringsFlowers,
    ],
  },
  {
    slug: "mara-jon-iceland",
    title: "Mara & Jon",
    type: "Wedding",
    category: "Weddings",
    location: "Vík, Iceland",
    year: "2025",
    date: "September 2025",
    featured: true,
    wide: false,
    cover: photos.blackSand,
    description:
      "Two coats, a black beach, and a promise said where the wind could take it.",
    story:
      "They wanted a day with almost no one watching, on a shore that does not pretend to be gentle. We worked between gusts. The veil did most of the composing. What remains is weather, and the look on their faces when the sentence was finished.",
    details: [
      { label: "Celebration", value: "Elopement" },
      { label: "Setting", value: "A black-sand beach" },
      { label: "Gathering", value: "Just the two of them" },
    ],
    images: [photos.blackSand, photos.bwVeil],
  },
  {
    slug: "anna-daniel-bali",
    title: "Anna & Daniel",
    type: "Pre-Wedding",
    category: "Pre-Weddings",
    location: "Bali, Indonesia",
    year: "2026",
    date: "January 2026",
    featured: true,
    wide: false,
    cover: photos.goldenCouple,
    description: "An engagement afternoon with nowhere else to be.",
    story:
      "We followed the shade, then the last of the light. There was no timeline beyond the hour the sun left the trees. They talked, I listened, and the photographs arrived in the pauses.",
    details: [
      { label: "Session", value: "Pre-wedding" },
      { label: "Setting", value: "A garden path in late light" },
      { label: "Pace", value: "Unscheduled" },
    ],
    images: [photos.goldenCouple, photos.ringsClose],
  },
  {
    slug: "nora-elias-comporta",
    title: "Nora & Elias",
    type: "Couple Session",
    category: "Couples",
    location: "Comporta, Portugal",
    year: "2025",
    date: "June 2025",
    featured: true,
    wide: false,
    cover: photos.pebbleBeach,
    description: "A few hours on the coast, with no one to perform for.",
    story:
      "They asked for photographs that felt like a walk, not a shoot. We stayed until the light went thin. The veil caught the wind and did the rest.",
    details: [
      { label: "Session", value: "Couple session" },
      { label: "Setting", value: "A pebble shore" },
      { label: "Hours", value: "Late afternoon into evening" },
    ],
    images: [photos.pebbleBeach, photos.sunset],
  },
  {
    slug: "amara-bangalore",
    title: "Amara",
    type: "Portrait",
    category: "Portraits",
    location: "Bangalore, India",
    year: "2026",
    date: "March 2026",
    featured: true,
    wide: false,
    cover: photos.portraitAmara,
    description: "A portrait sitting with the makeup already lived-in.",
    story:
      "We talked more than we posed. The point was a photograph she would still recognise in ten years — direct, a little undone, and entirely hers.",
    details: [
      { label: "Session", value: "Portrait" },
      { label: "Setting", value: "A quiet studio wall" },
      { label: "Feeling", value: "Unforced" },
    ],
    images: [photos.portraitAmara],
  },
  {
    slug: "maya-rohan-tuscany",
    title: "Maya & Rohan",
    type: "Wedding",
    category: "Weddings",
    location: "Tuscany, Italy",
    year: "2024",
    date: "August 2024",
    featured: false,
    wide: false,
    cover: photos.fieldVeil,
    description: "Late summer, a field going gold, and a wedding that never raised its voice.",
    story:
      "The ceremony was short. The afternoon was long. They disappeared into the field for a little while, and the photographs from that hour are the ones they asked to print first.",
    details: [
      { label: "Celebration", value: "Wedding" },
      { label: "Setting", value: "A field and a lake" },
      { label: "Season", value: "Late summer" },
    ],
    images: [photos.fieldVeil, photos.lake],
  },
  {
    slug: "ines-rajasthan",
    title: "Ines",
    type: "Editorial",
    category: "Editorial",
    location: "Rajasthan, India",
    year: "2025",
    date: "April 2025",
    featured: false,
    wide: false,
    cover: photos.desertRoad,
    description: "An editorial made on an open road — heat, dust, and a dress in the wind.",
    story:
      "We stopped where the highway went straight and the hills went pale. A few frames, a lot of silence, and a photograph that feels like weather more than fashion.",
    details: [
      { label: "Session", value: "Editorial" },
      { label: "Setting", value: "An open road" },
      { label: "Light", value: "Hard afternoon sun" },
    ],
    images: [photos.desertRoad],
  },
  {
    slug: "casa-luz-lisbon",
    title: "Casa Luz",
    type: "Event",
    category: "Events",
    location: "Lisbon, Portugal",
    year: "2025",
    date: "May 2025",
    featured: false,
    wide: false,
    cover: photos.chandelier,
    description: "A long table, low light, and a room that grew warmer as the night went on.",
    story:
      "No speeches worth interrupting, just a dinner that lasted. I photographed the glass, the candles, and the way people leaned in once the formality had left.",
    details: [
      { label: "Gathering", value: "Private dinner" },
      { label: "Setting", value: "A candlelit table" },
      { label: "Hour", value: "After dark" },
    ],
    images: [photos.chandelier],
  },
];

export function getStory(slug) {
  return portfolio.find((story) => story.slug === slug);
}

export function getFeaturedStories() {
  return portfolio.filter((story) => story.featured);
}

export function getAdjacentStory(slug) {
  const index = portfolio.findIndex((story) => story.slug === slug);
  if (index < 0) return null;
  return portfolio[(index + 1) % portfolio.length];
}

export default portfolio;
