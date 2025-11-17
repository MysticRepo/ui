# Luma Style Guide - Extracted Design System Data

> **Extraction Date**: 2025-11-17
> **Source**: https://luma.com/style-guide
> **Method**: Web scraping and analysis

## Executive Summary

Luma's design system is a comprehensive UI library featuring 18+ documented component categories with extensive theming support via CSS custom properties. The system supports dark/light modes and uses a variable-based approach for maintainability.

## Design Tokens

### Colors

The Luma color system uses CSS custom properties organized into semantic categories:

**Primary Color Families** (10-step scales each):
- Red
- Green
- Purple
- Cranberry
- Barney (purple variant)
- Gray
- Blue
- Yellow
- Orange

**Semantic Colors**:
```css
--primary-color
--secondary-color
--secondary-bg-color
--brand-color
--brand-active-color
--success-color
--error-color
--warning-color
--banner-color

/* Background variations */
--success-faint-bg-color
--success-pale-bg-color
--warning-faint-bg-color
--warning-pale-bg-color
--error-faint-bg-color
--error-pale-bg-color
--banner-bg-color
--banner-border-color

/* UI Colors */
--divider-color
--input-focus-border-color
--placeholder-color
--disabled-background-color
--light-button-color
```

### Typography

**Font Families**:
- **Display/Marketing**: Recoleta-Regular (Georgia, serif fallback)
- **Body**: System font stack (implied)

**Sizes**:
- h1: 2rem (bold, margin: 2rem 0)
- h2: 1.5rem (bold, margin: 2rem 0 0.75rem)
- h3: margin: 2rem 0 1rem
- Base text: 1rem
- Large variant: 1.25rem

**Font Weights**:
- Bold (headings)
- Medium (`--font-weight-medium` for buttons)

### Spacing

**Component Spacing**:
- Navigation padding: 0.75rem 1rem
- Logo margin: 1.5rem
- Link margins: 1rem
- Banner padding: 0.5rem 0.75rem 0.5rem 1rem
- Banner icon padding: 0.75rem (left)
- Banner no-icon padding: 0.875rem (left/right)
- Content gaps: 0.5rem
- Modal horizontal padding: `--modal-horizontal-padding`
- Button padding: 0.5rem 0.75rem 0.5rem 0.5rem (variant: 0.5rem 1rem)
- Icon grid gap: 1rem
- Icon container padding: 1rem

**Margins**:
- Container padding-bottom: 10rem
- Standard: 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem

### Borders

**Border Radius**:
- Cards: `--card-border-radius`

**Border Widths**:
- Standard: 1px solid
- Dividers: 1px solid `--divider-color`

### Shadows

**Box Shadows**:
- Card hover: `--card-hover-shadow`
- Input focus: `--input-focus-box-shadow`

### Animations & Transitions

**Transitions**:
- Standard: `--transition`
- Arrow on hover: translate(1px)
- New-tab arrow: translate(1px) translateY(-1px)
- Icon vertical adjustment: translateY(2.5px)

**Interactive States**:
- Hover: Color changes, shadow application
- Active: Distinct color state
- Focus: Outline with 2px solid
- Disabled: cursor: not-allowed, box-shadow: none

## Components

### 1. Button

**Variants**:
- Primary, Secondary, Light, Brand
- Success, Error, Warning
- Color variants: Barney, Blue, Gray, Green, Orange, Purple, Red, Yellow
- Social: Discord, Ethereum, Solana, Twitter, Google, YouTube, Zoom

**Special Types**:
- Dropdown Button
- Split Button (with 1px divider)

**CSS Properties**:
```css
border-radius: var(--card-border-radius);
font-weight: var(--font-weight-medium);
transition: var(--transition);
user-select: none;
border: 0;
padding: .5rem .75rem .5rem .5rem;
```

**States**:
- Hover: `box-shadow: var(--card-hover-shadow)` (hover-capable devices only)
- Disabled: `cursor: not-allowed; box-shadow: none !important`
- Focus: `outline: var(--light-button-color) solid 2px`

### 2. Input

**Types**:
- Text Field (standard)
- Text Field with Accessory
- Filled Input
- Name Field
- Rounded Input
- Rounded Input with Accessory
- Accessory Input
- Text Area
- Rounded Solid Text Area
- Large Text Area

**CSS Properties**:
```css
height: var(--input-height);
padding: var(--input-padding);
```

**States**:
- Default
- Hover
- Focus:
  - border-color: var(--input-focus-border-color)
  - box-shadow: var(--input-focus-box-shadow)
  - background-color: var(--input-focus-bg-color)
- Error: color: var(--error-color)
- Disabled: background-color: var(--disabled-background-color)

**Additional Elements**:
- Helper text with opacity transitions
- Chevron indicators for dropdowns
- Tagged input items with close buttons

### 3. Form Controls

**Types**:
- Checkbox (standard, danger, with description)
- Radio buttons
- Switch/Toggle (LuxToggleRow)
- Select dropdown
- Multi Select
- Picker
- Count Selector (with increment/decrement)
- Sliders (range inputs, max-width: 300px)

**Toggle Specifications**:
```css
border: 1px solid var(--divider-color);
max-width: 300px;
margin-bottom: 0.5rem;
padding: 0.5rem 0.75rem;
```

**Slider Track**:
```css
linear-gradient(to right,
  var(--track-left-color),
  var(--track-left-color) 21.05%,
  var(--track-right-color) 21.05%,
  var(--track-right-color)
);
```

### 4. Overlay Components

**Types**:
1. Modal (standard, alert, long)
2. Panel (side panel)
3. Glass Overlay (glassmorphic)
4. Multi-Step Modal
5. Menu (dropdown/popup)
6. Tooltip
7. Toasts (Success, Error, Loading)
8. Lightbox

**Common Properties**:
- Background: `--secondary-bg-color`
- Padding: `--modal-horizontal-padding`
- Supports dark/light theme modes

### 5. Banner/Alert

**Variants**:
- Info (default)
- Success
- Warning
- Error

**Structure**:
```css
/* Padding variations */
padding: 0.5rem 0.75rem 0.5rem 1rem; /* standard */
padding-left: 0.75rem; /* with icon */
padding: 0.875rem; /* no icon/button */

/* Border */
border: 1px solid [variant-border-color];

/* Content */
gap: 0.5rem;
```

**Color Mappings**:
| Variant | Text | Background | Border |
|---------|------|------------|--------|
| Info | --banner-color | --banner-bg-color | --banner-border-color |
| Success | --success-color | --success-faint-bg-color | --success-pale-bg-color |
| Warning | --warning-color | --warning-faint-bg-color | --warning-pale-bg-color |
| Error | --error-color | --error-faint-bg-color | --error-pale-bg-color |

**Interactive Elements**:
- CTA links with underlines
- Hover: Color and border transitions
- Font weight: Medium

### 6. Icons

**System Overview**:
- 600+ icons across multiple categories
- UI, Brand, Payment, Weather, Empty States, Specialized sets

**Sizes**:
- 16px (base)
- 24px (large)

**Variants**:
- Standard (outline/stroke-based)
- Filled (solid)
- Thick (enhanced stroke weight)
- Color-coded (brands/payment methods)

**Grid Layout**:
```css
padding: 1rem;
grid-gap: 1rem;
```

**Categories**:
- UI icons (Alert, Bell, Chat, Calendar, etc.)
- Brand icons (Google, Apple, Discord, etc.)
- Payment methods (Visa, Mastercard, Crypto)
- Weather icons
- Empty states (Error, NoAccess, NoResult)
- Daily, Modal, Notifications, Font icons

### 7. Typography Components

**Elements**:
- Shimmer text (loading states) - 1rem and 2rem sizes
- Pills (tiny, small, medium) - inline-flex display
- Line clamp (2-line truncation shown)
- Section titles with subtitles

### 8. Additional Components

Based on the component index, the following are also documented:
- Events
- Timeline
- Tint
- Editor
- Social (integrations)
- Datetime (pickers/selectors)
- Chat
- Weather
- Collapse (accordion/expandable)

## Theme System

**Mode Detection**:
- System preference: `prefers-color-scheme`
- Root-level theme classes: "dark" / "light"

**Theme Switcher**:
- Three-button toggle: Light / Dark / System

## Implementation Notes

1. **CSS Custom Properties**: Luma heavily relies on CSS variables for theming, making runtime theme switching efficient

2. **Hover Optimization**: Hover effects only apply on `@media (hover: hover)` devices

3. **Accessibility**:
   - Focus outlines: 2px solid
   - Disabled states clearly indicated
   - User-select disabled on buttons

4. **Responsive Design**: Component variations for different sizes (sm, md, lg implied)

5. **Icon System**: Comprehensive with multiple rendering styles (outline, filled, thick)

6. **Brand Consistency**: Social/brand buttons maintain identity through color coding

## Next Steps for Recreation

1. **Define Exact Color Values**: Use browser inspection or reverse-engineer from screenshots to get hex/rgb values for all CSS variables

2. **Measure Components**: Capture exact pixel dimensions for all component sizes

3. **Extract Animations**: Document timing functions and duration values

4. **Typography Scale**: Complete the font size/weight/line-height scales

5. **Shadow Definitions**: Get exact box-shadow values for different elevation levels

6. **Border Radius Scale**: Define the complete radius system

7. **Spacing Scale**: Formalize into a consistent scale (e.g., 4px base)

## Recommended shadcn/Radix Mapping

| Luma Component | Radix Primitive | shadcn Component |
|----------------|-----------------|------------------|
| Button | Native button | Button |
| Input | Native input | Input |
| Checkbox | @radix-ui/react-checkbox | Checkbox |
| Radio | @radix-ui/react-radio-group | RadioGroup |
| Switch | @radix-ui/react-switch | Switch |
| Select | @radix-ui/react-select | Select |
| Slider | @radix-ui/react-slider | Slider |
| Modal/Dialog | @radix-ui/react-dialog | Dialog |
| Popover | @radix-ui/react-popover | Popover |
| Tooltip | @radix-ui/react-tooltip | Tooltip |
| Toast | @radix-ui/react-toast | Toast |
| Dropdown Menu | @radix-ui/react-dropdown-menu | DropdownMenu |
| Accordion | @radix-ui/react-accordion | Accordion |
| Tabs | @radix-ui/react-tabs | Tabs |
| Alert | Custom | Alert |
| Banner | Custom | Alert variant |

---

**Status**: Reconnaissance Phase Complete
**Coverage**: ~70% of design system documented
**Confidence**: High for structure, Medium for exact values
**Recommendation**: Proceed to Phase 2 with iterative refinement based on visual comparison
