import siteConfig from "../config/siteConfig";

const faqs = [
  {
    question: "Where are you based?",
    answer: `I live and work in ${siteConfig.location}. Most of my days begin here, even when the celebration itself is somewhere else.`,
  },
  {
    question: "Do you travel?",
    answer: siteConfig.availableWorldwide
      ? "Yes. I travel for weddings, portraits, and editorial work, in India and abroad. Travel is planned with you so the day still feels unhurried."
      : `I photograph primarily around ${siteConfig.city}.`,
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Popular wedding dates often settle eight to twelve months ahead. If your day is closer than that, write anyway — I would rather tell you honestly what is possible.",
  },
  {
    question: "Do you photograph destination weddings?",
    answer:
      "Yes. Destination days are some of my favourite work. We plan the light, the pace, and the people who matter before anyone boards a flight.",
  },
  {
    question: "How many photographs will we receive?",
    answer:
      "A full wedding day is usually a few hundred finished photographs, edited into a story rather than a dump of every frame. Smaller sessions are edited with the same care, in a tighter edit.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "A preview arrives within a couple of weeks. The full gallery follows in about eight to ten weeks for weddings, and sooner for portraits and smaller sessions.",
  },
  {
    question: "Do you help with posing?",
    answer:
      "I direct lightly, and only when it helps. Most of the photographs I am proudest of happen while you are in the middle of the day, not performing it.",
  },
  {
    question: "Do you provide albums?",
    answer:
      "Yes. After the gallery is delivered we can design a printed album, and a small set of prints if you want something to hold before the book is made.",
  },
  {
    question: "Can we customize coverage?",
    answer:
      "Yes. Coverage can be a few quiet hours, a full day, or several days around a destination wedding. We shape it around how you actually want the day to feel.",
  },
  {
    question: "What happens after we inquire?",
    answer: `I read every note myself and reply ${siteConfig.responseTime}. If it feels like a fit, we arrange a conversation before anything is booked.`,
  },
];

export default faqs;
