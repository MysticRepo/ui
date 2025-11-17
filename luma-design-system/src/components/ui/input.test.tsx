import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './input'

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<Input onChange={handleChange} />)
    const input = screen.getByRole('textbox')

    await user.type(input, 'test')

    expect(handleChange).toHaveBeenCalled()
    expect(input).toHaveValue('test')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('applies default variant class', () => {
    render(<Input variant="default" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-input')
  })

  it('applies filled variant class', () => {
    render(<Input variant="filled" />)
    const input = screen.getByRole('textbox')
    expect(input.className).toContain('bg-[hsl(var(--light-bg-color))]')
  })

  it('applies rounded variant class', () => {
    render(<Input variant="rounded" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('rounded-full')
  })

  it('applies error variant class', () => {
    render(<Input variant="error" />)
    const input = screen.getByRole('textbox')
    expect(input.className).toContain('border-[hsl(var(--error-pale-bg-color))]')
  })

  it('accepts different input types', () => {
    const { rerender } = render(<Input type="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')

    rerender(<Input type="password" />)
    expect(screen.getByPlaceholderText('')).toHaveAttribute('type', 'password')
  })

  it('applies custom className', () => {
    render(<Input className="custom-input" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-input')
  })

  it('supports ref forwarding', () => {
    const ref = vi.fn()
    render(<Input ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('renders with placeholder', () => {
    render(<Input placeholder="Test placeholder" />)
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument()
  })

  it('can have a default value', () => {
    render(<Input defaultValue="default text" />)
    expect(screen.getByRole('textbox')).toHaveValue('default text')
  })
})
