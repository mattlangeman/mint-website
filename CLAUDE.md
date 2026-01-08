# CLAUDE.md - Project Guidelines

## Project Overview

This is the Mint Digital website - a boutique consulting agency that helps non-profits, universities, and public sector organizations design data-driven tools and strategies that deliver real results. Amplify your impact with data-driven solutions.

**Design Reference:** https://ovo-altverse.webflow.io/
- Replicate the Altverse design closely, adapting content for Mint Digital
- Do not include the "Now Booking" scroller!!
- Match layout structure, spacing, and visual patterns from the reference
- **Local copy:** `/workspace/content-assets/design-reference/` contains downloaded HTML, CSS, and SVGs

## Tech Stack

- **Framework:** SvelteKit 2.x with Svelte 5 (runes)
- **Styling:** Tailwind CSS v4 with custom theme in `app.css`
- **UI Components:** bits-ui based components (shadcn-svelte pattern)
- **Forms:** sveltekit-superforms + zod validation
- **Icons:** lucide-svelte
- **TypeScript:** Strict mode

## Project Structure

```
website/
├── src/
│   ├── routes/           # Pages (+page.svelte, +layout.svelte)
│   ├── lib/
│   │   ├── components/ui/  # Reusable UI components
│   │   └── index.ts        # Lib exports
│   ├── app.css           # Global styles & Tailwind theme
│   └── app.html          # HTML template
├── static/               # Static assets
└── content-assets/       # Content reference files (about.txt, services.txt)
```

## Code Conventions

### TypeScript
- **Strict with explicit types** - always add type annotations
- Define `interface Props` for all component props
- Avoid `any` - use proper typing

### Svelte 5 Patterns
- Use runes: `$props()`, `$state()`, `$derived()`
- **Minimize state** - prefer derived values and props over local state
- Use `{@render children()}` for slots
- Follow existing component patterns in `src/lib/components/ui/`

### Component Structure
```svelte
<script lang="ts">
  import type { Component } from 'svelte';

  interface Props {
    title: string;
    class?: string;
  }

  let { title, class: className = '' }: Props = $props();
</script>

<div class="... {className}">
  {title}
</div>
```

### Styling
- Use **Tailwind classes inline** on elements
- Leverage theme colors: `text-foreground`, `bg-background`, `text-muted-foreground`, `border-border`
- Use `.heading-display` class for big hero/display text (Anton font, uppercase)
- Standard headings use Montserrat, body text uses IBM Plex Sans
- Responsive mobile friendly design is important

### Component Exports
UI components use barrel exports pattern:
```typescript
// index.ts
import Root from "./component.svelte";
export { Root, Root as ComponentName };
```

## Commands

```bash
cd website
npm run dev        # Start dev server
npm run build      # Production build
npm run check      # Type checking (run after changes)
npm run preview    # Preview production build
```

**After making changes:** Always run `npm run check` to verify types.

## Important Guidelines

### Before Implementing
- **Ask before proceeding** when uncertain about implementation approach
- Read existing code before modifying - understand patterns first
- Check the design reference for visual details

### Common Pitfalls to Avoid
- **Missing design details** - match the Altverse reference closely
- **Poor component structure** - follow existing patterns in `ui/` folder
- Don't overcomplicate - keep solutions simple and direct

### Design Reference Notes
The Altverse site uses (see `/workspace/content-assets/design-reference/`):

**Page Structure:**
- `index.html` - Homepage with hero, services, projects, testimonials
- `about.html` - About page with team section
- `work.html` - Projects/portfolio page
- `contact.html` - Contact form page

**Key Layout Patterns:**
- Hero section with 3 staggered images + text overlays ("That's Us", "Sooo cool", "#Workingmood")
- Animated text reveal section with emojis
- 3-column service cards with SVG icons
- Featured project grid with black arrow hover indicators
- Horizontal testimonial carousel
- Footer with multi-column links

**CSS Classes to Reference:**
- `.title-caps` - Large uppercase display headings (Anton font)
- `.container` - Max-width content wrapper
- `.section` - Page sections with consistent spacing
- `.card` - Service card styling
- `.project-box` - Project card with image + title
- `.line` - Horizontal divider lines between sections

**SVG Icons Available:**
- `svg/black-arrow.svg` - Arrow for project links
- `svg/web-design-icon.svg`, `svg/mobile-app-icon.svg`, `svg/development-icon.svg` - Service icons

## Content & Assets

Reference content and assets are in `/workspace/content-assets/`:
- `about.txt` - Company description
- `services.txt` - Service offerings detail
- `linkedin-copy.txt` - LinkedIn profile copy
- Team member folders: `matt/`, `zach/`, `chris/`, `trevor/` - Headshots and bios
- SVG icons: `browser.svg`, `light-bulb.svg`, `mobile.svg`
- `design-reference/` - Downloaded Altverse site (HTML, CSS, SVGs)

Always check this folder for content and imagery before using placeholders.
