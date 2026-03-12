import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import EventCard from '../../src/components/eventcard.astro'

describe('EventCard Component', () => {
  const mockEvent = {
    id: 'test-event',
    title: 'Test Conference Talk',
    description: 'A test description for the conference talk about testing.',
    name: 'Test Conference 2024',
    date: '2024-10-15',
    location: {
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      venue: 'Georgia Tech'
    },
    links: {
      conferenceWebsite: 'https://example.com',
      slides: 'https://slides.example.com',
      video: 'https://video.example.com',
      article: 'https://article.example.com'
    },
    status: 'upcoming',
    type: 'conference',
    tags: ['testing', 'ci-cd', 'quality'],
    duration: '45 min'
  }

  it('should render event title and description', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('Test Conference Talk')
    expect(result).toContain('A test description for the conference talk about testing.')
  })

  it('should render event name', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('Test Conference 2024')
  })

  it('should render location information', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('Georgia Tech')
    expect(result).toContain('Atlanta')
    expect(result).toContain('GA')
  })

  // Duration field has been removed from component
  it.skip('should render duration when provided', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('45 min')
  })

  it('should render all tags', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('testing')
    expect(result).toContain('ci-cd')
    expect(result).toContain('quality')
  })

  it('should render event type badge', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('conference')
  })

  it('should render status badge for upcoming events', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('Upcoming')
  })

  it('should render status badge for past events', async () => {
    const container = await AstroContainer.create()
    const pastEvent = { ...mockEvent, status: 'past' }
    const result = await container.renderToString(EventCard, {
      props: pastEvent
    })

    expect(result).toContain('Past')
  })

  it('should render links with correct labels', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('Event Details')
    expect(result).toContain('View Slides')
    expect(result).toContain('Watch Recording')
    expect(result).toContain('Read Article')
  })

  it('should not render sessionize link', async () => {
    const container = await AstroContainer.create()
    const eventWithSessionize = {
      ...mockEvent,
      links: {
        ...mockEvent.links,
        sessionize: 'https://sessionize.com/test'
      }
    }
    const result = await container.renderToString(EventCard, {
      props: eventWithSessionize
    })

    expect(result).not.toContain('Sessionize Profile')
    // Note: sessionize URL might appear in data attributes but not as a visible link
  })

  it('should include proper Tailwind classes for styling', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    // Check for key Tailwind classes
    expect(result).toContain('rounded-lg')
    expect(result).toContain('shadow')
    expect(result).toContain('dark:bg-slate-800')
  })

  it('should render links with target="_blank" and rel="noopener noreferrer"', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener noreferrer"')
  })

  it('should handle events without links gracefully', async () => {
    const container = await AstroContainer.create()
    const eventWithoutLinks = { ...mockEvent, links: {} }
    const result = await container.renderToString(EventCard, {
      props: eventWithoutLinks
    })

    expect(result).toContain('Test Conference Talk')
    expect(result).not.toContain('Event Details')
  })

  it('should handle events without tags gracefully', async () => {
    const container = await AstroContainer.create()
    const eventWithoutTags = { ...mockEvent, tags: undefined }
    const result = await container.renderToString(EventCard, {
      props: eventWithoutTags
    })

    expect(result).toContain('Test Conference Talk')
  })

  // Duration field no longer exists in component
  it.skip('should handle events without duration gracefully', async () => {
    const container = await AstroContainer.create()
    const eventWithoutDuration = { ...mockEvent, duration: undefined }
    const result = await container.renderToString(EventCard, {
      props: eventWithoutDuration
    })

    expect(result).toContain('Test Conference Talk')
    expect(result).not.toContain('45 min')
  })

  it('should render correct icon for conference type', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(EventCard, {
      props: mockEvent
    })

    expect(result).toContain('🎤')
  })

  it('should render correct icon for workshop type', async () => {
    const container = await AstroContainer.create()
    const workshop = { ...mockEvent, type: 'workshop' }
    const result = await container.renderToString(EventCard, {
      props: workshop
    })

    expect(result).toContain('💻')
  })

  it('should render correct icon for meetup type', async () => {
    const container = await AstroContainer.create()
    const meetup = { ...mockEvent, type: 'meetup' }
    const result = await container.renderToString(EventCard, {
      props: meetup
    })

    expect(result).toContain('👥')
  })
})
