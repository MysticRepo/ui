import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'
import { Label } from './label'
import { useState } from 'react'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />,
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center justify-between">
          <Label>Volume</Label>
          <span className="text-sm text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75])
    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} disabled className="w-[300px]" />,
}

export const CustomSteps: Story = {
  render: () => {
    const [value, setValue] = useState([5])
    return (
      <div className="w-[300px] space-y-4">
        <div className="flex items-center justify-between">
          <Label>Rating</Label>
          <span className="text-sm text-muted-foreground">{value[0]} stars</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={1} max={10} step={1} />
      </div>
    )
  },
}

export const TemperatureControl: Story = {
  render: () => {
    const [value, setValue] = useState([20])
    return (
      <div className="w-[300px] space-y-4 border border-input rounded-lg p-4">
        <div className="flex items-center justify-between">
          <Label>Temperature</Label>
          <span className="text-lg font-medium">{value[0]}°C</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={16} max={30} step={0.5} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>16°C</span>
          <span>30°C</span>
        </div>
      </div>
    )
  },
}
