```markdown
# Design System Document: Editorial Vitality

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Living Orchard."** 

Unlike static, grid-bound e-commerce sites, this system treats the digital interface as a lush, organic environment. We move away from "Standard UI" by embracing **Dynamic Asymmetry** and **Tonal Depth**. The goal is to make the user feel the energy of a local celebration and the freshness of hand-picked fruit. We achieve this through "floating" layouts, overlapping high-quality photography, and a complete rejection of rigid structural lines in favor of soft, nested surfaces.

## 2. Colors: The Palette of Celebration
The color strategy is rooted in the deep, soulful red of Hibiscus (Sobolo) and the citrus energy of the sun.

### Core Roles
- **Primary (#b11d37):** The "Sobolo" Heart. Used for high-impact brand moments and key calls to action.
- **Secondary (#8c4a00):** The "Sun-Kissed Orange." Used for secondary accents and warmth.
- **Tertiary (#006b1b):** The "Fresh Leaf." Reserved for health callouts and natural benefits.
- **Neutral Surface (#f7f6f5):** An off-white, "fine paper" base that prevents the clinical feel of pure hex white.

### The "No-Line" Rule
**Strict Prohibition:** 1px solid borders for sectioning are forbidden. 
Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit against a `surface` background to create a soft transition. Use the `0.5` to `2` spacing tokens to let the background "breathe" between content blocks.

### The "Glass & Gradient" Rule
To elevate the UI beyond a flat template, use **Glassmorphism** for floating headers or navigation bars. 
- **Backdrop Blur:** 12px - 20px.
- **Fill:** `surface` at 70% opacity.
- **Signature Gradient:** For primary CTAs, use a linear gradient from `primary` to `primary-container` at a 135-degree angle to simulate the depth of liquid juice.

## 3. Typography: The Editorial Voice
We pair the playful energy of **Plus Jakarta Sans** with the structural clarity of **Manrope**.

- **Display & Headlines (Plus Jakarta Sans):** These are our "celebratory" moments. Use `display-lg` for hero sections with tight letter-spacing (-0.02em) to create a bold, editorial impact.
- **Body & Titles (Manrope):** This provides the "modern, clean" balance. Use `body-lg` for descriptions to ensure high legibility against vibrant backgrounds.
- **Hierarchy as Brand:** Use extreme scale contrast. A `display-lg` headline should often sit near a `label-md` category tag to create a high-end, magazine-style layout.

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use **Tonal Layering** to create "presence."

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. 
- **Base Level:** `surface` (#f7f6f5)
- **Content Cards:** `surface-container-lowest` (#ffffff) to create a natural, soft lift.
- **Sub-sections:** `surface-container-low` (#f1f1f0)

### Ambient Shadows
If a "floating" effect is required for a floating action button or an organic photo element:
- **Shadow Blur:** 40px to 60px.
- **Opacity:** 4%-6%.
- **Tint:** Use a translucent version of `on-surface` (#2e2f2f) rather than pure black.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., input fields), use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

## 5. Components: Organic Primitives

### Buttons: The "Pebble" Shape
- **Shape:** Always use `rounded-full` (9999px) to mimic organic fruit shapes.
- **Primary:** `primary` background with `on-primary` text. Add a subtle inner-glow (white at 10% opacity) on the top edge for a "liquid" look.
- **Secondary:** `secondary-container` background. No border.

### Chips: The Flavor Tags
- **Style:** Use `surface-container-high` for unselected and `tertiary` for selected "Healthy/Natural" filters. 
- **Padding:** `1.5` (top/bottom) by `3` (left/right).

### Input Fields: Soft Clarity
- **Background:** `surface-container-lowest`.
- **Border:** Ghost Border (15% `outline-variant`).
- **Focus State:** Transition the border to 100% `primary` or `secondary` with a subtle `primary-fixed` outer glow.

### Cards: The Floating Orchard
- **Rule:** Forbid divider lines.
- **Structure:** Use `spacing-6` padding. Separate the "Fruit Image" from the "Description" using a change in surface color (e.g., top half `surface-container-highest`, bottom half `surface-container-lowest`).
- **Imagery:** Photos should "break the box"—let fruit leaves or splashes overlap the card boundaries using absolute positioning.

### Additional Component: "The Refreshment Bar" (Progress)
For loading or health-tracking, use an organic, non-linear progress bar with `rounded-full` edges and a gradient fill from `tertiary` to `tertiary-container`.

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** Offset your text and images. Let a bottle of juice sit slightly off-center to create energy.
- **Focus on Photography:** Use `surface-container-highest` as a placeholder for high-quality, macro fruit photography.
- **Embrace White Space:** Use the `spacing-16` and `spacing-20` tokens between major sections to emphasize the "Freshness."

### Don't:
- **Don't use 1px dividers:** They clutter the "Natural" aesthetic. Use vertical space instead.
- **Don't use hard corners:** Every container must have at least `rounded-DEFAULT` (1rem) or `rounded-xl` (3rem) to maintain the "Organic" brand personality.
- **Don't crowd the UI:** If a screen feels busy, increase the background-to-content ratio. This brand is "Celebratory," not "Cluttered."

### Accessibility Note:
While we use soft tonal shifts, always ensure that text (`on-surface`) maintains at least a 4.5:1 contrast ratio against the chosen `surface-container` tier. Use the `error` (#b02500) token specifically for validation to ensure it stands out against the `primary` red.```