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
    sessionize?: string;
    sessionPage?: string; // Direct link to the specific session page
  };
  type: "conference" | "workshop" | "meetup" | "webinar" | "lightning-talk";
  tags?: string[];
  image?: string; // SEO image for event
  seoDescription?: string; // SEO meta description for event
  duration?: string; // e.g., "45 min", "60 min", "Lightning talk (10 min)"
}

export const speakingData: SpeakingEvent[] = [
  {
    id: "nebraska-code-2026",
    title: "Skills to Bills: A Users Guide to Demonstrated Competency",
    name: "Nebraska.Code() 2026",
    description: "Knowing your craft is only half the battle — being able to prove it is what moves your career forward. This talk walks through the four pillars of demonstrated competence: sharing your experience, building proof of work, amplifying it publicly, and silencing the imposter syndrome that holds you back. You'll leave with a repeatable framework for confidently presenting your skills in any room.",
    date: "2026-07-22",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Nebraska.Code() 2026 – Upcoming conference talk by Nerando Johnson in Lincoln, Nebraska.",
    location: {
      city: "Lincoln",
      state: "Nebraska",
      country: "USA",
      venue: "Cornhusker Marriott Hotel"
    },
    type: "conference",
    tags: ["upcoming", "career", "professional-development", "competency", "imposter-syndrome"],
    duration: "60 min",
    links: {
      conferenceWebsite: "https://nebraskacode.amegala.com",
      sessionize: "https://sessionize.com/Nerajno"
    }
  },
  {
    id: "devnexus-2026",
    title: "The Engineer's Guide to Socialization",
    name: "DevNexus 2026",
    description: "Professional networking through the familiar lens of database associations, making relationship-building more approachable for developers. This talk reimagines networking patterns using technical concepts developers already know, transforming database association knowledge into effective social strategies.",
    date: "2026-03-04",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "DevNexus 2026 – Atlanta's home conference for developers. Upcoming conference talk by Nerando Johnson.",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["upcoming", "networking", "soft-skills", "professional-development", "database-associations"],
    duration: "45 min",
    links: {
      conferenceWebsite: "https://devnexus.com",
      sessionize: "https://sessionize.com/Nerajno"
    }
  },
  {
    id: "orlando-code-camp-2026",
    title: "This is a Technical Talk - Essential People Skills for Developers",
    name: "Orlando Code Camp 2026",
    description: "This will be the third consecutive year presenting at Orlando Code Camp (2024, 2025, 2026). In an industry that overvalues technical ability and undervalues everything else, essential people skills are the hidden multiplier on your career. This talk covers nine fundamentals — from communication and collaboration to leadership and adaptability — with practical, real-world examples and one actionable step per skill you can apply immediately.",
    date: "2026-04-11",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Orlando Code Camp 2026 – Third consecutive year speaking at OCC. Upcoming conference talk by Nerando Johnson in Sanford, Florida.",
    location: {
      city: "Sanford",
      state: "FL",
      country: "USA",
      venue: "Seminole State College"
    },
    type: "conference",
    tags: ["upcoming", "people-skills", "communication", "leadership", "soft-skills", "career-development"],
    duration: "60 min",
    links: {
      conferenceWebsite: "https://orlandocodecamp.com",
      sessionize: "https://sessionize.com/Nerajno"
    }
  },
    {
    "id": "ajug-2025-lightning-talk",
    "title": "Title: How Do I Build a Lightning Talk?",
    "name": "AJUG November Meetup 2025",
    "description": "The how and why of creating effective lightning talks for technical audiences.",
    "date": "2025-11-18",
    "image": "/images/other_images/Speaker_me.jpeg",
    "seoDescription": "Walk before you run: Essential tips for crafting compelling lightning talks for technical audiences at AJUG November meetup.",
    "location": {
      "city": "Sandy Springs",
      "state": "Georgia",
      "country": "USA",
      "venue": "Roam - Dunwoody"
    },
    "type": "meetup",
    "tags": ["career"," communication" ,"software development"],
    "links": {
      "conferenceWebsite": "https://www.meetup.com/atlantajug/events/311862222/?eventOrigin=your_events",
       //"sessionPage": "https://www.atldevcon.com/sessions",
      //"article": "https://dev.to/nerajno/11-javascript-fundamentals-for-vue-developers-42a1"
    }
  },
  {
    "id": "atldevcon-2025",
    "title": "Back to Basics: Essential JavaScript Foundations for Modern Framework Development",
    "name": "ATL DevCon 2025",
    "description": "In an era where AI and tech influencers often promote jumping directly into framework development, this talk emphasizes the critical importance of mastering JavaScript fundamentals before diving into frameworks like Vue.js. Drawing from real-world experience transitioning into Vue 3 development, we'll explore why solid JavaScript foundations are crucial for effective framework usage. Through practical demonstrations and real-world examples, we'll examine how core JavaScript concepts directly map to modern framework features, using Vue 3 as our primary example. This session will help developers understand why 'learning to walk before running' in JavaScript is essential for long-term success in framework development.",
    "date": "2025-10-11",
    "image": "/images/other_images/Speaker_me.jpeg",
    "seoDescription": "ATL DevCon 2025 – Master JavaScript fundamentals before diving into modern frameworks with Nerando Johnson's back-to-basics approach.",
    "location": {
      "city": "Atlanta",
      "state": "Georgia",
      "country": "USA",
      "venue": "Kennesaw State University – Marietta Campus"
    },
    "type": "conference",
    "tags": ["javascript", "vue.js", "fundamentals", "frameworks", "software development"],
    "links": {
      "conferenceWebsite": "https://www.atldevcon.com/",
       //"sessionPage": "https://www.atldevcon.com/sessions",
      "article": "https://dev.to/nerajno/11-javascript-fundamentals-for-vue-developers-42a1"
    }
  },
  {
    id: "magnolia-2025",
    title: "Negotiation is the Key... A Little Violence and Ice-Cream ",
    name: "Magnolia Conf 2025",
    description:
      "Every developer has a graveyard of abandoned side projects—brilliant ideas that died in the planning phase or halfway through execution. But what if the secret to successful side projects isn't better time management or more motivation? What if it's learning to negotiate with yourself, your scope, and reality itself?",
    date: "2025-10-22",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Magnolia Conf 2025 – Learn how negotiation, scope, and reality shape successful side projects with Nerando Johnson.",
    location: {
      city: "Jackson",
      state: "Mississippi",
      country: "USA",
      venue: "Mississippi Museum of Art in Jackson, MS",
    },
    type: "conference",
    tags: ["learning", "polyglot", "open source", "software development", "side projects"],
    links: {
      conferenceWebsite: "https://2025.magnoliaconf.com/",
      slides: "https://docs.google.com/presentation/d/1pWsdL-b0k11AXjYuGE_4LzKoELHXHFBLHk6gF308pp0/edit?usp=sharing",
      article: "https://developingdvlpr.com/blog/start-with-the-end-in-mind-developers-side-project-survival-guide/"
    },
  },
  {
    id: "carolina-code-conference-2025", // Completed
    title:
      "And It Was Written ~ An Introspective in the Importance of ReadMes.",
    name: "Carolina Codes 2025",
    description:
      "You've created the perfect solution, but it's useless without proper documentation. In our open-source-driven world, countless powerful tools sit unused because developers skip the documentation step. This creates a critical gap as software becomes increasingly dependent on open-source components. Learn practical tips, templates, and strategies to transform your documentation from afterthought to essential craft. Drawing from experience as both science educator and full-stack developer, discover why clear documentation isn't just helpful—it's the bridge between brilliant code and actual impact.",
    date: "2025-08-01",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Carolina Codes 2025 – The importance of documentation and ReadMes in open source, with Nerando Johnson.",
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
      slides: "https://docs.google.com/presentation/d/1kApJFrA2JIRtAUpU098jnpQmfmY3vVKz/edit?usp=drive_link&ouid=101977102167064448578&rtpof=true&sd=true",
      article: "https://developingdvlpr.com/blog/and-it-was-written/",
      video: "https://youtu.be/Y6uvmibXZww?si=IHoUv0DOPLDunWkr"
    },
  },
  {
    id: "devopsdays-atlanta-2025", // Completed
    title: "Social Goodness || Civic Hacking - What's in it for me?",
    name: "DevOpsDays Atlanta 2025",
    description:
      "This talk explores how participating in civic hacking can benefit your career while making a positive community impact. Through personal experiences with Marta Hackathons, AT&T C3 Hackathons, Civic Hack Nights, and Atl Thinks competitions, the speaker demonstrates how donating time and talent led to improved development and project management skills, networking opportunities, and even charitable contributions of $40,000. Attendees will learn actionable strategies for leveraging civic hacking to enhance technical abilities, develop essential soft skills, expand professional networks, and strengthen their position in the job market.",
    date: "2025-04",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "DevOpsDays Atlanta 2025 – Civic hacking for career growth and community impact, with Nerando Johnson.",
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
    date: "2025-04",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Orlando Code Camp 2025 – Demonstrating developer competency and confidence, with Nerando Johnson.",
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
    id: "orlando-code-camp-2024", // Completed
    title: "This is a Technical Talk : Essential People Skills for Developers",
    name: "Orlando Code Camp 2024",
    description:
      "This session focuses on bridging technical competence and professional confidence by teaching developers how to effectively demonstrate and communicate their skills through building solutions, sharing knowledge, and presenting work. The practical framework includes speaking about experiences, building projects both at work and elsewhere, sharing expertise through social media, and managing impostor syndrome. By the end of the session, participants will have practical strategies to confidently discuss their work and prove their capabilities as developers.",
    date: "2025-02",
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Orlando Code Camp 2024 – Essential people skills for developers, with Nerando Johnson.",
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
    id: "connecttech-2024", // Completed
    title: "ConnectTech 2024 - How to Conference : A User Guide",
    name: "ConnectTech 2024",
    description:
      "Tech conferences can feel overwhelming for introverts, but they're essential for career growth and skill development. Our guide shows you how to navigate these events effectively, from packing strategies to finding quiet spaces for recharging. Learn practical strategies for navigating professional events, from preparing effectively to maximizing networking opportunities while maintaining your energy levels.",
    date: "2024-10",
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
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "ConnectTech 2024 – How to Conference: A user guide for introverts and professionals, with Nerando Johnson.",
    links: {
      video: "https://youtu.be/kpL0lGjem1I?si=lBnfUzyWqmrGtZti",
      article: "https://developingdvlpr.com/blog/so-this-is-your-1st-tech-conference-attendeeedition/",
      conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://docs.google.com/presentation/d/1tRRaXgrrNVmvxTMSK5UGp88FKgjNkmH2tOc-YO-A8t4/edit?usp=sharing",

    },
  },
  {
    id: "connecttech-2023",
    title:
      "ConnectTech 2023 - This is a Technical Talk - Essential People Skills for Developers",
    name: "Connect Tech 2023",
    description:
      "Essential interpersonal skills are just as crucial as technical expertise in software development. This guide explores seven fundamental areas including communication, teamwork, and leadership, providing practical strategies to enhance each skill. Learn how to boost your effectiveness as a developer through actionable tips for better problem-solving, time management, and innovation. Tech conferences can feel overwhelming for introverts, but they're essential for career growth and skill development.",
    date: "2023-10",
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
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "ConnectTech 2023 – Essential people skills for developers, teamwork, and leadership, with Nerando Johnson.",
    links: {
      // article: "https://docs.google.com/document/d/1XxG_0rrPMQ36jMd38_KEA-2rFxu6fiy4DP_3W1Opd9E/edit?usp=sharing",
      // conferenceWebsite: "https://2024.connect.tech/session/699563",
      slides: "https://docs.google.com/presentation/d/1rT8VJxNuwlWOr-z3Vs9O7h8bet37IkvZlK0NedyeBzg/edit?usp=sharing",

    },
  },
    // {
  //   id: "skills-to-bills-2025",
  //   title: "Skills to Bills: A Users Guide to Demonstrated Competency",
  //    name:
  //   description: "In today's tech environment and job market, one needs to be able to discuss how to build solutions to resolve business problems and articulate the 'why' and 'how' behind one's choices. This session focuses on bridging the gap between technical competence and professional confidence by showcasing how to present your work effectively, share your knowledge, and solidify your standing as a capable developer.",
  //   date: "2025-03",
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
  // {
  //   id: "how-to-conference-2025",
  //   title: "How to Conference: A User Guide",
  //   name: "How to Conf 2025",
  //   description: "Are you an introvert who dreads large gatherings? This session explores strategies for introverts to make the most of conferences and user groups without exhausting themselves. Learn what to bring, effective learning methods, and techniques for finding essential breaks to recharge while maximizing your conference experience.",
  //   date: "2025-04-23",
  //   location: {
  //     city: "Atlanta",
  //     state: "GA",
  //     country: "USA",
  //     venue: "Georgia World Congress Center"
  //   },
  //   type: "conference",
  //   tags: ["networking", "introvert-strategies", "conference-tips", "professional-development"],
  //   links: {
  //     conferenceWebsite: "https://devnexus.com/",
  //     slides: "https://speakerdeck.com/nerajno/how-to-conference-guide",
  //     github: "https://github.com/nerajno/conference-survival-kit"
  //   }
  // },
  {
    id: "engineers-guide-socialization-2024", // Completed
    title: "The Engineer's Guide to Socialization: DB Associations as Networking Patterns",
    name: "Modern Web Meetup",
    description: "This talk reimagines professional networking through the familiar lens of database associations, making relationship-building more approachable for developers. By mapping Rails/db associations to networking scenarios, we'll transform technical knowledge into effective social strategies including belongs_to, has_many through, and has_and_belongs_to_many patterns.",
    date: "2024-12-17",
    location: {
      city: "Alpharetta",
      state: "GA",
      country: "USA",
      venue: "Improving"
    },
    type: "meetup",
    tags: ["networking", "database-associations", "rails", "social-skills", "professional-development"],
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Modern Web Meetup – Networking for developers using database association patterns, with Nerando Johnson.",
    links: {
      slides: "https://www.canva.com/design/DAGWCVHbFGs/lLD9CiNNkwHPwsYn20MtzA/view?utm_content=DAGWCVHbFGs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h91978a8905",
    }
  },
  // {
  //   id: "technical-people-skills-2024", // In-Complete
  //   title: "This is aTechnical Talk - Essential People Skills for Developers",
  //   name: "Connect Tech 2024",
  //   description: "In the tech industry, we often focus heavily on technical abilities while undervaluing crucial 'soft skills'. This talk delves into nine fundamental people skills essential for thriving in software engineering: communication, collaboration, problem-solving, time management, adaptability, creativity, attention to detail, interpersonal skills, and leadership.",
  //   date: "2024-04-10",
  //   location: {
  //     city: "Atlanta",
  //     state: "GA",
  //     country: "USA",
  //     venue: "Georgia World Congress Center",
  //   },
  //   type: "conference",
  //   tags: ["soft-skills", "communication", "leadership", "collaboration", "career-development"],
  //   links: {
  //     conferenceWebsite: "https://2024.connect.tech/session/699563",
  //     //slides: "https://speakerdeck.com/username/how-to-conference",
  //     //github: "https://github.com/username/conference-guide",
  //   },
  // },
  {
    id: "open-source-civic-hacking-2024", // Complete && Not-Checked
    title: "Unlocked: Growing Your Skills Through Open Source Development And Civic Hacking",
    name: "Orlando Code Camp 2024",
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
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Orlando Code Camp 2024 – Growing your skills through open source and civic hacking, with Nerando Johnson.",
    links: {
      conferenceWebsite: "https://orlandocodecamp.com/",
      slides: "https://speakerdeck.com/nerajno/open-source-civic-hacking-growth",
      github: "https://github.com/nerajno/open-source-civic-resources"
    }
  },
  {
    id: "javascript-foundations-2025",
    title: "Back to Basics: Essential JavaScript Foundations for Modern Framework Development",
    description: "In an era where AI and tech influencers promote jumping directly into frameworks, this talk emphasizes mastering JavaScript fundamentals before diving into frameworks like Vue.js. Through practical demonstrations, we'll explore how core JavaScript concepts directly map to modern framework features, using Vue 3 as our primary example.",
    date: "2025-03",
    name: "200OK Developer Conference",
    location: {
      city: "Tulsa",
      state: "Ok",
      country: "USA",
      venue: "200OK Developer Conference"
    },
    type: "conference",
    tags: ["javascript", "vue", "fundamentals", "framework-development", "best-practices"],
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "200OK Developer Conference – JavaScript fundamentals for modern frameworks, with Nerando Johnson.",
    links: {
      conferenceWebsite: "https://200ok.us/#speakers",
      slides: "https://docs.google.com/presentation/d/1X90GRVrInlTx22y8j7fUk1UcMAXiCCFO/edit?usp=sharing&ouid=101977102167064448578&rtpof=true&sd=true",
      github: "https://github.com/nerajno/js-fundamentals-vue",
      article: "https://dev.to/nerajno/11-javascript-fundamentals-for-vue-developers-42a1",
    }
  },
  {
    id: "mentorship-guide-2022", // In-Complete && Not Checked
    title: "How !To Be Mentored",
    name: "Connect Tech 2022",
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
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Connect Tech 2022 – How to get the most out of mentorship, with Nerando Johnson.",
    links: {
      conferenceWebsite: "https://connect.tech",
      slides: "https://speakerdeck.com/nerajno/how-to-be-mentored",
      github: "https://github.com/nerajno/mentorship-guide"
    }
  },
  {
    id: "mentorship-guide-2025", // In-Complete && Not Checked
    title: "How !To Be Mentored",
    name: "DevNexus 2025",
    description: "How does one get the best out of a mentorship while providing value to both mentee and mentor? This talk provides actionable steps from wins and losses based on experience in a learn-to-code mentorship group, covering value propositions, relationship fundamentals, time management, and dealing with challenges.",
    date: "2025-03",
    location: {
      city: "Atlanta",
      state: "GA",
      country: "USA",
      venue: "Georgia World Congress Center"
    },
    type: "conference",
    tags: ["mentorship", "career-development", "learning", "relationship-building", "professional-growth"],
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "DevNexus 2025 – Actionable steps for successful mentorship, with Nerando Johnson.",
    links: {
      // conferenceWebsite: "https://connect.tech",
      slides: "https://docs.google.com/presentation/d/1Iub1WcR4MG4_iedUAfKpTM-VIpSrnDvGGMU0pthWELw/edit?usp=sharing",
      // github: "https://github.com/nerajno/mentorship-guide"
    }
  },
  {
    id: "atlanta-developers'-conference-2022", // Complete && Checked
    title: "Social Goodness || Civic Hacking - What's in it for me?",
    name: "Atlanta Developers' Conference 2022",
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
    image: "/images/other_images/Speaker_me.jpeg",
    seoDescription: "Atlanta Developers' Conference 2022 – Civic hacking for skill and community growth, with Nerando Johnson.",
    links: {
      conferenceWebsite: "https://www.atldevcon.com/",
      slides: "https://speakerdeck.com/nerajno/civic-hacking-benefits",
      github: "https://github.com/nerajno/civic-hacking-resources"
    }
  }
];
