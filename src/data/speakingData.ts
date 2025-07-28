interface SpeakingEvent {
  id: string;
  title: string;
  description: string;
  name: string;
  date: string;
  location: {
    city: string;
    state: string;
    country: string;
    venue?: string;
  };
  links: {
    video?: string;
    article?: string;
    conferenceWebsite?: string;
    slides?: string;
    github?: string;
  };
  type: "conference" | "workshop" | "meetup" | "webinar" | "lightning-talk";
  tags?: string[];
}

export const speakingData: SpeakingEvent[] = [
  {
    id: "carolina-code-conference-2025",
    title:
      "And It Was Written ~ An Introspective in the Importance of ReadMes.",
    name: "Carolina Codes 2025",
    description:
      "You've created the perfect solution, but it's useless without proper documentation. In our open-source-driven world, countless powerful tools sit unused because developers skip the documentation step. This creates a critical gap as software becomes increasingly dependent on open-source components. Learn practical tips, templates, and strategies to transform your documentation from afterthought to essential craft. Drawing from experience as both science educator and full-stack developer, discover why clear documentation isn't just helpful—it's the bridge between brilliant code and actual impact.",
    date: "2025-08-15",
    location: {
      city: "Greenville",
      state: "South Carolina",
      country: "USA",
      venue: "Flywheel",
    },
    type: "conference",
    tags: ["learning", "polyglot", "open source"],
    links: {
      conferenceWebsite: "https://blog.carolina.codes/",
      // "slides": "https://docs.google.com/presentation/d/1X90GRVrInlTx22y8j7fUk1UcMAXiCCFO/edit?usp=sharing&ouid=101977102167064448578&rtpof=true&sd=true",
      //"github": "https://github.com/username/react-ts-guide"
    },
  },
  {
    id: "devopsdays-atlanta-2025",
    title: "Social Goodness || Civic Hacking - What's in it for me?",
    name: "DevOpsDays Atlanta 2025",
    description:
      "This talk explores how participating in civic hacking can benefit your career while making a positive community impact. Through personal experiences with Marta Hackathons, AT&T C3 Hackathons, Civic Hack Nights, and Atl Thinks competitions, the speaker demonstrates how donating time and talent led to improved development and project management skills, networking opportunities, and even charitable contributions of $40,000. Attendees will learn actionable strategies for leveraging civic hacking to enhance technical abilities, develop essential soft skills, expand professional networks, and strengthen their position in the job market.",
    date: "2025-04-29",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "The Historic Academy of Medicine",
    },
    type: "conference",
    tags: ["career", "processes", "open source", "civic hacking", "community"],
    links: {
      conferenceWebsite:
        "https://devopsdays.org/events/2025-atlanta/program/nerando-johnson",
      slides:
        "https://docs.google.com/presentation/d/1iNBtkU-Pjo3Mc2eJkg0kJhGBidJQnfQcCXhsge34evM/edit?usp=sharing",
      //  "article": "https://docs.google.com/document/d/1T7ARvjankHuevPGI-wAbhIJByBCe2ATLgaYIChLJElA/edit?usp=sharing"
    },
  },
  {
    id: "orlando-code-camp-2025",
    title: "Skills to Bills: A User's Guide to Demonstrated Competency",
    name: "Orlando Code Camp 2025",
    description:
      "This session focuses on bridging technical competence and professional confidence by teaching developers how to effectively demonstrate and communicate their skills through building solutions, sharing knowledge, and presenting work. The practical framework includes speaking about experiences, building projects both at work and elsewhere, sharing expertise through social media, and managing impostor syndrome. By the end of the session, participants will have practical strategies to confidently discuss their work and prove their capabilities as developers.",
    date: "2025-04-05",
    location: {
      city: "Sanford",
      state: "FL",
      country: "USA",
      venue: "Seminole State College",
    },
    type: "conference",
    tags: [
      "career",
      "business skills",
      "processes",
      "open source",
      "programming",
    ],
    links: {
      conferenceWebsite: "https://www.orlandocodecamp.com/",
      slides:
        "https://docs.google.com/presentation/d/1mdNezbEijULPhPelJmvDE3AtcvK41SC8jbemL9hPgiI/edit?usp=sharing",
    },
  },
  {
    id: "orlando-code-camp-2024",
    title: "This is a Technical Talk : Essential People Skills for Developers",
    name: "Demo Name",
    description:
      "This session focuses on bridging technical competence and professional confidence by teaching developers how to effectively demonstrate and communicate their skills through building solutions, sharing knowledge, and presenting work. The practical framework includes speaking about experiences, building projects both at work and elsewhere, sharing expertise through social media, and managing impostor syndrome. By the end of the session, participants will have practical strategies to confidently discuss their work and prove their capabilities as developers.",
    date: "2025-04-05",
    location: {
      city: "Sanford",
      state: "FL",
      country: "USA",
      venue: "Seminole State College",
    },
    type: "conference",
    tags: [
      "career",
      "business skills",
      "processes",
      "open source",
      "programming",
    ],
    links: {
      conferenceWebsite: "https://www.orlandocodecamp.com/",
      slides:
        "https://docs.google.com/presentation/d/1mdNezbEijULPhPelJmvDE3AtcvK41SC8jbemL9hPgiI/edit?usp=sharing",
      // "github": "https://github.com/username/react-ts-guide"
    },
  },
  // {
  //   id: "reactfest-2025",
  //   title: "Building Scalable Applications with React and TypeScript",
  //   description:
  //     "Join us to learn best practices for building scalable and maintainable applications using React and TypeScript. This talk will focus on type safety, architectural patterns, and tools that enhance development speed and reliability.",
  //   date: "2025-04-10",
  //   location: {
  //     city: "New York",
  //     state: "NY",
  //     country: "USA",
  //     venue: "Jacob K. Javits Convention Center",
  //   },
  //   type: "conference",
  //   tags: ["react", "typescript", "scalability"],
  //   links: {
  //     conferenceWebsite: "https://2025.reactfest.com/session/78910",
  //     slides: "https://speakerdeck.com/username/react-typescript",
  //     github: "https://github.com/username/react-ts-guide",
  //   },
  // },
 
  {
    id: "connecttech-2024",
    title: "ConnectTech 2024 - How to Conference : A User Guide",
    description:
      "Tech conferences can feel overwhelming for introverts, but they're essential for career growth and skill development. Our guide shows you how to navigate these events effectively, from packing strategies to finding quiet spaces for recharging. Learn practical strategies for navigating professional events, from preparing effectively to maximizing networking opportunities while maintaining your energy levels.",
    date: "2024-10-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center",
    },
    type: "conference",
    tags: [
      "career growth",
      "skill development",
      "conferences",
      "soft skills",
      "career development",
      "networking",
    ],
    links: {
      // video: "https://example.com/conference2022/video",
      // article: "https://example.com/conference2022/article",
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://speakerdeck.com/username/how-to-conference",
      github: "https://github.com/username/conference-guide",
    },
  },
  {
    id: "connecttech-2023",
    title:
      "ConnectTech 2023 - This is Technical Talk - Essential People Skills for Developers",
    description:
      "Essential interpersonal skills are just as crucial as technical expertise in software development. This guide explores seven fundamental areas including communication, teamwork, and leadership, providing practical strategies to enhance each skill. Learn how to boost your effectiveness as a developer through actionable tips for better problem-solving, time management, and innovation. Tech conferences can feel overwhelming for introverts, but they're essential for career growth and skill development.",
    date: "2023-10-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center",
    },
    type: "conference",
    tags: [
      "interpersonal skills",
      "communication",
      "teamwork",
      "leadership",
      "problem-solving",
      "time management",
      "innovation",
      "soft skills",
      "career development",
      "networking",
    ],
    links: {
      // video: "https://example.com/conference2022/video",
      // article: "https://example.com/conference2022/article",
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://speakerdeck.com/username/how-to-conference",
      github: "https://github.com/username/conference-guide",
    },
  },
  // {
  //   id: "skills-to-bills-2025",
  //   title: "Skills to Bills: A Users Guide to Demonstrated Competency",
  //   description: "In today's tech environment and job market, one needs to be able to discuss how to build solutions to resolve business problems and articulate the 'why' and 'how' behind one's choices. This session focuses on bridging the gap between technical competence and professional confidence by showcasing how to present your work effectively, share your knowledge, and solidify your standing as a capable developer.",
  //   date: "2025-03-15",
  //   location: {
  //     city: "Charlotte",
  //     state: "NC",
  //     country: "USA",
  //     venue: "Carolina Code Conference"
  //   },
  //   type: "conference",
  //   tags: ["career-development", "professional-growth", "imposter-syndrome", "communication"],
  //   links: {
  //     conferenceWebsite: "https://carolina.codes",
  //     slides: "https://speakerdeck.com/nerajno/skills-to-bills-competency-guide",
  //     github: "https://github.com/nerajno/skills-to-bills-resources"
  //   }
  // },
  {
    id: "how-to-conference-2025",
    title: "How to Conference: A User Guide",
    description: "Are you an introvert who dreads large gatherings? This session explores strategies for introverts to make the most of conferences and user groups without exhausting themselves. Learn what to bring, effective learning methods, and techniques for finding essential breaks to recharge while maximizing your conference experience.",
    date: "2025-04-23",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["networking", "introvert-strategies", "conference-tips", "professional-development"],
    links: {
      conferenceWebsite: "https://devnexus.com/",
      slides: "https://speakerdeck.com/nerajno/how-to-conference-guide",
      github: "https://github.com/nerajno/conference-survival-kit"
    }
  },
  {
    id: "engineers-guide-socialization-2024",
    title: "The Engineer's Guide to Socialization: DB Associations as Networking Patterns",
    description: "This talk reimagines professional networking through the familiar lens of database associations, making relationship-building more approachable for developers. By mapping Rails/db associations to networking scenarios, we'll transform technical knowledge into effective social strategies including belongs_to, has_many through, and has_and_belongs_to_many patterns.",
    date: "2024-10-17",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia Tech Research Institute Conference Center"
    },
    type: "conference",
    tags: ["networking", "database-associations", "rails", "social-skills", "professional-development"],
    links: {
      conferenceWebsite: "https://2024.connect.tech",
      slides: "https://speakerdeck.com/nerajno/engineers-guide-to-socialization",
      github: "https://github.com/nerajno/networking-patterns-guide"
    }
  },
  {
    id: "technical-people-skills-2024",
    title: "This is Technical Talk - Essential People Skills for Developers",
    description: "In the tech industry, we often focus heavily on technical abilities while undervaluing crucial 'soft skills'. This talk delves into nine fundamental people skills essential for thriving in software engineering: communication, collaboration, problem-solving, time management, adaptability, creativity, attention to detail, interpersonal skills, and leadership.",
    date: "2024-04-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center",
    },
    type: "conference",
    tags: ["soft-skills", "communication", "leadership", "collaboration", "career-development"],
    links: {
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      //slides: "https://speakerdeck.com/username/how-to-conference",
      //github: "https://github.com/username/conference-guide",
    },
  },
  {
    id: "open-source-civic-hacking-2024",
    title: "Unlocked: Growing Your Skills Through Open Source Development And Civic Hacking",
    description: "As a developer, there are many ways to grow your career beyond tutorials and books. This talk explores two powerful paths: contributing to open-source projects and civic hacking. Learn the who, what, and how of open source contributions, and discover civic hacking's basic tenets: do what you can, where you can, with what you've got.",
    date: "2024-03-28",
    location: {
      city: "Orlando",
      state: "FL",
      country: "USA",
      venue: "Seminole State College"
    },
    type: "conference",
    tags: ["open-source", "civic-hacking", "community", "skill-development", "career-growth"],
    links: {
      conferenceWebsite: "https://orlandocodecamp.com/",
      slides: "https://speakerdeck.com/nerajno/open-source-civic-hacking-growth",
      github: "https://github.com/nerajno/open-source-civic-resources"
    }
  },
  {
    id: "javascript-foundations-vue-2025",
    title: "Back to Basics: Essential JavaScript Foundations for Modern Framework Development",
    description: "In an era where AI and tech influencers promote jumping directly into frameworks, this talk emphasizes mastering JavaScript fundamentals before diving into frameworks like Vue.js. Through practical demonstrations, we'll explore how core JavaScript concepts directly map to modern framework features, using Vue 3 as our primary example.",
    date: "2025-02-20",
    location: {
      city: "Charlotte",
      state: "NC",
      country: "USA",
      venue: "Carolina Code Conference"
    },
    type: "conference",
    tags: ["javascript", "vue", "fundamentals", "framework-development", "best-practices"],
    links: {
      conferenceWebsite: "https://carolina.codes",
      slides: "https://speakerdeck.com/nerajno/javascript-foundations-vue",
      github: "https://github.com/nerajno/js-fundamentals-vue",
      blog: "https://dev.to/nerajno/11-javascript-fundamentals-for-vue-developers-42a1"
    }
  },
  {
    id: "mentorship-guide-2022",
    title: "How !To Be Mentored",
    description: "How does one get the best out of a mentorship while providing value to both mentee and mentor? This talk provides actionable steps from wins and losses based on experience in a learn-to-code mentorship group, covering value propositions, relationship fundamentals, time management, and dealing with challenges.",
    date: "2022-10-19",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia Tech Research Institute Conference Center"
    },
    type: "conference",
    tags: ["mentorship", "career-development", "learning", "relationship-building", "professional-growth"],
    links: {
      conferenceWebsite: "https://connect.tech",
      slides: "https://speakerdeck.com/nerajno/how-to-be-mentored",
      github: "https://github.com/nerajno/mentorship-guide"
    }
  },
  {
    id: "civic-hacking-benefits-2022",
    title: "Social Goodness || Civic Hacking - What's in it for me?",
    description: "Giving away time and talent for free - how do you benefit from civic hacking? This talk explores concrete benefits of joining local civic hacking communities, using examples from Marta Hackathons, AT&T C3 Hackathons, and other civic events. Learn how civic hacking helps grow soft skills, technical skills, networking, and job hunting capabilities.",
    date: "2022-09-15",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Atlanta Developers' Conference"
    },
    type: "conference",
    tags: ["civic-hacking", "community-service", "skill-development", "networking", "social-impact"],
    links: {
      conferenceWebsite: "https://www.atldevcon.com/",
      slides: "https://speakerdeck.com/nerajno/civic-hacking-benefits",
      github: "https://github.com/nerajno/civic-hacking-resources"
    }
  }
];
