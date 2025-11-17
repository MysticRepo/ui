import type { Meta, StoryObj } from '@storybook/react'
import { EventCard } from './EventCard'

const meta: Meta<typeof EventCard> = {
  title: 'Luma/EventCard',
  component: EventCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventCard>

export const Default: Story = {
  args: {
    title: 'Design System Workshop',
    description: 'Join us for an interactive workshop on building design systems from scratch',
    datetime: 'March 15, 2024 at 2:00 PM',
    location: 'San Francisco, CA',
  },
}

export const WithImage: Story = {
  args: {
    title: 'Product Launch Event',
    description: 'Be the first to see our latest product innovations',
    datetime: 'April 1, 2024 at 6:00 PM',
    location: 'Virtual',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
}

export const WithRSVP: Story = {
  args: {
    title: 'Tech Meetup',
    description: 'Network with fellow developers and share ideas',
    datetime: 'March 20, 2024 at 7:00 PM',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
    onRSVP: () => alert('RSVP clicked!'),
  },
}

export const RSVPGoing: Story = {
  args: {
    title: 'Conference 2024',
    description: 'Annual technology conference',
    datetime: 'May 10-12, 2024',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    onRSVP: () => {},
    rsvpStatus: 'going',
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EventCard
        title="Workshop 1"
        datetime="March 15, 2024"
        location="Online"
      />
      <EventCard
        title="Workshop 2"
        datetime="March 20, 2024"
        location="San Francisco"
      />
      <EventCard
        title="Workshop 3"
        datetime="March 25, 2024"
        location="New York"
      />
    </div>
  ),
}
