import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './scroll-area'
import { Separator } from './separator'

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Scrollable Content</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1} - This is some scrollable content in a custom scroll area.
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const EventList: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Upcoming Events</h4>
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i}>
            <div className="text-sm py-3">
              <p className="font-medium">Event {i + 1}</p>
              <p className="text-muted-foreground text-xs">Mar {i + 1}, 2024</p>
            </div>
            {i < 14 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-[350px] whitespace-nowrap rounded-md border">
      <div className="flex p-4 space-x-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-24 w-24 shrink-0 rounded-md border flex items-center justify-center"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
