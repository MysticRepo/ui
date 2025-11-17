import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Luma/Toggle',
  component: Toggle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    label: 'Enable feature',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive notifications about your account activity',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle label="Small toggle" size="sm" />
      <Toggle label="Medium toggle (default)" size="md" />
      <Toggle label="Large toggle" size="lg" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex flex-col gap-2">
        <Toggle
          label="Dark mode"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p className="text-sm text-gray-600">State: {checked ? 'On' : 'Off'}</p>
      </div>
    )
  },
}

export const Loading: Story = {
  args: {
    label: 'Syncing...',
    loading: true,
    checked: true,
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle label="Disabled (off)" disabled />
      <Toggle label="Disabled (on)" disabled checked />
    </div>
  ),
}
