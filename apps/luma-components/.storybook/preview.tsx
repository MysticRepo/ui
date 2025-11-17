import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/index.css'

console.log('[Storybook Preview] Loading preview configuration...')
console.log('[Storybook Preview] CSS imported')
console.log('[Storybook Preview] React version:', React.version)

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('[Storybook Preview] Global error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Storybook Preview] Unhandled rejection:', event.reason)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: '#ffffff' },
        dark: { name: 'dark', value: '#171717' },
        "luma-bg": { name: 'luma-bg', value: '#fafafa' }
      }
    },
  },

  tags: ['autodocs'],

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
}

console.log('[Storybook Preview] Preview configuration complete')

export default preview
