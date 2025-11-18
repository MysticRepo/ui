import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './toast'
import { Toaster } from './toaster'
import { useToast } from './use-toast'
import { Button } from './button'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

const ToastDemo = ({ variant, title, description }: any) => {
  const { toast } = useToast()

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant,
            title,
            description,
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <ToastDemo
      title="Notification"
      description="This is a default toast notification."
    />
  ),
}

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Success!"
      description="Your event was created successfully."
    />
  ),
}

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Error"
      description="Something went wrong. Please try again."
    />
  ),
}

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Warning"
      description="Please review this important message."
    />
  ),
}

export const AllVariants: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <div className="space-x-2">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Default",
              description: "This is a default toast.",
            })
          }}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "success",
              title: "Success",
              description: "Operation completed successfully.",
            })
          }}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "error",
              title: "Error",
              description: "An error occurred.",
            })
          }}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "warning",
              title: "Warning",
              description: "Please be careful.",
            })
          }}
        >
          Warning
        </Button>
        <Toaster />
      </div>
    )
  },
}
