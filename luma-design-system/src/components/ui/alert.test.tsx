import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from './alert'
import { Info } from 'lucide-react'

describe('Alert', () => {
  it('renders correctly', () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('applies info variant class', () => {
    render(<Alert variant="info">Info alert</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('border-[hsl(var(--info-pale-bg-color))]')
  })

  it('applies success variant class', () => {
    render(<Alert variant="success">Success alert</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('border-[hsl(var(--success-pale-bg-color))]')
  })

  it('applies warning variant class', () => {
    render(<Alert variant="warning">Warning alert</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('border-[hsl(var(--warning-pale-bg-color))]')
  })

  it('applies error variant class', () => {
    render(<Alert variant="error">Error alert</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert.className).toContain('border-[hsl(var(--error-pale-bg-color))]')
  })

  it('renders with icon', () => {
    render(
      <Alert>
        <Info className="h-4 w-4" data-testid="info-icon" />
        <AlertTitle>With Icon</AlertTitle>
      </Alert>
    )

    expect(screen.getByTestId('info-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Alert className="custom-alert">Custom</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('custom-alert')
  })

  it('renders only title', () => {
    render(
      <Alert>
        <AlertTitle>Title Only</AlertTitle>
      </Alert>
    )

    expect(screen.getByText('Title Only')).toBeInTheDocument()
  })

  it('renders only description', () => {
    render(
      <Alert>
        <AlertDescription>Description Only</AlertDescription>
      </Alert>
    )

    expect(screen.getByText('Description Only')).toBeInTheDocument()
  })

  it('has correct ARIA role', () => {
    render(<Alert>Alert content</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('AlertTitle applies correct styles', () => {
    render(<AlertTitle>Title</AlertTitle>)
    const title = screen.getByText('Title')
    expect(title).toHaveClass('font-medium', 'leading-none', 'tracking-tight')
  })

  it('AlertDescription applies correct styles', () => {
    render(<AlertDescription>Description</AlertDescription>)
    const description = screen.getByText('Description')
    expect(description).toHaveClass('text-sm')
  })
})
