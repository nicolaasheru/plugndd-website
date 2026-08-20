export type DNAType =
  | "story-crafter"
  | "taste-curator"
  | "insight-engineer"
  | "trend-whisperer";

export interface SpiderData {
  vision: number;
  aestheticSensitivity: number;
  analyticalDepth: number;
  empathySocialIntuition: number;
  trendResponsiveness: number;
  innovationExperimentation: number;
  communicationInfluence: number;
  executionDiscipline: number;
}

export interface DNATypeData {
  id: DNAType;
  name: string;
  tagline: string;
  tags: string[];
  description: string[];
  teamContributions: string[];
  quotes: string[];
  environments: string[];
  growthPath: string[];
  spiderData: SpiderData;
  minScore: number;
  maxScore: number;
}

export const spiderLabels = [
  { key: "vision", label: "Vision &\nConceptualization" },
  { key: "aestheticSensitivity", label: "Aesthetic\nSensitivity" },
  { key: "analyticalDepth", label: "Analytical\nDepth" },
  { key: "empathySocialIntuition", label: "Empathy &\nSocial Intuition" },
  { key: "trendResponsiveness", label: "Trend\nResponsiveness" },
  { key: "innovationExperimentation", label: "Innovation &\nExperimentation" },
  { key: "communicationInfluence", label: "Communication\nInfluence" },
  { key: "executionDiscipline", label: "Execution\nDiscipline" },
];

export const dnaTypes: DNATypeData[] = [
  {
    id: "story-crafter",
    name: "STORY CRAFTER",
    tagline: '"The Heart of the Brand."',
    tags: [
      "Emotional Insight",
      "Narrative Depth",
      "Brand Soul & Symbolic Thinking",
    ],
    description: [
      "People don't just remember what you say, they remember how you made them feel. For Story Crafters, marketing is not a transaction. It's a relationship. A transformation.",
      "You are wired to seek meaning before mechanics. You listen deeply, understand human emotions intuitively, and build campaigns that feel like conversations rather than ads. You believe that brands shouldn't just try to be liked, they should help people feel seen. Your voice gives brands a soul. Your imagination turns information into emotion. Where others chase speed, you fight for significance.",
    ],
    teamContributions: [
      "A gift for narrative, symbolism, and emotional connection",
      "A deep understanding of what customers need to hear, not just what they want to buy",
      "The ability to turn a product into a story and a story into loyalty",
    ],
    quotes: [
      "If it doesn't make people feel, why bother?",
      '"Your story deserves center stage, I just help with the lighting."',
      "Turns chaos into goosebumps.",
    ],
    environments: [
      "You come alive where brands have purpose, history, community, and heart.",
      "Where creativity isn't rushed, where ideas are nurtured, and where emotional resonance matters.",
    ],
    growthPath: [
      "Sometimes your empathy becomes so strong that you protect ideas longer than you should.",
      "The story matters, but so does getting it out into the world.",
      "Data can be a partner, not an enemy. When you embrace it, your message travels further.",
    ],
    spiderData: {
      vision: 9,
      aestheticSensitivity: 8,
      analyticalDepth: 6,
      empathySocialIntuition: 8,
      trendResponsiveness: 6,
      innovationExperimentation: 9,
      communicationInfluence: 10,
      executionDiscipline: 5,
    },
    minScore: 10,
    maxScore: 20,
  },
  {
    id: "taste-curator",
    name: "TASTE CURATOR",
    tagline: '"The Eye of the Brand."',
    tags: [
      "Precision & Refinement",
      "Iconic Visual Identity",
      "Elevated Brand Atmosphere",
    ],
    description: [
      "To you, beauty isn't superficial, it's identity. You believe that every pixel, every word, every detail is a promise from the brand to the audience.",
      'Taste Curators don\'t create "pretty things." You create symbols that signal value, trust, and belonging.',
      "Where others see a design, you see a world: tone, harmony, rhythm, and emotional atmosphere. You don't follow trends; you refine them. You don't decorate; you define.",
    ],
    teamContributions: [
      "A relentless instinct for what feels right",
      "The ability to make brands instantly recognizable",
      "A commitment to craft, discipline, and beauty that lasts",
    ],
    quotes: [
      '"If it\'s not iconic, start over."',
      "Pixel-perfect or nothing at all.",
      "Calm, collected, and allergic to anything off-balance.",
    ],
    environments: [
      "You flourish in places that honor excellence, where aesthetic direction has weight, and where visuals are not rushed or negotiated away in the name of convenience.",
    ],
    growthPath: [
      "Your standards are your strength, until they stop work from shipping.",
      "Not everything beautiful has to be perfect; not every success needs to be polished.",
      "Your genius becomes unstoppable when you learn to build systems, not just artworks.",
    ],
    spiderData: {
      vision: 7,
      aestheticSensitivity: 10,
      analyticalDepth: 5,
      empathySocialIntuition: 7,
      trendResponsiveness: 8,
      innovationExperimentation: 7,
      communicationInfluence: 6,
      executionDiscipline: 8,
    },
    minScore: 21,
    maxScore: 30,
  },
  {
    id: "insight-engineer",
    name: "INSIGHT ENGINEER",
    tagline: '"The Brain of the Brand."',
    tags: ["Analytical Power", "Strategic Judgment", "Optimization Instincts"],
    description: [
      'Where most people see "a campaign," you see a machine: inputs → variables → behavior → outcomes.',
      "Conversion Architects are strategists with a curious mind and an engineer's heart. You are drawn to results, improvement, clarity, and progress.",
      "You believe that creativity is powerful, but creativity with direction is unstoppable.",
      "You don't hope something will work. You prove it.",
    ],
    teamContributions: [
      "A talent for turning chaos into systems, dashboards, and optimization loops",
      "A sixth sense for what will scale and what won't",
      "The courage to test what others only assume",
    ],
    quotes: [
      '"I don\'t gamble. I measure."',
      '"I trust data more than optimism."',
      '"Efficiency is my love language."',
    ],
    environments: [
      "You excel where there is freedom to act, transparency in performance, and respect for experimentation.",
      "You flourish when decisions are made not by hierarchy, but by evidence.",
    ],
    growthPath: [
      "Your sharp mind can sometimes overshadow emotional nuance.",
      "Not everything that matters can be measured, and not everything measurable matters.",
      "Your brilliance reaches its peak when you learn to scale logic without shrinking the soul of the brand.",
    ],
    spiderData: {
      vision: 6,
      aestheticSensitivity: 5,
      analyticalDepth: 10,
      empathySocialIntuition: 6,
      trendResponsiveness: 7,
      innovationExperimentation: 7,
      communicationInfluence: 5,
      executionDiscipline: 9,
    },
    minScore: 31,
    maxScore: 40,
  },
  {
    id: "trend-whisperer",
    name: "TREND WHISPERER",
    tagline: '"The Pulse of the Brand."',
    tags: [
      "Emotional Insight",
      "Narrative Depth",
      "Brand Soul & Symbolic Thinking",
    ],
    description: [
      "Some people watch trends. You feel them.",
      "Culture Shapers see patterns before the rest of the world notices them: shifts in language, humor, fashion, attitudes, momentum. You understand what people want to talk about, and more importantly, why.",
      "You don't wait for the wave. You create the wave.",
      "When brands work with you, they become loud, relevant, and impossible to ignore.",
    ],
    teamContributions: [
      "A rare instinct for virality, timing, and cultural moments",
      "An ability to turn campaigns into shared experiences",
      "A natural flair for movement-building, collaboration, and creative risk",
    ],
    quotes: [
      "Always two seconds ahead of the internet.",
      '"Always online, never off my game."',
      '"Culture moves fast, I just keep pace with it."',
    ],
    environments: [
      "You need speed, freedom, experimentation, and boldness.",
      "You play best in worlds of social media, influencers, entertainment, and cultural storytelling anywhere the world is watching.",
    ],
    growthPath: [
      "Not every spark needs to be a wildfire.",
      "Sometimes your hunger for momentum can blur the long-term identity of the brand.",
      "Your greatest evolution comes from pairing cultural power with emotional storytelling, hype that actually endures.",
    ],
    spiderData: {
      vision: 8,
      aestheticSensitivity: 7,
      analyticalDepth: 6,
      empathySocialIntuition: 9,
      trendResponsiveness: 10,
      innovationExperimentation: 7,
      communicationInfluence: 7,
      executionDiscipline: 6,
    },
    minScore: 41,
    maxScore: 50,
  },
];

export function getDNAType(totalScore: number): DNATypeData {
  if (totalScore <= 20) return dnaTypes[0];
  if (totalScore <= 30) return dnaTypes[1];
  if (totalScore <= 40) return dnaTypes[2];
  return dnaTypes[3];
}
