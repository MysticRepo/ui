import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './dialog'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description. Dialogs are used to display important information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p>This is the content of the dialog. You can put any content here.</p>
        </div>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
}

export const CreateEvent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="brand">Create Event</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the details below to create your event
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="event-name">Event Name</Label>
            <Input id="event-name" placeholder="Summer Tech Conference" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-date">Date</Label>
            <Input id="event-date" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-location">Location</Label>
            <Input id="event-location" placeholder="San Francisco, CA" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="brand">Create Event</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
}
