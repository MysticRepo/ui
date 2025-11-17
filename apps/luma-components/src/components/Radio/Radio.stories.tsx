import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup } from './index'

const meta: Meta<typeof Radio> = {
  title: 'Luma/Radio',
  component: Radio,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Get notified when someone mentions you',
    value: 'notifications',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio label="Small" size="sm" />
      <Radio label="Medium (default)" size="md" />
      <Radio label="Large" size="lg" />
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <RadioGroup name="plan" defaultValue="pro">
      <Radio label="Free" description="Basic features" value="free" />
      <Radio label="Pro" description="Advanced features" value="pro" />
      <Radio label="Enterprise" description="Custom everything" value="enterprise" />
    </RadioGroup>
  ),
}

export const HorizontalGroup: Story = {
  render: () => (
    <RadioGroup name="color" orientation="horizontal">
      <Radio label="Red" value="red" />
      <Radio label="Blue" value="blue" />
      <Radio label="Green" value="green" />
    </RadioGroup>
  ),
}
