import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and is fully accessible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the Luma design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default with smooth expand/collapse transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      <AccordionItem value="faq-1">
        <AccordionTrigger>What is Luma?</AccordionTrigger>
        <AccordionContent>
          Luma is a platform for creating and managing events. It provides tools for event creators
          to build beautiful event pages, manage registrations, and engage with attendees.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>How do I create an event?</AccordionTrigger>
        <AccordionContent>
          Creating an event is simple. Click on "Create Event", fill in your event details,
          customize your event page, and publish when you're ready.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>Can I customize my event page?</AccordionTrigger>
        <AccordionContent>
          Yes! You can fully customize your event page with custom colors, images, descriptions,
          and more. Make it uniquely yours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>How do attendees register?</AccordionTrigger>
        <AccordionContent>
          Attendees can register directly from your event page. They'll receive a confirmation
          email and calendar invite automatically.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>Content for section 3</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
