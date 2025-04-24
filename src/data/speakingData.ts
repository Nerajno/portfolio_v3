
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
    "id": "200-ok-2025",
    "title": "Back to Basics: Essential JavaScript Foundations for Modern Framework Development",
    "description": "In an era where AI and tech influencers often promote jumping directly into framework development, this talk emphasizes the critical importance of mastering JavaScript fundamentals before diving into frameworks like Vue.js. Drawing from real-world experience transitioning into Vue 3 development, we'll explore why solid JavaScript foundations are crucial for effective framework usage. Through practical demonstrations and real-world examples, we'll examine how core JavaScript concepts directly map to modern framework features, using Vue 3 as our primary example. This session will help developers understand why 'learning to walk before running' in JavaScript is essential for long-term success in framework development.",
    "date": "2025-06-23",
    "location": {
      "city": "Tulsa",
      "state": "Oklahoma",
      "country": "USA",
      "venue": "Atlas School"
    },
    "type": "conference",
    "tags": ["learning","JavaScript","foundamentals","open source"],
    "links": {
      "conferenceWebsite": "https://200ok.us/",
       //"slides": "https://speakerdeck.com/username/react-typescript",
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
    id: "orlando-code-camp-2024",
    title: "This is Technical Talk - Essential People Skills for Developers",
    description: "Beyond Code: The Human Skills Essential to Engineering Excellence - This presentation explores seven critical non-technical competencies that distinguish exceptional developers: communication, collaboration, problem-solving, time management, adaptability, attention to detail, and leadership. Drawing from industry experience, we examine how these 'human skills' significantly impact engineering outcomes and provide one immediately actionable technique for improvement in each area. Attendees will gain practical approaches to develop interpersonal capabilities that not only complement technical abilities but serve as force multipliers for career advancement and project success in today's complex development landscape.",
    date: "2024-02-24",
    location: {
      city: "Orlando",
      state: "FL",
      country: "USA",
      venue: "Seminole State College"
    },
    type: "conference",
    tags: ["soft skills", "career development", "networking", "leadership"],
    links: {
      conferenceWebsite: "https://www.orlandocodecamp.com/",
      //slides: "https://docs.google.com/presentation/d/1iFYwzgsNs2UNUHLQW4aUvhrdU8VHakJ6rsVnMJKVIUo/edit?usp=sharing",
      //github: "https://github.com/username/conference-guide"
    }
  },
  {
    id: "DevNexus-2024",
    title: "How to Conference: A User Guide Other || Con 101",
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
