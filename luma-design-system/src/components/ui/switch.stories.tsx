import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'
import { Label } from './label'

const meta = {
  title: 'Components/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked" defaultChecked />
      <Label htmlFor="checked">Checked switch</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled">Disabled switch</Label>
    </div>
  ),
}

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked">Disabled checked</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center justify-between border border-input rounded-lg p-4 max-w-md">
      <div className="space-y-0.5">
        <Label htmlFor="notifications">Push Notifications</Label>
        <p className="text-sm text-muted-foreground">
          Receive push notifications on your device
        </p>
      </div>
      <Switch id="notifications" />
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="flex items-center justify-between border border-input rounded-lg p-4">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products and features
          </p>
        </div>
        <Switch id="marketing" defaultChecked />
      </div>
      <div className="flex items-center justify-between border border-input rounded-lg p-4">
        <div className="space-y-0.5">
          <Label htmlFor="security">Security emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about account security
          </p>
        </div>
        <Switch id="security" defaultChecked />
      </div>
      <div className="flex items-center justify-between border border-input rounded-lg p-4">
        <div className="space-y-0.5">
          <Label htmlFor="updates">Product updates</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about product updates
          </p>
        </div>
        <Switch id="updates" />
      </div>
    </div>
  ),
}
