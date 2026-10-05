import photos from "./photos";

const services = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description:
      "A full telling of the day — ceremony, family, and the hours nobody scheduled. Photographed quietly, edited as one story.",
    startingPrice: "₹2,50,000",
    pricePrefix: "From",
    image: photos.palms,
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Photography",
    description:
      "An unhurried session before the guests arrive. Somewhere that already means something to you, with time to actually be together.",
    startingPrice: "₹75,000",
    pricePrefix: "From",
    image: photos.goldenCouple,
  },
  {
    id: "couple",
    title: "Couple Sessions",
    description:
      "For engagements, anniversaries, or an ordinary afternoon you want to keep. No large production. Just the two of you and the light.",
    startingPrice: "₹45,000",
    pricePrefix: "From",
    image: photos.pebbleBeach,
  },
  {
    id: "engagement",
    title: "Engagement Photography",
    description:
      "A portrait of this particular chapter — before the planning takes over, while the news is still new.",
    startingPrice: "₹60,000",
    pricePrefix: "From",
    image: photos.sunset,
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    description:
      "Portraits for one person, a family, or a small group. Directed gently, finished so they still look like you.",
    startingPrice: "₹35,000",
    pricePrefix: "From",
    image: photos.portraitAmara,
  },
  {
    id: "destination",
    title: "Destination Weddings",
    description:
      "Coverage that travels with you. We plan the places, the weather, and the pace so the wedding still feels like a wedding, not a production.",
    startingPrice: "On request",
    pricePrefix: "",
    image: photos.blackSand,
  },
  {
    id: "event",
    title: "Events",
    description:
      "Dinners, celebrations, and gatherings where the room matters as much as the speeches. Photographed with the same restraint as a wedding.",
    startingPrice: "₹80,000",
    pricePrefix: "From",
    image: photos.chandelier,
  },
  {
    id: "editorial",
    title: "Brand / Editorial Photography",
    description:
      "Portraits and stories for people and houses that need photographs with a point of view — calm, specific, and made to last past a season.",
    startingPrice: "₹90,000",
    pricePrefix: "From",
    image: photos.desertRoad,
  },
];

export default services;
