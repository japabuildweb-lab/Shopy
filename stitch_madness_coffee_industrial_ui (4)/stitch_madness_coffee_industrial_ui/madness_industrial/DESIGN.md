# Design System Strategy: Industrial Signalism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Industrial Signalism."** 

This isn't just a coffee brand; it’s a high-visibility technical manual for urban survival. We are moving away from the "cozy cafe" aesthetic and leaning into the raw, unapologetic energy of street culture and industrial utility. The design breaks the standard template look by utilizing **aggressive asymmetry**, **monolithic blocks**, and **technical data visualization** styles. We treat the screen as a piece of hardware—machined, precise, and high-contrast. 

Expect layouts that feel like blueprints or caution tape. We use extreme typographic scales and overlapping technical elements to create a sense of organized chaos.

## 2. Colors
The palette is rooted in absolute contrast. We utilize deep blacks to create infinite depth, punctuated by the "Electric Signal" of fluorescent yellow.

*   **Primary (#FAFF00):** Our "Signal" color. Used for critical actions, status indicators, and branding. It must feel like it’s vibrating against the dark background.
*   **Surface Hierarchy:** We define depth through tonal shifts rather than shadows.
    *   `surface`: The base layer (#131313).
    *   `surface_container_low`: For subtle sectioning.
    *   `surface_container_highest`: For high-priority interactive areas.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries are created through background shifts. A card is defined by being a `surface_container_high` block sitting on a `surface` background.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked industrial plates. When nesting components, the innermost element should typically be the brightest (highest tier) to "extrude" toward the user.
*   **Signature Textures:** While the brand is minimalist, we introduce "Technical Depth" using subtle gradients from `primary` to `primary_container`. For hero sections, use a vertical gradient to mimic the flicker of a neon sign or a scanning laser.

## 3. Typography
Typography is our primary architectural tool. It must feel heavy, loud, and engineered.

*   **Display & Headlines (Space Grotesk):** Extra-bold. These are our "Impact" layers. Use `display-lg` (3.5rem) for hero statements. The wide apertures and technical feel of Space Grotesk communicate the "Street Style" industrial roots.
*   **Body & Labels (Inter):** High readability is paramount. Inter provides a neutral, "Swiss-style" clarity that balances the aggression of the headlines.
*   **Hierarchy Strategy:** Use "Massive vs. Micro" scaling. Pair a `display-lg` headline with a `label-sm` technical caption to create an editorial, high-end feel that avoids the "average app" look.

## 4. Elevation & Depth
In this system, "Up" is not achieved by light; it is achieved by **Signal Strength.**

*   **The Layering Principle:** Depth is purely tonal. To lift an object, move it up the `surface-container` scale. 
*   **Ambient Shadows:** Traditional shadows are banned. If a floating element (like a FAB or Popover) requires separation, use an **Industrial Glow**. This is a shadow with a 0px offset, a large blur (30px+), and a low-opacity primary color (`#FAFF00` at 5-10%) to make the element appear as if it is backlighting the surface.
*   **The "Ghost Border" Fallback:** For accessibility in forms, use a "Ghost Border" using `outline_variant` at 15% opacity. This provides a guide without breaking the "Hard Edge" industrial aesthetic.
*   **Glassmorphism:** For overlays, use `surface_container` colors with a 60% opacity and a 20px backdrop-blur. This creates a "Frosted Polycarbonate" effect common in industrial design.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#FAFF00), `on_primary` text (#313300). 0px border radius. Hard edges only.
*   **Secondary:** Ghost style. `outline` color, 2px stroke, no radius.
*   **State:** On hover, the button should invert (Background: White, Text: Black) to signal high-intensity interaction.

### Chips (Badges)
*   Styled as "Status Tags." Rectangular, no radius. Use `surface_container_highest` with `label-sm` text. Often paired with a 4px solid square icon to mimic a terminal interface.

### Input Fields
*   No four-sided boxes. Use a `surface_container_high` background block with a 2px solid `primary` bottom border. Labels should be `label-md` and all-caps to maintain the technical aesthetic.

### Cards & Lists
*   **Forbidden:** Divider lines. 
*   **Required:** Use "Negative Space Trenches." Separate list items using 8px or 16px of pure `background` (#131313) space, or alternate between `surface_container_low` and `surface_container_lowest`.

### Technical "Madness" Component: The Grid Overlay
*   For high-impact screens, overlay a subtle 24px dot grid or crosshair pattern in `outline_variant` (10% opacity) to reinforce the "Industrial Blueprint" theme.

## 6. Do's and Don'ts

### Do:
*   **Embrace the Edge:** Keep all border-radii at `0px`. If it’s not sharp, it’s not this system.
*   **Use Mono-spacing for Data:** Use Inter with tabular navigation for prices and weight (e.g., "250G", "$18.00") to feel like a warehouse receipt.
*   **Asymmetric Grids:** Align text to the far left and CTA buttons to the far right with significant white space between to create high-end tension.

### Don't:
*   **No Softness:** Never use soft shadows, rounded corners, or pastel colors.
*   **Avoid Centering:** Centered layouts feel "safe" and "templated." Stick to strong left-aligned or justified technical layouts.
*   **No Decorative Icons:** Icons must be functional and geometric. If an icon doesn't serve a technical purpose, remove it. Use "Chevron-Right" instead of "Arrow" for a more machined look.