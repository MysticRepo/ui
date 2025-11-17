import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../Button'

const meta: Meta<typeof Modal> = {
  title: 'Luma/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Standard: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Modal Title"
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>This is a standard modal with title, content, and footer.</p>
        </Modal>
      </>
    )
  },
}

export const Alert: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button color="error" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete Item"
          variant="alert"
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="error" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </>
          }
        >
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        </Modal>
      </>
    )
  },
}

export const GlassMorphism: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Glass Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Glass Morphism"
          variant="glass"
        >
          <p>This modal has a glass morphism effect with backdrop blur.</p>
        </Modal>
      </>
    )
  },
}

export const AllSizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | null>(null)
    return (
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setSize('sm')}>
          Small
        </Button>
        <Button size="sm" onClick={() => setSize('md')}>
          Medium
        </Button>
        <Button size="sm" onClick={() => setSize('lg')}>
          Large
        </Button>
        <Button size="sm" onClick={() => setSize('xl')}>
          Extra Large
        </Button>
        {size && (
          <Modal
            open={true}
            onClose={() => setSize(null)}
            title={`${size.toUpperCase()} Modal`}
            size={size}
          >
            <p>This is a {size} sized modal.</p>
          </Modal>
        )}
      </div>
    )
  },
}
