// src/types.ts

export interface ProcessedEvent {
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
  image?: string;
  seoDescription?: string;
  status: 'upcoming' | 'past';
}