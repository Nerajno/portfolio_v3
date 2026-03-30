import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import Button from '../../src/components/ui/button.astro'

describe('Button UI Component', () => {
  it('should render button with slot content', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      slots: {
        default: 'Click Me'
      }
    })

    expect(result).toContain('<button')
    expect(result).toContain('Click Me')
  })

  it('should have default medium size', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button)

    expect(result).toContain('px-5')
    expect(result).toContain('py-2.5')
  })

  it('should accept large size prop', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { size: 'lg' }
    })

    expect(result).toContain('px-6')
    expect(result).toContain('py-3')
  })

  it('should have default primary style', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button)

    expect(result).toContain('bg-black')
    expect(result).toContain('text-white')
    expect(result).toContain('hover:bg-slate-900')
  })

  it('should accept outline style', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { style: 'outline' }
    })

    expect(result).toContain('border-2')
    expect(result).toContain('border-black')
    expect(result).toContain('hover:bg-black')
  })

  it('should accept inverted style', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { style: 'inverted' }
    })

    expect(result).toContain('bg-white')
    expect(result).toContain('text-black')
    expect(result).toContain('hover:bg-slate-100')
  })

  it('should render as block when block prop is true', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { block: true }
    })

    expect(result).toContain('w-full')
  })

  it('should not be full width by default', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button)

    expect(result).not.toContain('w-full')
  })

  it('should include base styling classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button)

    expect(result).toContain('rounded')
    expect(result).toContain('text-center')
    expect(result).toContain('transition')
  })

  it('should have focus ring styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button)

    expect(result).toContain('focus-visible:ring-2')
    expect(result).toContain('ring-offset-2')
    expect(result).toContain('ring-gray-200')
  })

  it('should have dark mode styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button)

    expect(result).toContain('dark:bg-white')
    expect(result).toContain('dark:text-black')
    expect(result).toContain('dark:ring-gray-700')
  })

  it('should accept custom className', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { class: 'custom-class' }
    })

    expect(result).toContain('custom-class')
  })

  it('should pass through additional attributes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { type: 'submit', disabled: true }
    })

    expect(result).toContain('type="submit"')
    expect(result).toContain('disabled')
  })

  it('should combine size large with outline style', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: { size: 'lg', style: 'outline' }
    })

    expect(result).toContain('px-6')
    expect(result).toContain('py-3')
    expect(result).toContain('border-2')
    expect(result).toContain('border-black')
  })

  it('should handle all props together', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Button, {
      props: {
        size: 'lg',
        style: 'inverted',
        block: true,
        class: 'my-button'
      },
      slots: {
        default: 'Full Width Large Button'
      }
    })

    expect(result).toContain('px-6')
    expect(result).toContain('bg-white')
    expect(result).toContain('w-full')
    expect(result).toContain('my-button')
    expect(result).toContain('Full Width Large Button')
  })
})
