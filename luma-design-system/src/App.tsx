import { useState } from 'react'
import './styles/globals.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Checkbox } from './components/ui/checkbox'
import { Switch } from './components/ui/switch'
import { Slider } from './components/ui/slider'
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './components/ui/tooltip'
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'

function App() {
  const [sliderValue, setSliderValue] = useState([50])
  const [switchChecked, setSwitchChecked] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Luma UI Component Library
          </h1>
          <p className="text-lg text-muted-foreground">
            Pixel-perfect recreation of Luma design system using shadcn/ui and Radix primitives
          </p>
        </header>

        {/* Buttons Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Buttons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="brand">Brand</Button>
            <Button variant="light">Light</Button>
            <Button variant="success">Success</Button>
            <Button variant="error">Error</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="barney">Barney</Button>
            <Button variant="blue">Blue</Button>
            <Button variant="green">Green</Button>
            <Button variant="purple">Purple</Button>
            <Button variant="orange">Orange</Button>
            <Button variant="red">Red</Button>
            <Button variant="yellow">Yellow</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Inputs</h2>
          <div className="grid gap-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="default">Default Input</Label>
              <Input id="default" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="filled">Filled Input</Label>
              <Input id="filled" variant="filled" placeholder="Filled variant" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rounded">Rounded Input</Label>
              <Input id="rounded" variant="rounded" placeholder="Rounded variant" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error">Error Input</Label>
              <Input id="error" variant="error" placeholder="Error state" />
              <p className="text-sm text-destructive">This field has an error</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" disabled placeholder="Disabled input" />
            </div>
          </div>
        </section>

        {/* Form Controls Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Form Controls</h2>
          <div className="space-y-4 max-w-md">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox"
                checked={checkboxChecked}
                onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
              />
              <Label htmlFor="checkbox">Checkbox with label</Label>
            </div>
            <div className="flex items-center justify-between border border-[hsl(var(--divider-color))] rounded-md p-3 max-w-[300px]">
              <Label htmlFor="switch">Enable notifications</Label>
              <Switch
                id="switch"
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />
            </div>
            <div className="space-y-2">
              <Label>Slider - Value: {sliderValue[0]}</Label>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Alerts / Banners</h2>
          <div className="space-y-4">
            <Alert variant="info">
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational message with important details.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your action was completed successfully!
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please review this important warning message.
              </AlertDescription>
            </Alert>
            <Alert variant="error">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                An error occurred. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Overlays Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Overlays</h2>
          <div className="flex gap-4 flex-wrap">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a dialog description. Dialogs are built using Radix UI primitives.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </DialogContent>
            </Dialog>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover for Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip with helpful information</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        {/* Theme Toggle */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Theme</h2>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => document.documentElement.classList.remove('dark')}
            >
              Light Mode
            </Button>
            <Button
              variant="outline"
              onClick={() => document.documentElement.classList.add('dark')}
            >
              Dark Mode
            </Button>
          </div>
        </section>

        <footer className="text-center text-muted-foreground border-t pt-8">
          <p>Built with React, TypeScript, Tailwind CSS, Radix UI, and shadcn/ui</p>
          <p className="mt-2">Reverse-engineered from Luma design system</p>
        </footer>
      </div>
    </div>
  )
}

export default App
