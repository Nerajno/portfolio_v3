import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import ContactForm from '../../src/components/contactform.astro'

describe('ContactForm Component', () => {
  it('should render form element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('<form')
    expect(result).toContain('id="form"')
  })

  it('should have correct form action and method', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('action="https://api.web3forms.com/submit"')
    expect(result).toContain('method="POST"')
  })

  it('should include access key hidden input', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('type="hidden"')
    expect(result).toContain('name="access_key"')
  })

  it('should include honeypot field for bot protection', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('name="botcheck"')
    expect(result).toContain('type="checkbox"')
    expect(result).toContain('hidden')
  })

  it('should render name input field', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('name="name"')
    expect(result).toContain('type="text"')
    expect(result).toContain('placeholder="Name"')
    expect(result).toContain('required')
  })

  it('should render email input field', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('name="email"')
    expect(result).toContain('type="email"')
    expect(result).toContain('placeholder="Email Address"')
    expect(result).toContain('required')
  })

  it('should have accessible email label', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('for="email_address"')
    expect(result).toContain('id="email_address"')
    expect(result).toContain('sr-only')
  })

  it('should render message textarea field', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('<textarea')
    expect(result).toContain('name="message"')
    expect(result).toContain('placeholder="Your Message"')
    expect(result).toContain('required')
  })

  it('should render submit button', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('type="submit"')
    expect(result).toContain('Send Message')
  })

  it('should include result div for feedback', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('id="result"')
  })

  it('should include validation feedback for name', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('Please provide your full name')
  })

  it('should include validation feedback for email', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('Please provide your email address')
    expect(result).toContain('Please provide a valid email address')
  })

  it('should include validation feedback for message', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('Please enter your message')
  })

  it('should have proper Tailwind input styling', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('w-full')
    expect(result).toContain('rounded-md')
    expect(result).toContain('focus:ring-4')
    expect(result).toContain('border-slate-300')
  })

  it('should have dark mode input styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('dark:text-slate-900')
    expect(result).toContain('dark:border-slate-700')
    expect(result).toContain('dark:ring-slate-800')
  })

  it('should have proper textarea height', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('h-36')
  })

  it('should include validation CSS classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('needs-validation')
    expect(result).toContain('invalid-feedback')
    expect(result).toContain('empty-feedback')
  })

  it('should include error styling for validation', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('text-red-400')
  })

  it('should include client-side validation script', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('<script')
    expect(result).toContain('DOMContentLoaded')
    expect(result).toContain('checkValidity')
  })

  it('should have novalidate attribute for custom validation', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ContactForm)

    expect(result).toContain('novalidate')
  })
})
