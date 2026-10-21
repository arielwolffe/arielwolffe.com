// All site content. Standard mode (/) and story mode (/story) both read from here.
// The site is about Ariel and her projects; the day job is one line plus LinkedIn.
// Facts come from the project repos and career/brand/brand.md; follow the privacy line there.

export type Link = { label: string; href: string };

export type CaseSection = { heading: string; body: string[] };

export type Project = {
  slug: string;
  name: string;
  status: "Live" | "In development" | "Coming soon" | "Coming back";
  oneLiner: string;
  summary: string;
  tags: string[];
  links?: Link[];
  // Projects with a case study get their own page at /projects/<slug>.
  // Written as a story in Ariel's voice; the technical facts sit in "Under the hood" at the end.
  caseStudy?: {
    sections: CaseSection[];
    closer: { text: string; link?: Link };
    underTheHood: { myPart: string; since: string; stack: string[] };
  };
};

export type Scene = {
  id: string;
  chapter: ChapterId;
  title: string;
  lines: string[];
  pose: string;
  palette: { sky: string; ground: string; accent: string };
};

export type ChapterId = "from" | "path" | "career" | "now";

export const profile = {
  name: "Ariel Wolffe",
  nameLine: "Product Engineering Lead · Applied AI",
  location: "London, UK",
  intro:
    "I'm always tinkering with something, and this is where it all ends up: my projects, my writing, and whatever I'm into this week.",
  about: [
    "I grew up in Trinidad and Tobago, fell in love with ideas, and found out I could build them. In 2014 one of them, a creative-writing app called StoryNation, won a national innovation grant.",
    "I started out building software for small businesses, moved into business analysis and UX design, ran my own agency, then moved to London. These days I'm a tech lead in London, and my team builds with AI agents.",
    "After hours I tinker. I look after a food-delivery platform back home, I'm building an app for everyone who saves things as a \"maybe\", and I write about what I learn along the way.",
  ],
  dayJob: {
    title: "Tech Lead",
    line: "By day I lead mobile engineering on a fintech app in London, built largely with AI agents through a workflow I designed.",
    link: { label: "Full career on LinkedIn", href: "https://www.linkedin.com/in/ariel-wolffe" },
  },
  // Contact is LinkedIn only for now. Add { label: "Email", href: "mailto:hello@arielwolffe.com" } once that inbox exists.
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/ariel-wolffe" }] satisfies Link[],
};

// "Now": what I'm up to this month. Keep it short and update it often.
export const now: string[] = [
  "Building Yes, Maybe for iOS.",
  "Obsessing over applied AI in every part of my life.",
  "Ranting on Instagram. Maybe.",
];

export const projects: Project[] = [
  {
    slug: "neighbourhood-munchies",
    name: "Neighbourhood Munchies",
    status: "Live",
    oneLiner: "Local food delivery for Trinidad and Tobago. I built it, and I still look after it.",
    summary:
      "In 2019 a small Trinidad company asked my agency to build them a food-delivery platform. It's still live, and I'm still the one keeping it fed.",
    tags: ["In production", "React", "Node", "Supabase", "Docker"],
    links: [{ label: "neighbourhoodmunchies.com", href: "https://neighbourhoodmunchies.com" }],
    caseStudy: {
      sections: [
        {
          heading: "Where it started",
          body: [
            "In 2019 I was running my own small agency in Trinidad. A local company came to me wanting what bigger cities take for granted: order from your favourite neighbourhood spot in a few taps, and have it turn up at your door.",
          ],
        },
        {
          heading: "I never handed it over",
          body: [
            "Agency projects usually end with a handover. This one didn't. Seven years on, I still look after all of it: the new features, the deploys, the \"is it down?\" messages, the data. It's grown up alongside me.",
          ],
        },
        {
          heading: "What's under the bonnet",
          body: [
            "It's four apps sharing one codebase: the site that welcomes you, the app where you order, a dashboard where staff juggle menus, live orders and delivery zones, and the API holding it all together.",
          ],
        },
        {
          heading: "What a small market teaches you",
          body: [
            "When it's a small company, every hour and every dollar matters. It's taught me to keep the stack boring, the hosting cheap and the details sharp: order statuses that make sense, menus that are easy to change, and a dashboard people actually want to open.",
          ],
        },
      ],
      closer: {
        text: "In Trinidad? Go order something.",
        link: { label: "neighbourhoodmunchies.com", href: "https://neighbourhoodmunchies.com" },
      },
      underTheHood: {
        myPart: "Built it through my agency; still manage and maintain it",
        since: "2019",
        stack: ["React + Vite", "TypeScript", "Node/Express API", "Supabase (Postgres, auth)", "Turborepo monorepo", "Docker + Traefik"],
      },
    },
  },
  {
    slug: "yes-maybe",
    name: "Yes, Maybe",
    status: "In development",
    oneLiner: "Keep your maybes. Decide closer to the time.",
    summary:
      "For everyone whose camera roll is full of things they might do. Save it from anywhere, and it comes back when it actually fits your week.",
    tags: ["iOS", "Expo", "Supabase", "Gemini"],
    caseStudy: {
      sections: [
        {
          heading: "The maybe pile",
          body: [
            "You see something brilliant on Instagram: a market, a gig, a supper club. You're not ready to say yes, so you screenshot it. Three weeks later it's buried under 400 photos, and the date has been and gone.",
          ],
        },
        {
          heading: "A home for the maybes",
          body: [
            "Yes, Maybe is where those go. Share a link, a screenshot or a TikTok, and it reads the date, the place and the price for you. No typing, no forms.",
          ],
        },
        {
          heading: "Then it nudges you at the right moment",
          body: [
            "What's on this weekend. A heads-up before something sells out. And because it can see your calendar, it can tell you whether the thing actually fits, travel time included.",
          ],
        },
        {
          heading: "How I'm building it",
          body: [
            "It's local-first, so it works without an account, and the AI runs on the server, so nothing clever lives on your phone. I'm building it the way I build at work: spec first, with AI agents doing a lot of the typing and me keeping the decisions.",
          ],
        },
      ],
      closer: { text: "It's in development for iOS. The newsletter is the best place to follow along." },
      underTheHood: {
        myPart: "Everything: product, design and engineering",
        since: "2026",
        stack: ["Expo + React Native", "TypeScript", "Supabase (Postgres, auth, Edge Functions)", "Google Gemini, server-side"],
      },
    },
  },
  {
    slug: "agent-skills",
    name: "Agent skills",
    status: "Coming soon",
    oneLiner: "The skills and commands I use to build with AI agents, shared in public.",
    summary:
      "Spec-first workflows, context engineering and the small tools that make agent-written code something you can trust. Open-sourcing them on GitHub soon.",
    tags: ["Claude Code", "Context engineering", "Open source"],
  },
  {
    slug: "storynation",
    name: "StoryNation",
    status: "Coming back",
    oneLiner: "My first big idea, back for a second go.",
    summary:
      "A creative-writing app that won a national innovation grant in Trinidad and Tobago in 2014. Ten years on, I'm rebuilding it.",
    tags: ["i2i Grant 2014", "Side quest"],
  },
];

export const writing = {
  name: "My newsletter", // Substack name still to decide (career/brand/brand.md, open decisions)
  pitch:
    "Notes on building things with AI, side projects that actually ship, and what I learn along the way. Coming soon on Substack.",
  url: undefined as string | undefined, // add the Substack URL when it launches
};

export const talksNote = "Talks are coming in 2027. If you run an event, say hello on LinkedIn.";

export const chapters: { id: ChapterId; label: string }[] = [
  { id: "from", label: "Where I'm from" },
  { id: "path", label: "How I got here" },
  { id: "career", label: "Career highlights" },
  { id: "now", label: "Building now" },
];

export const scenes: Scene[] = [
  {
    id: "home",
    chapter: "from",
    title: "Home",
    lines: ["Hey, I'm Ariel.", "Welcome to my corner of the internet."],
    pose: "waving",
    palette: { sky: "#f2b880", ground: "#e9b8a7", accent: "#e0435a" },
  },
  {
    id: "spark",
    chapter: "path",
    title: "The spark",
    lines: ["I fell in love with ideas.", "Then I found out I could build them."],
    pose: "sketching",
    palette: { sky: "#3d0f1c", ground: "#6e1a2a", accent: "#d9a441" },
  },
  {
    id: "building",
    chapter: "path",
    title: "Building things",
    lines: ["I learned the user first, then the code,", "then everything in between."],
    pose: "whiteboard",
    palette: { sky: "#f6ecdf", ground: "#d9a441", accent: "#1d6f6a" },
  },
  {
    id: "london",
    chapter: "path",
    title: "Moving to London",
    lines: ["New city. First winter.", "Same habit: build the thing."],
    pose: "suitcase",
    palette: { sky: "#9fb3b8", ground: "#5d6b70", accent: "#e0435a" },
  },
  {
    id: "company",
    chapter: "career",
    title: "The company years",
    lines: ["In 2026 we shipped a credit card,", "a native app and Google Pay."],
    pose: "leading",
    palette: { sky: "#faf5ec", ground: "#6e1a2a", accent: "#d9a441" },
  },
  {
    id: "now",
    chapter: "now",
    title: "Now",
    lines: ["Tech lead by day.", "Tinkerer by night."],
    pose: "tinkering",
    palette: { sky: "#241226", ground: "#3d0f1c", accent: "#d9a441" },
  },
];
