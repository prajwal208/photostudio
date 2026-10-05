import siteConfig from "../config/siteConfig";

const about = {
  heroTitle: `Hello, I'm ${siteConfig.photographerName.split(" ")[0]}.`,
  intro:
    "I photograph weddings, portraits, and the quiet hours around them. I am based in Bangalore, and I go wherever a story asks me to go.",
  sections: [
    {
      id: "person",
      title: "The person behind the camera",
      paragraphs: [
        "I started with a borrowed film camera at my cousin's wedding in Mysore, standing at the edge of the room because I was too shy to step into it. That instinct never left. I still prefer the side of the room where nobody is performing.",
        "I keep a small notebook for every couple: how they met, the song they pretend not to love, who is likely to cry first. I drink filter coffee on wedding mornings, and I still carry a film body next to the digital cameras, mostly because it slows me down.",
      ],
    },
    {
      id: "approach",
      title: "My approach",
      paragraphs: [
        "The day leads. I do not build a shot list so strict that we miss what is actually happening. We make a few portraits with intention, then I disappear back into the celebration.",
        "People tell me the photographs feel like their memory of the day, not a styled version of it. That is the whole aim.",
      ],
    },
    {
      id: "why",
      title: "Why I photograph",
      paragraphs: [
        "Because ordinary gestures become the ones you miss. A father fixing his cuff. A friend laughing with her shoes already off. The look across a table that has nothing to do with the camera.",
        "I want those photographs to feel calm, intimate, and sturdy enough to live with.",
      ],
    },
    {
      id: "expect",
      title: "What you can expect",
      paragraphs: [
        "A calm presence, clear communication, and photographs that do not need a filter to feel like yours. I will tell you what I see, help when you want help, and leave you alone when the moment is already perfect.",
        "You can expect me to care about the people in the room as much as the pictures. The gallery should feel like the day, in the right order, with nothing shouting.",
      ],
    },
  ],
  notes: [
    "Based in Bangalore, working worldwide",
    "Weddings, portraits, and the days around them",
    "Film and digital, edited by hand",
    "Albums and a private online gallery",
  ],
};

export default about;
