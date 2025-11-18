import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Badge } from './badge'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area. You can put any content here.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details below to create your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Create</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Team Member</CardTitle>
        <CardDescription>Invite a new team member</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">Sofia Davis</p>
            <p className="text-xs text-muted-foreground">sofia@example.com</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Remove
        </Button>
        <Button className="flex-1">Invite</Button>
      </CardFooter>
    </Card>
  ),
}

export const EventCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Tech Conference 2024</CardTitle>
            <CardDescription>Mar 15, 2024 • 9:00 AM PST</CardDescription>
          </div>
          <Badge variant="success">Live</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Join us for the biggest tech conference of the year featuring talks from industry leaders.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>HS</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">Hosted by Sarah Chen</p>
            <p className="text-muted-foreground">234 attendees</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>This card has no header or footer, just content.</p>
      </CardContent>
    </Card>
  ),
}
