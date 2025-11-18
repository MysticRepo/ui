import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'error', 'warning', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const WithNumbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>New 3</Badge>
      <Badge variant="success">Completed 12</Badge>
      <Badge variant="error">Failed 2</Badge>
      <Badge variant="warning">Pending 5</Badge>
    </div>
  ),
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span>Order Status:</span>
        <Badge variant="success">Delivered</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Payment:</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Verification:</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Account:</span>
        <Badge variant="secondary">Active</Badge>
      </div>
    </div>
  ),
}
