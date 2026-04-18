# Project Plan: NFT Launchpad UI (nft-launchpad-ui)

## Overview
An NFT minting page designed to drive urgency and showcase digital art. Features a live countdown timer, a masonry grid for artwork previews, and a glowing progress bar for mints. Designed with a cyberpunk aesthetic for sale on UI8.

## Deliverables

### 1. Project Structure (Next.js App Router)
```text
/
├── app/
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main landing page (Minting interface)
│   ├── globals.css        # Tailwind directives
│   └── fonts/             
├── components/
│   ├── minting/           # Core features
│   │   ├── Countdown.tsx  # Live digital clock
│   │   ├── ProgressBar.tsx# Glowing mint supply bar
│   │   └── MintCard.tsx   # Action card to connect/mint
│   ├── gallery/           # Artwork display
│   │   └── MasonryGrid.tsx# Displaying NFT assets
│   ├── layout/            
│   └── 3d/                
├── lib/                   
├── public/                
└── tailwind.config.ts     
```

### 2. Section-by-Section Breakdown
- **Hero/Minting Section:** 
  - Layout: Focus on central MintCard overlapping a large, dark abstract background.
  - Content: Title of the collection, live countdown, "Mint Now" button, supply progress bar.
- **Artwork Gallery:**
  - Layout: Asymmetric masonry grid.
  - Content: High-contrast, glowing image borders showcasing the NFTs.
- **Roadmap/Lore Section:**
  - Layout: Vertical timeline.
  - Content: Steps of the project with neon node connectors.

### 3. Design System
- **Colors:**
  - Background: Obsidian `#0A0A0F`
  - Primary Neon: Toxic Green `#39FF14` (for active/minting states)
  - Secondary Accent: Electric Purple `#B026FF`
  - Cards: Semi-transparent `#FFFFFF05` with heavy blur.
- **Typography:** `Space Grotesk` (Headings) and `Inter` (Body).

### 4. Animation Plan (Framer Motion)
- Use `framer-motion` for the progress bar filling up dynamically.
- Implement subtle float animations for the NFT cards in the masonry grid using `animate={{ y: [0, -10, 0] }}`.

### 5. Spline Integration Plan
- Use Spline for the main hero background (e.g., a slowly rotating 3D sci-fi artifact or holographic display).
- Keep the Spline object dark with green/purple rim lighting.

### 6. Component Architecture
- `MintCard`: Encapsulates logic for quantity selection, price calculation, and the mint action.
- `MasonryGrid`: Maps over an array of image objects, assigning varied heights to simulate masonry.

### 7. Performance Strategy
- Aggressive image optimization (`next/image`) since the gallery will be heavy.
- Defer Spline loading until the initial DOM is fully parsed.

### 8. UI8 Packaging Checklist
- Clean `package.json`.
- Detailed `README.md`.
- Placeholder images (Cyberpunk style) for the gallery.
