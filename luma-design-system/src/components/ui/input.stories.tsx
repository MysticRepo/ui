import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'rounded', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled variant',
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    placeholder: 'Rounded variant',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Error state',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label>Default</Label>
        <Input placeholder="Default input" />
      </div>
      <div className="space-y-2">
        <Label>Filled</Label>
        <Input variant="filled" placeholder="Filled input" />
      </div>
      <div className="space-y-2">
        <Label>Rounded</Label>
        <Input variant="rounded" placeholder="Rounded input" />
      </div>
      <div className="space-y-2">
        <Label>Error</Label>
        <Input variant="error" placeholder="Error input" />
        <p className="text-sm text-destructive">This field has an error</p>
      </div>
      <div className="space-y-2">
        <Label>Disabled</Label>
        <Input disabled placeholder="Disabled input" />
      </div>
    </div>
  ),
}
