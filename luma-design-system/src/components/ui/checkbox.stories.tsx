import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'
import { Label } from './label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked checkbox</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">Disabled checkbox</Label>
    </div>
  ),
}

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked">Disabled checked</Label>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" defaultChecked />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products, features, and more.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="security" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="security">Security updates</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about your account security.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="item1" />
        <Label htmlFor="item1">Item 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="item2" />
        <Label htmlFor="item2">Item 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="item3" />
        <Label htmlFor="item3">Item 3</Label>
      </div>
    </div>
  ),
}
