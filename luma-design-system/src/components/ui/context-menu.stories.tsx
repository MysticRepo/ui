import type { Meta, StoryObj } from '@storybook/react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './context-menu'
import { User, Settings, Plus, UserPlus } from 'lucide-react'

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          New Item
        </ContextMenuItem>
        <ContextMenuItem>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite User
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const EventCard: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="w-[300px] rounded-lg border p-4">
          <h3 className="font-medium">Tech Conference 2024</h3>
          <p className="text-sm text-muted-foreground mt-1">Mar 15, 2024</p>
          <p className="text-xs text-muted-foreground mt-2">Right-click for options</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Edit Event</ContextMenuItem>
        <ContextMenuItem>Duplicate Event</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Share Event</ContextMenuItem>
        <ContextMenuItem>Export Event</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">Delete Event</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
