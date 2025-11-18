import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Label } from './label'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="free" className="space-y-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="free" id="free" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="free">Free</Label>
          <p className="text-sm text-muted-foreground">
            Free for everyone
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="pro" id="pro" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="pro">Pro</Label>
          <p className="text-sm text-muted-foreground">
            $9/month for advanced features
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="enterprise" id="enterprise" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="enterprise">Enterprise</Label>
          <p className="text-sm text-muted-foreground">
            Custom pricing for large teams
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const EventType: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h3 className="text-lg font-medium">Event Type</h3>
        <p className="text-sm text-muted-foreground">Select the type of event you're creating</p>
      </div>
      <RadioGroup defaultValue="online">
        <div className="flex items-center space-x-2 border rounded-lg p-3">
          <RadioGroupItem value="online" id="online" />
          <Label htmlFor="online" className="cursor-pointer flex-1">Online Event</Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-lg p-3">
          <RadioGroupItem value="in-person" id="in-person" />
          <Label htmlFor="in-person" className="cursor-pointer flex-1">In-Person Event</Label>
        </div>
        <div className="flex items-center space-x-2 border rounded-lg p-3">
          <RadioGroupItem value="hybrid" id="hybrid" />
          <Label htmlFor="hybrid" className="cursor-pointer flex-1">Hybrid Event</Label>
        </div>
      </RadioGroup>
    </div>
  ),
}
