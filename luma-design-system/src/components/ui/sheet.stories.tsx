import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { User, Settings, Mail } from 'lucide-react'

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            This is a left-side sheet panel for navigation.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" />
            Messages
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const RightSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Right Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <Button className="w-full">Save Changes</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have 3 unread notifications.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="p-4 border rounded-md">
            <p className="font-medium">New message from John</p>
            <p className="text-sm text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="p-4 border rounded-md">
            <p className="font-medium">Event reminder</p>
            <p className="text-sm text-muted-foreground">1 hour ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Cookie Settings</SheetTitle>
          <SheetDescription>
            Manage your cookie preferences here.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Essential cookies</p>
              <p className="text-sm text-muted-foreground">Required for the site to function</p>
            </div>
            <Button size="sm" disabled>Required</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Analytics cookies</p>
              <p className="text-sm text-muted-foreground">Help us improve our service</p>
            </div>
            <Button size="sm" variant="outline">Enable</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const AllSides: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>Content from the left side</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>Content from the right side</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>Content from the top</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>Content from the bottom</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}
