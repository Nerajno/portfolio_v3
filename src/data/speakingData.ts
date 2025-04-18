
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
    "tags": ["career","processes","open source"],
    "links": {
      "conferenceWebsite": "https://devopsdays.org/events/2025-atlanta/program/nerando-johnson",
       //"slides": "https://speakerdeck.com/username/react-typescript",
       //"github": "https://github.com/username/react-ts-guide"
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
       "slides": "https://docs.google.com/presentation/d/e/2PACX-1vRCL92RYxrjY1p0uIR0fCyPv92iXvtmwFLGhrvGyoByWYJiyRAaDyScOKO_cjfPaiWREBLMN-oraXtA/pub?start=false&loop=false&delayms=5000",
       "article": "https://vetswhocode.io/blogs/in-2025-just-having-a-portfolio-wont-cut-it-show-evidence-of-your-skills"
    }
  },
  {
    "id": "dev-nexus-2025",
    "title": "How Not To Be Mentored",
    "description": "To get the best out of mentorship in tech, both parties must understand their respective value propositions and set clear relationship foundations with explicit expectations and desired results. Effective mentorship requires thoughtful time and task management strategies, along with approaches for handling inevitable challenges. The relationship benefits from curated learning resources like recommended books, articles, and industry voices to follow. Proper structure and clear communication create mutually beneficial mentorship experiences where both mentee and mentor grow through their investment of time and energy.",
    "date": "2025-03-06",
    "location": {
      "city": "Atlanta",
      "state": "GA",
      "country": "USA",
      "venue": "Georgia World Congress Center"
    },
    "type": "conference",
    "tags": ["career growth", "mentoring", "tech leadership"],
    "links": {
      "conferenceWebsite": "https://devnexus.com/presentations/how-not-to-be-mentored",
      "slides": "https://docs.google.com/presentation/d/1Iub1WcR4MG4_iedUAfKpTM-VIpSrnDvGGMU0pthWELw/edit?usp=sharing",
      "article": "https://dev.to/nerajno/how-not-to-be-mentored-building-resilient-tech-careers-through-strategic-mentorship-19b8",
    }
  },
  {
    "id": "connecttech-2024",
    "title": "How to Conference : A User Guide",
    "description": "Introverts can successfully navigate tech conferences and user groups by implementing specific strategies to maximize learning while preventing social exhaustion. Essential tactics include preparing properly with necessary supplies, identifying optimal learning methods, and discovering strategic retreat locations for recharging during events. These gatherings offer invaluable opportunities for knowledge expansion, skill enhancement, and career advancement when approached with techniques tailored to your personal energy management style.",
    "date": "2024-11-19",
    "location": {
      "city": "Atlanta",
      "state": "GA",
      "country": "USA",
      "venue": "Cobb Galleria Centre"
    },
    "type": "conference",
    "tags": ["professional development", "growth", "career advancement"],
    "links": {
      "conferenceWebsite": "https://2025.reactfest.com/session/78910",
      "slides": "https://docs.google.com/presentation/d/1WKT9SPRZzNuJI2Pc7KwC1C0-5ALH_rTNqU5OnfJsSRE/edit?usp=sharing",
      "video": "https://youtu.be/kpL0lGjem1I?si=GnPOdvDKsSYHjsF1"
    }
  },
  {
    id: "connecttech-2024",
    title: "How to Conference: A User Guide",
    description: "Tech conferences can feel overwhelming for introverts, but they're essential for career growth and skill development. Learn practical strategies for navigating professional events, from preparing effectively to maximizing networking opportunities while maintaining your energy levels.",
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
      slides: "https://docs.google.com/presentation/d/1iFYwzgsNs2UNUHLQW4aUvhrdU8VHakJ6rsVnMJKVIUo/edit?usp=sharing",
      github: "https://github.com/username/conference-guide"
    }
  },
  {
    id: "connecttech-2023",
    title: "How to Conference: A User Guide Other",
    description: "Tech conferences can feel overwhelming for introverts, but they're essential for career growth and skill development. Learn practical strategies for navigating professional events, from preparing effectively to maximizing networking opportunities while maintaining your energy levels.",
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
