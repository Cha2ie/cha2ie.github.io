# Compitel Website Style Guide

## 🎨 Color Palette

This style guide defines the official color palette for the Compitel website, designed to complement the company logo and create a professional, cohesive brand experience.

### Primary Colors

| Purpose | Color Name | Hex Code | RGB | Usage |
|---------|------------|----------|-----|-------|
| **Primary Text** | Dark Gray | `#2E2E2E` | rgb(46, 46, 46) | Main text content, headings, navigation |
| **Accent** | Cyan | `#4DE0EB` | rgb(77, 224, 235) | Primary brand accent, links, highlights |
| **Secondary** | Warm Orange | `#EB944D` | rgb(235, 148, 77) | Secondary accents, checkmarks, call-to-action elements |
| **Background** | Light Gray | `#F5F5F5` | rgb(245, 245, 245) | Page background, section backgrounds |
| **Highlight** | Sky Blue | `#4DBCEB` | rgb(77, 188, 235) | Hero gradients, special highlights |
| **Button Hover** | Dark Cyan | `#3CBAC6` | rgb(60, 186, 198) | Interactive states, hover effects |

### Color Usage Guidelines

#### Primary Text (`#2E2E2E`)
- **Use for:** All body text, headings, navigation links
- **Accessibility:** High contrast against light backgrounds
- **Alternative:** Use with opacity (0.7-0.9) for secondary text

#### Accent Cyan (`#4DE0EB`)
- **Use for:** Primary buttons, active states, brand highlights
- **Gradient partner:** Combines well with Sky Blue for gradients
- **Hover state:** Transitions to Dark Cyan (`#3CBAC6`)

#### Secondary Orange (`#EB944D`)
- **Use for:** Checkmarks, secondary buttons, accent elements
- **Contrast:** Excellent visibility against light backgrounds
- **Complementary:** Works well with cyan tones

#### Background Gray (`#F5F5F5`)
- **Use for:** Page backgrounds, section separators
- **Accessibility:** Subtle enough to not interfere with text readability
- **Alternative:** White backgrounds for cards and content areas

## 🖌️ Typography

### Font Stack
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Text Hierarchy
- **H1 (Hero):** 3rem (48px) - Hero titles
- **H2 (Section):** 2.5rem (40px) - Section headings
- **H3 (Card):** 1.5rem (24px) - Card titles
- **H4 (Benefit):** 1.2rem (19px) - Benefit titles
- **Body Text:** 1rem (16px) - Regular content
- **Navigation:** 1rem (16px) with font-weight: 500

## 🎯 Component Styling

### Solution Cards
```css
background: white;
border: 2px solid #4DE0EB;
border-radius: 10px;
```
- **Hover Effect:** Border changes to `#3CBAC6` with cyan shadow
- **Text Color:** Primary text (`#2E2E2E`) with reduced opacity for descriptions

### Navigation
- **Default State:** Primary text color (`#2E2E2E`)
- **Hover State:** Cyan accent (`#4DE0EB`)
- **Transition:** Smooth 0.3s ease

### Hero Section
- **Background:** Linear gradient from Cyan to Sky Blue
- **Gradient:** `linear-gradient(135deg, #4DE0EB 0%, #4DBCEB 100%)`
- **Text:** White for maximum contrast

### Interactive Elements
- **Checkmarks:** Warm Orange (`#EB944D`)
- **Hover Effects:** Dark Cyan (`#3CBAC6`)
- **Box Shadows:** Cyan tones with transparency

## 📱 Responsive Considerations

### Mobile Breakpoint: 768px
- Colors remain consistent across all devices
- Ensure sufficient contrast ratios for accessibility
- Test color visibility on various screen types

## ♿ Accessibility

### Contrast Ratios
- **Primary Text on Light Background:** 12.6:1 (AAA compliant)
- **Cyan on White:** 4.1:1 (AA compliant)
- **Orange on White:** 3.8:1 (AA compliant)

### Best Practices
- Never use color alone to convey information
- Maintain minimum 3:1 contrast for graphical elements
- Test with color blindness simulators

## 🔧 Implementation Notes

### CSS Custom Properties (Optional Enhancement)
```css
:root {
  --color-primary-text: #2E2E2E;
  --color-accent: #4DE0EB;
  --color-secondary: #EB944D;
  --color-background: #F5F5F5;
  --color-highlight: #4DBCEB;
  --color-hover: #3CBAC6;
}
```

### Opacity Usage
- **Secondary Text:** `opacity: 0.8`
- **List Items:** `opacity: 0.9`
- **Benefit Text:** `opacity: 0.7`

## 📋 Brand Consistency Checklist

- [ ] All text uses Dark Gray (`#2E2E2E`)
- [ ] Primary accent is Cyan (`#4DE0EB`)
- [ ] Hover states use Dark Cyan (`#3CBAC6`)
- [ ] Checkmarks and secondary accents use Warm Orange (`#EB944D`)
- [ ] Backgrounds use Light Gray (`#F5F5F5`) or white
- [ ] Hero section uses cyan-to-blue gradient
- [ ] All interactive elements have appropriate hover states

---

**Last Updated:** August 2025  
**Version:** 1.0  
**Author:** Compitel Web Team