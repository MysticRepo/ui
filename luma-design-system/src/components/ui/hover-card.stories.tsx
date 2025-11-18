import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import { Calendar } from 'lucide-react'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@lumadesign</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>LD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@lumadesign</h4>
            <p className="text-sm">
              The Luma design system – created and maintained by Luma team.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const EventHost: Story = {
  render: () => (
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        Hosted by{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="p-0 h-auto font-semibold">
              Sarah Chen
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-semibold">Sarah Chen</h4>
                <p className="text-sm text-muted-foreground">
                  Event organizer and community builder
                </p>
                <div className="pt-2 text-xs text-muted-foreground">
                  Hosted 47 events • 2.3k followers
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </p>
    </div>
  ),
}
