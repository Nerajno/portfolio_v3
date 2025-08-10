export interface SpeakingEvent {
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
    type: 'conference' | 'workshop' | 'meetup' | 'webinar' | 'lightning-talk';
    tags?: string[];
  }

  export interface ProcessedEvent extends SpeakingEvent {
    status: 'upcoming' | 'past';
  }

  export interface Podcast {
    id: string;
    title: string;
    host: string;
    description: string;
    date: string;
    url: string;
    tags?: string[];
    imageUrl?: string;
    imageAlt?: string;
  }

  export interface ProcessedPodcast extends Podcast {
    status: 'upcoming' | 'past';
  }
