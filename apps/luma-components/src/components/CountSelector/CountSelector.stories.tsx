import type { Meta, StoryObj } from '@storybook/react-vite'
import { CountSelector } from './CountSelector'
import React from 'react'

const meta = {
  title: 'Components/Utility/CountSelector',
  component: CountSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 1,
    min: 0,
    max: 100,
  },
}

export const WithInitialValue: Story = {
  args: {
    defaultValue: 2,
    min: 1,
    max: 10,
  },
}

export const AllSizes: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-6">
      <CountSelector size="sm" defaultValue={1} min={0} max={10} />
      <CountSelector size="md" defaultValue={1} min={0} max={10} />
      <CountSelector size="lg" defaultValue={1} min={0} max={10} />
    </div>
  ),
}

export const Controlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState(5)
    return (
      <div className="flex flex-col gap-4">
        <CountSelector
          value={value}
          onChange={setValue}
          min={1}
          max={10}
        />
        <p className="text-sm text-gray-600">Current value: {value}</p>
      </div>
    )
  },
}

export const WithStep: Story = {
  args: {
    defaultValue: 10,
    min: 0,
    max: 100,
    step: 5,
  },
}

export const WithError: Story = {
  args: {
    defaultValue: 1,
    min: 0,
    max: 10,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    disabled: true,
  },
}
