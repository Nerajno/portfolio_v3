// src/data/otherMediaData.ts

export interface MediaItem {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'podcast' | 'interview' | 'video' | 'workshop-recording' | 'panel-discussion';
    platform?: string;
    links: {
      primary?: string;
      secondary?: string;
      transcript?: string;
    };
    duration?: string; // For videos/podcasts
    host?: string; // For podcasts/interviews
    publication?: string; // For articles
    tags?: string[];
  }

  export const otherMediaData: MediaItem[] = [
    {
      id: "virtual-coffee-podcast-2024",
      title: "Building Community Through Code - Virtual Coffee Podcast",
      description: "Discussion about the importance of developer communities, mentorship, and creating inclusive spaces for learning. We explored how beginners can leverage community involvement for career growth.",
      date: "2024-06-15",
      type: "podcast",
      platform: "Virtual Coffee",
      host: "Dan Ott & Bekah Hawrot Weigel",
      duration: "45 min",
      links: {
        primary: "https://virtualcoffee.io/podcast",
      },
      tags: ["community", "mentorship", "career-growth"]
    },
    //format
    // {
    //   id: "nerando-johnson-how-to-conference-2025",
    //   title: "How to Conference: A User Guide",
    //   description: "Nerando Johnson shares practical tips and guidance for making the most of tech conferences, from preparation to networking at events.",
    //   date: "2025-01-02",
    //   type: "video",
    //   platform: "YouTube",
    //   duration: "30 min",
    //   links: {
    //     primary: "https://www.youtube.com/watch?v=kpL0lGjem1I"
    //   },
    //   tags: ["conference", "career", "networking"]
    // },
    {
      id: "virtual-coffee-lightning-talk-2021",
      title: "Lightning Talk: Leveraging Developer Community",
      description: "Nerando Johnson shares insights on participating in developer communities for learning and mentorship. Part of the Virtual Coffee Lightning Talks series.",
      date: "2021-10-18",
      type: "video",
      platform: "Virtual Coffee",
      duration: "12 min",
      links: {
        primary: "https://www.youtube.com/playlist?list=PLh9uT23TA65infGqUUaVibI0IssI0G6NY"
      },
      tags: ["community", "lightning-talk", "virtual-coffee"]
    },
    {
      id: "devto-featured-talk-2022",
      title: "Featured Dev.to Community Lightning Talk with Nerando Johnson",
      description: "Nerando shares lessons and experience as part of Dev.to's ongoing YouTube community events, focused on peer learning and open sharing.",
      date: "2022-06-05",
      type: "video",
      platform: "Dev.to YouTube",
      duration: "10 min",
      links: {
        primary: "https://www.youtube.com/@devto-community"
      },
      tags: ["devto", "community", "developer"]
    }
  ];
