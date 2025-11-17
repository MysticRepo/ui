import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/index.css'

console.log('[Storybook Preview] ==========================================')
console.log('[Storybook Preview] Loading preview configuration...')
console.log('[Storybook Preview] React version:', React.version)

// CSS validation will happen in the decorator after DOM is ready

console.log('[Storybook Preview] CSS imported')

// Add global error handler with detailed logging
window.addEventListener('error', (event) => {
  console.error('[Storybook Preview] ========== GLOBAL ERROR ==========')
  console.error('[Storybook Preview] Error message:', event.message)
  console.error('[Storybook Preview] Error source:', event.filename, 'line', event.lineno)
  console.error('[Storybook Preview] Error object:', event.error)
  console.error('[Storybook Preview] Error stack:', event.error?.stack)
  console.error('[Storybook Preview] ==========================================')
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Storybook Preview] ========== UNHANDLED REJECTION ==========')
  console.error('[Storybook Preview] Reason:', event.reason)
  console.error('[Storybook Preview] ==========================================')
})

// React Error Boundary for component errors
class StorybookErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    console.error('[Storybook Preview] ========== REACT ERROR BOUNDARY ==========')
    console.error('[Storybook Preview] Component error:', error)
    console.error('[Storybook Preview] Error stack:', error.stack)
    console.error('[Storybook Preview] ==========================================')
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[Storybook Preview] Error info:', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', border: '2px solid red' }}>
          <h2>Component Error</h2>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const StorybookDecorator = ({ children }: { children: React.ReactNode }) => {
  console.log('[Storybook Preview] ========== STORY RENDER ==========')
  console.log('[Storybook Preview] Rendering story component...')
  
  React.useEffect(() => {
    console.log('[Storybook Preview] Story component mounted')
    
    // Validate CSS loading
    try {
      const stylesheets = Array.from(document.styleSheets)
      console.log('[Storybook Preview] Total stylesheets found:', stylesheets.length)
      stylesheets.forEach((sheet, idx) => {
        try {
          console.log(`[Storybook Preview] Stylesheet ${idx}:`, sheet.href || 'inline', sheet.cssRules?.length || 0, 'rules')
        } catch (e) {
          console.log(`[Storybook Preview] Stylesheet ${idx}:`, sheet.href || 'inline', '(cross-origin, cannot read)')
        }
      })
    } catch (e) {
      console.error('[Storybook Preview] CSS validation error:', e)
    }
    
    console.log('[Storybook Preview] Document body classes:', document.body.className)
    console.log('[Storybook Preview] Document body computed styles:', {
      display: window.getComputedStyle(document.body).display,
      backgroundColor: window.getComputedStyle(document.body).backgroundColor,
    })
    
    // Check if any Tailwind utility classes are working
    const testDiv = document.createElement('div')
    testDiv.className = 'bg-blue-500 p-4 text-white'
    testDiv.textContent = 'Tailwind Test'
    testDiv.style.position = 'fixed'
    testDiv.style.top = '10px'
    testDiv.style.right = '10px'
    testDiv.style.zIndex = '9999'
    document.body.appendChild(testDiv)
    
    setTimeout(() => {
      const styles = window.getComputedStyle(testDiv)
      console.log('[Storybook Preview] Tailwind test element styles:', {
        backgroundColor: styles.backgroundColor,
        padding: styles.padding,
        color: styles.color,
      })
      testDiv.remove()
    }, 100)
    
    return () => {
      console.log('[Storybook Preview] Story component unmounting')
    }
  }, [])
  
  return <StorybookErrorBoundary>{children}</StorybookErrorBoundary>
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
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
console.log('[Storybook Preview] ==========================================')

export default preview
