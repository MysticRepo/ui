import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Mail } from 'lucide-react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'brand',
        'light',
        'success',
        'error',
        'warning',
        'ghost',
        'outline',
        'link',
        'barney',
        'blue',
        'green',
        'purple',
        'orange',
        'red',
        'yellow',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Brand Button',
  },
}

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light Button',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Button',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="barney">Barney</Button>
      <Button variant="blue">Blue</Button>
      <Button variant="green">Green</Button>
      <Button variant="purple">Purple</Button>
      <Button variant="orange">Orange</Button>
      <Button variant="red">Red</Button>
      <Button variant="yellow">Yellow</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Login with Email
      </Button>
      <Button variant="outline">
        Send
        <Mail className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="light">Light</Button>
      <Button variant="success">Success</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="barney">Barney</Button>
      <Button variant="blue">Blue</Button>
      <Button variant="green">Green</Button>
      <Button variant="purple">Purple</Button>
      <Button variant="orange">Orange</Button>
      <Button variant="red">Red</Button>
      <Button variant="yellow">Yellow</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
}
