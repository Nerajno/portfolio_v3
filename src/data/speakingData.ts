
interface SpeakingEvent {
  id: string;
  title: string;
  description: string;
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
  type: 'conference' | 'workshop' | 'meetup' | 'webinar';
  tags?: string[];
}

export const speakingData: SpeakingEvent[] = [

  {
    "id": "carolina-code-conference-2025",
    "title": "And It Was Written ~ An Introspective in the Importance of ReadMes.",
    "description": "You've created the perfect solution, but it's useless without proper documentation. In our open-source-driven world, countless powerful tools sit unused because developers skip the documentation step. This creates a critical gap as software becomes increasingly dependent on open-source components. Learn practical tips, templates, and strategies to transform your documentation from afterthought to essential craft. Drawing from experience as both science educator and full-stack developer, discover why clear documentation isn't just helpful—it's the bridge between brilliant code and actual impact.",
    "date": "2025-08-15",
    "location": {
      "city": "Greenville",
      "state": "South Carolina",
      "country": "USA",
      "venue": "Flywheel"
    },
    "type": "conference",
    "tags": ["learning","polyglot","open source"],
    "links": {
      "conferenceWebsite": "https://blog.carolina.codes/",
      // "slides": "https://docs.google.com/presentation/d/1X90GRVrInlTx22y8j7fUk1UcMAXiCCFO/edit?usp=sharing&ouid=101977102167064448578&rtpof=true&sd=true",
       //"github": "https://github.com/username/react-ts-guide"
    }
  },
  {
    "id": "devopsdays-atlanta-2025",
    "title": "Social Goodness || Civic Hacking - What's in it for me?",
    "description": "This talk explores how participating in civic hacking can benefit your career while making a positive community impact. Through personal experiences with Marta Hackathons, AT&T C3 Hackathons, Civic Hack Nights, and Atl Thinks competitions, the speaker demonstrates how donating time and talent led to improved development and project management skills, networking opportunities, and even charitable contributions of $40,000. Attendees will learn actionable strategies for leveraging civic hacking to enhance technical abilities, develop essential soft skills, expand professional networks, and strengthen their position in the job market.",
    "date": "2025-04-29",
    "location": {
      "city": "Atlanta",
      "state": "GA",
      "country": "USA",
      "venue": "The Historic Academny of Medicine"
    },
    "type": "conference",
    "tags": ["career","processes","open source","civic hacking", "community"],
    "links": {
      "conferenceWebsite": "https://devopsdays.org/events/2025-atlanta/program/nerando-johnson",
       "slides": "https://docs.google.com/presentation/d/1iNBtkU-Pjo3Mc2eJkg0kJhGBidJQnfQcCXhsge34evM/edit?usp=sharing",
       "article": "https://docs.google.com/document/d/1T7ARvjankHuevPGI-wAbhIJByBCe2ATLgaYIChLJElA/edit?usp=sharing"
    }
  },
  {
    "id": "orlando-code-camp-2025",
    "title": "Skills to Bills: A Users Guide to Demonstrated Competency",
    "description": "This session focuses on bridging technical competence and professional confidence by teaching developers how to effectively demonstrate and communicate their skills through building solutions, sharing knowledge, and presenting work. The practical framework includes speaking about experiences, building projects both at work and elsewhere, sharing expertise through social media, and managing impostor syndrome. By the end of the session, participants will have practical strategies to confidently discuss their work and prove their capabilities as developers.",
    "date": "2025-04-05",
    "location": {
      "city": "Sanford",
      "state": "FL",
      "country": "USA",
      "venue": "Seminole State College"
    },
    "type": "conference",
    "tags": ["career", "business skills", "processes", "open source"],
    "links": {
      "conferenceWebsite": "https://www.orlandocodecamp.com/",
      // "slides": "https://speakerdeck.com/username/react-typescript",
      // "github": "https://github.com/username/react-ts-guide"
    }
  },
  {
    "id": "dev-summit-2025",
    "title": "Mastering Frontend Performance Optimization",
    "description": "Discover techniques to optimize frontend performance for modern web applications. This session will cover strategies to improve load times, reduce render blocking resources, and utilize caching effectively, ensuring faster, smoother user experiences.",
    "date": "2025-04-05",
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "USA",
      "venue": "Moscone Center"
    },
    "type": "conference",
    "tags": ["frontend", "performance", "web optimization"],
    "links": {
      "conferenceWebsite": "https://2025.dev-summit.com/session/12345",
      "slides": "https://speakerdeck.com/username/frontend-performance",
      "github": "https://github.com/username/frontend-optimization"
    }
  },
  {
    "id": "reactfest-2025",
    "title": "Building Scalable Applications with React and TypeScript",
    "description": "Join us to learn best practices for building scalable and maintainable applications using React and TypeScript. This talk will focus on type safety, architectural patterns, and tools that enhance development speed and reliability.",
    "date": "2025-04-10",
    "location": {
      "city": "New York",
      "state": "NY",
      "country": "USA",
      "venue": "Jacob K. Javits Convention Center"
    },
    "type": "conference",
    "tags": ["react", "typescript", "scalability"],
    "links": {
      "conferenceWebsite": "https://2025.reactfest.com/session/78910",
      "slides": "https://speakerdeck.com/username/react-typescript",
      "github": "https://github.com/username/react-ts-guide"
    }
  },
  {
    id: "connecttech-2024",
    title: "How to Conference: A User Guide",
    description: `Tech conferences can feel overwhelming for introverts, but they're essential
      for career growth and skill development. Learn practical strategies for navigating
      professional events, from preparing effectively to maximizing networking opportunities
      while maintaining your energy levels.`,
    date: "2024-10-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["soft skills", "career development", "networking"],
    links: {
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://speakerdeck.com/username/how-to-conference",
      github: "https://github.com/username/conference-guide"
    }
  },
  {
    id: "connecttech-2023",
    title: "How to Conference: A User Guide Other",
    description: `Tech conferences can feel overwhelming for introverts, but they're essential
      for career growth and skill development. Learn practical strategies for navigating
      professional events, from preparing effectively to maximizing networking opportunities
      while maintaining your energy levels.`,
    date: "2023-10-10",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["soft skills", "career development", "networking"],
    links: {
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://speakerdeck.com/username/how-to-conference",
      github: "https://github.com/username/conference-guide"
    }
  },
];
