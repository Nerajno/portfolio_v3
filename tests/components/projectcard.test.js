import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import ProjectCard from '../../src/components/projectcard.astro'

describe('ProjectCard Component', () => {
  const mockProject = {
    name: 'Test Portfolio Project',
    description: 'A comprehensive testing framework for Astro applications with Vitest and Playwright integration.',
    image: {
      src: '/test-project.jpg',
      alt: 'Test project screenshot'
    },
    status: 'Active',
    tags: ['Astro', 'Vitest', 'Testing', 'TypeScript'],
    github: 'https://github.com/test/project',
    website: 'https://test-project.com',
    caseStudyUrl: '/case-studies/test-project'
  }

  it('should render project name', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('Test Portfolio Project')
  })

  it('should render project description', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('A comprehensive testing framework for Astro applications')
  })

  it('should render project image with correct src and alt', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('src="/test-project.jpg"')
    expect(result).toContain('alt="Test project screenshot"')
  })

  it('should use placeholder image when image src is not provided', async () => {
    const container = await AstroContainer.create()
    const projectWithoutImage = {
      ...mockProject,
      image: { src: '', alt: 'Placeholder' }
    }
    const result = await container.renderToString(ProjectCard, {
      props: { project: projectWithoutImage }
    })

    expect(result).toContain('/placeholder.svg')
  })

  it('should render project status badge', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('Active')
    expect(result).toContain('bg-green-100')
    expect(result).toContain('text-green-800')
  })

  it('should render all project tags', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('Astro')
    expect(result).toContain('Vitest')
    expect(result).toContain('Testing')
    expect(result).toContain('TypeScript')
  })

  it('should render GitHub link with correct attributes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('https://github.com/test/project')
    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener noreferrer"')
    expect(result).toContain('Github Repo')
  })

  it('should render website link when provided', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('https://test-project.com')
    expect(result).toContain('Live Version')
  })

  it('should not render website link when not provided', async () => {
    const container = await AstroContainer.create()
    const projectWithoutWebsite = { ...mockProject, website: null }
    const result = await container.renderToString(ProjectCard, {
      props: { project: projectWithoutWebsite }
    })

    expect(result).not.toContain('Live Version')
  })

  it('should render case study link when provided', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('/case-studies/test-project')
    expect(result).toContain('Case Study')
  })

  it('should not render case study link when not provided', async () => {
    const container = await AstroContainer.create()
    const projectWithoutCaseStudy = { ...mockProject, caseStudyUrl: null }
    const result = await container.renderToString(ProjectCard, {
      props: { project: projectWithoutCaseStudy }
    })

    expect(result).not.toContain('Case Study')
  })

  it('should include proper Tailwind card styling', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('rounded-xl')
    expect(result).toContain('shadow-sm')
    expect(result).toContain('hover:shadow-lg')
    expect(result).toContain('dark:bg-gray-800')
  })

  it('should include hover effects on image', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('group-hover:scale-105')
    expect(result).toContain('transition-transform')
  })

  it('should have proper dark mode classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('dark:bg-gray-800')
    expect(result).toContain('dark:text-white')
    expect(result).toContain('dark:text-gray-300')
    expect(result).toContain('dark:border-gray-700')
  })

  it('should include GitHub icon SVG', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('<svg')
    expect(result).toContain('viewBox="0 0 24 24"')
  })

  it('should have proper button styling for links', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('rounded-lg')
    expect(result).toContain('hover:bg-gray-50')
    expect(result).toContain('dark:hover:bg-gray-700')
  })

  it('should render tag with proper styling', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('bg-gray-100')
    expect(result).toContain('dark:bg-gray-700')
    expect(result).toContain('rounded')
    expect(result).toContain('text-xs')
  })

  it('should have responsive image height', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ProjectCard, {
      props: { project: mockProject }
    })

    expect(result).toContain('h-48')
    expect(result).toContain('object-cover')
  })
})
