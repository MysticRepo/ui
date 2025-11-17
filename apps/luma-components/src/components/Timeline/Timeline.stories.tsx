import type { Meta, StoryObj } from '@storybook/react-vite'
import { Timeline } from './Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Luma/Timeline',
  component: Timeline,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Timeline>

const sampleItems = [
  {
    title: 'Project Created',
    description: 'The project was initialized with basic setup',
    timestamp: '2024-01-01',
  },
  {
    title: 'First Commit',
    description: 'Added initial components and configurations',
    timestamp: '2024-01-05',
  },
  {
    title: 'Beta Release',
    description: 'Released beta version to selected users',
    timestamp: '2024-02-15',
  },
  {
    title: 'Production Launch',
    description: 'Successfully launched to all users',
    timestamp: '2024-03-01',
  },
]

export const Vertical: Story = {
  args: {
    items: sampleItems,
    orientation: 'vertical',
  },
}

export const Horizontal: Story = {
  args: {
    items: sampleItems,
    orientation: 'horizontal',
  },
}

export const WithIcons: Story = {
  args: {
    items: sampleItems.map((item, idx) => ({
      ...item,
      icon: (
        <span className="text-xs text-blue-600 font-bold">
          {idx + 1}
        </span>
      ),
    })),
  },
}
