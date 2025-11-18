import type { Meta, StoryObj } from '@storybook/react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'
import { Calendar, Mail, MessageSquare, Settings, User } from 'lucide-react'
import { useState } from 'react'
import { Button } from './button'

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Email</span>
          </CommandItem>
          <CommandItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Messages</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Events">
              <CommandItem>Create New Event</CommandItem>
              <CommandItem>View My Events</CommandItem>
              <CommandItem>Browse Events</CommandItem>
            </CommandGroup>
            <CommandGroup heading="Settings">
              <CommandItem>Profile Settings</CommandItem>
              <CommandItem>Notifications</CommandItem>
              <CommandItem>Privacy</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
}
